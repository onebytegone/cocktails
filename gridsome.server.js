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
   api.loadSource(async ({ addCollection }) => {
      const drinkCollection = addCollection('Drink'),
            drinkFiles = await glob(path.join(__dirname, 'drinks', '**', '*.yml'));

      await Promise.all(drinkFiles.map(async (file) => {
         const raw = await fs.promises.readFile(file, 'utf8'),
               data = yaml.load(raw);

         data.ingredients.forEach((ingredient) => {
            // Ensure the value is always a string to keep a consistent schema
            ingredient.amount.value = ingredient.amount.value.toString();
         });

         drinkCollection.addNode({
            id: path.basename(file, '.yml'),
            ...data,
         });
      }));
   });

   api.createPages(({ createPage }) => {
      // Use the Pages API here: https://gridsome.org/docs/pages-api/
   });
};
