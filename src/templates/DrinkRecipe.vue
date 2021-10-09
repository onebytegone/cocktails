<template>
   <Layout>
      <h1 v-html="$page.drink.name" />
      <ul>
         <li v-for="tag in $page.drink.tags" :key="tag">
           {{ tag }}
         </li>
      </ul>

      <h2>Ingredients</h2>
      <ul>
         <li v-for="ingredient in $page.drink.ingredients" :key="ingredient.ingredient">
            {{ ingredient.amount.value }} {{ ingredient.amount.unit }} {{ ingredient.name }}
         </li>
      </ul>

      <div v-if="$page.drink.garnish.length">
         <h2>Garnish</h2>
         <ul>
            <li v-for="garnish in $page.drink.garnish" :key="garnish.ingredient">
            {{ garnish.name }}
            </li>
         </ul>
      </div>
   </Layout>
</template>

<script>
export default {
   metaInfo() {
      return {
         title: `Drink: ${this.$page.drink.name}`,
      };
   },
}
</script>

<page-query>
query ($id: ID!) {
   drink(id: $id) {
      name
      tags
      ingredients {
         ingredient
         amount {
            value
            unit
         }
         name
      }
      garnish {
         ingredient
         name
      }
   }
}
</page-query>
