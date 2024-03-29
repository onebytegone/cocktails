// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {

   siteName: 'Cocktails',
   pathPrefix: '/cocktails',

   plugins: [],

   templates: {
      Drink: [
         {
            path: '/drinks/:id',
            component: './src/templates/DrinkRecipe.vue',
         },
      ],
      Ingredient: [
         {
            path: '/made-with/:id',
            component: './src/templates/Ingredient.vue',
         },
      ],
      Tag: [
         {
            path: '/tagged/:id',
            component: './src/templates/Tag.vue',
         },
      ],
   },

};
