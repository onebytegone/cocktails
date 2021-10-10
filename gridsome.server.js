// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const yaml = require('js-yaml'),
      fs = require('fs'),
      util = require('util'),
      path = require('path'),
      glob = util.promisify(require('glob'));

module.exports = function(api) {
   // See: https://gridsome.org/docs/data-store-api/
   api.loadSource(async ({ addCollection, store }) => {
      const drinks = addCollection('Drink'),
            ingredients = addCollection('Ingredient'),
            tags = addCollection('Tag'),
            drinkFiles = await glob(path.join(__dirname, 'drinks', '**', '*.yml')),
            foundTags = new Set();

      yaml.load(await fs.promises.readFile(path.join(__dirname, 'data', 'ingredients.yml'), 'utf8'))
         .ingredients
         .forEach((ingredient) => {
            ingredients.addNode(ingredient);
         });

      drinks.addReference('tags', 'Tag');

      await Promise.all(drinkFiles.map(async (file) => {
         const raw = await fs.promises.readFile(file, 'utf8'),
               data = yaml.load(raw);

         data.ingredients.forEach((ingredient) => {
            // Ensure the value is always a string to keep a consistent schema
            ingredient.amount.value = ingredient.amount.value.toString();

            ingredient.item = store.createReference('Ingredient', ingredient.ingredient);
            delete ingredient.ingredient;
         });

         if (data.garnish) {
            data.garnish.forEach((garnish) => {
               garnish.item = store.createReference('Ingredient', garnish.ingredient);
               delete garnish.ingredient;
            });
         }

         if (data.tags) {
            data.tags.forEach((tag) => {
               foundTags.add(tag);
            });
         }

         drinks.addNode({
            id: path.basename(file, '.yml'),
            ...data,
         });
      }));

      foundTags.forEach((tag) => {
         tags.addNode({
            id: tag,
         });
      });
   });

   api.createPages(({ createPage }) => {
      // Use the Pages API here: https://gridsome.org/docs/pages-api/
   });
};
