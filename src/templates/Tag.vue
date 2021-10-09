<template>
   <Layout>
      <h1>#{{ $page.tag.id }}</h1>
      <ul>
         <li v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
            <g-link :to="edge.node.path">{{ edge.node.name }}</g-link>
         </li>
      </ul>
   </Layout>
</template>

<script>
export default {
   metaInfo() {
      return {
         title: `Tag: ${this.$page.tag.id}`,
      };
   },
}
</script>

<page-query>
query ($id: ID!) {
   tag(id: $id) {
      id
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
