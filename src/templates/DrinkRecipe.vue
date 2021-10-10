<template>
   <Layout>
      <h1 v-html="$page.drink.name" />
      <ul class="tags">
         <li v-for="tag in $page.drink.tags" :key="tag.id">
            <g-link :to="tag.path">#{{ tag.id }}</g-link>
         </li>
      </ul>

      <h2>Ingredients</h2>
      <ul>
         <li v-for="ingredient in $page.drink.ingredients" :key="ingredient.item.id">
            {{ ingredient.amount.value }} {{ ingredient.amount.unit }} {{ ingredient.name || ingredient.item.name }}
         </li>
      </ul>

      <div v-if="$page.drink.garnish.length">
         <h2>Garnish</h2>
         <ul>
            <li v-for="garnish in $page.drink.garnish" :key="garnish.item.id">
               {{ garnish.name || garnish.item.name }}
            </li>
         </ul>
      </div>
   </Layout>
</template>

<style>
.tags {
   display: flex;
   flex-wrap: wrap;
   margin: 0;
   padding: 0;
   list-style: none;
   gap: 10px;
}
.tags a {
   text-decoration: none;
   white-space: nowrap;
   background-color: hsl(219deg 31% 43%);
   color: #f6f6f6;
   border-radius: 1em;
   padding: .2em .5em;
}
.tags a:hover {
   background-color: hsl(219deg 24% 29%);
}
</style>

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
      tags {
         id
         path
      }
      ingredients {
         item {
            id
            name
         }
         amount {
            value
            unit
         }
         name
      }
      garnish {
         item {
            id
            name
         }
         name
      }
   }
}
</page-query>
