<template>
   <Layout>

      <h1>Cocktails 🍸🥃🍹</h1>

      <h2>Featured</h2>

      <ul>
         <li v-for="edge in $page.featuredDrinks.edges" :key="edge.node.id">
           <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
         </li>
      </ul>

   </Layout>
</template>

<script>
export default {
   metaInfo: {
      title: 'Home'
   }
}
</script>

<page-query>
query {
   featuredDrinks: allDrink(filter: { id: { in: [ "hemingway-special", "aviation", "sidecar" ] } }) {
      edges {
         node {
            id
            name
            path
         }
      }
   }
}
</page-query>

<style>
.home-links a {
   margin-right: 1rem;
}
</style>
