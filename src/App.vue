<template>
  <v-app>
    <header>
      <toolbar></toolbar>
    </header>
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

  export default {
    components: {
      toolbar,
      'app-main': main,
      'app-footer': footer
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
}
.container {
  padding: 0;
}
</style>

