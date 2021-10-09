<template>
   <Layout>
      <h1>Drinks</h1>
      <ul>
         <li v-for="edge in $page.allDrink.edges" :key="edge.node.id">
           <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
         </li>
      </ul>
      <Pager :info="$page.allDrink.pageInfo" linkClass="nav__link"/>
   </Layout>
</template>

<script>
import { Pager } from 'gridsome'

export default {
   components: {
      Pager,
   },
   metaInfo: {
      title: 'Drinks',
   },
}
</script>

<page-query>
query ($page: Int) {
   allDrink(sortBy: "name", order: ASC, perPage: 25, page: $page) @paginate {
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
