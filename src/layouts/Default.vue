<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/drinks/">Drinks</g-link>
      </nav>
    </header>
    <slot/>
    <footer class="footer">
      <span>
         <a href="https://github.com/onebytegone/cocktails">View on GitHub</a> | Created by <a href="https://onebytegone.com">Ethan Smith</a>
      </span>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
body {
   font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
   margin:0;
   padding:0;
   line-height: 1.5;
}

.layout {
   max-width: 760px;
   margin: 0 auto;
   padding-left: 20px;
   padding-right: 20px;
}

.header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 20px;
   height: 80px;
}

.nav__link {
   margin-left: 20px;
}

.footer {
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 20px;
   height: 80px;
   color: #888888;
   a {
      color: #888888;
      &:hover {
         color: #333333;
      }
   }
}
</style>
