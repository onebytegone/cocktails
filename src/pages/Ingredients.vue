<template>
   <Layout>
      <h1>Ingredients</h1>
      <ul>
         <li v-for="edge in $page.allIngredient.edges" :key="edge.node.id">
           <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
         </li>
      </ul>
      <Pager :info="$page.allIngredient.pageInfo" linkClass="nav__link"/>
   </Layout>
</template>

<script>
import { Pager } from 'gridsome'

export default {
   components: {
      Pager,
   },
   metaInfo: {
      title: 'Ingredients',
   },
}
</script>

<page-query>
query ($page: Int) {
   allIngredient(sortBy: "name", order: ASC, perPage: 25, page: $page) @paginate {
      pageInfo {
         totalPages
         currentPage
      }
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
