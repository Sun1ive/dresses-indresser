<template>
  <v-app>
    <app-header></app-header>
    <toolbar></toolbar>
    <app-main></app-main>
    <footer>
      <app-footer></app-footer>
    </footer>
  </v-app>
</template>

<script>
import toolbar from './components/toolbar'
import main from './components/main'
import footer from './components/footer'
import header from './components/header'

  export default {
    components: {
      toolbar,
      'app-main': main,
      'app-footer': footer,
      'app-header': header
    },
    data () {
      return {
      }
    }
  }
</script>

<style>
a {
  text-decoration: none;
  color: white;
}
.container {
  padding: 0;
}
.toolbar--fixed + main {
  padding-top: 0;
}
ul > li {
  list-style-type: none;
}
ul {
  padding: 0;
}
</style>

