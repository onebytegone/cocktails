I
<template>
   <Layout>
      <h1>{{ $page.ingredient.name }}</h1>
      <ul>
         <li v-for="edge in $page.ingredient.belongsTo.edges" :key="edge.node.id">
            <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
         </li>
      </ul>
   </Layout>
</template>

<script>
export default {
   metaInfo() {
      return {
         title: `Ingredient: ${this.$page.ingredient.id}`,
      };
   },
}
</script>

<page-query>
query ($id: ID!) {
   ingredient(id: $id) {
      name
      belongsTo {
         edges {
            node {
               ... on Drink {
                  id
                  name
                  path
               }
            }
         }
      }
   }
}
</page-query>
