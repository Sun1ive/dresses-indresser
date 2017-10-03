<template>
  <v-app @scroll="toolbar">
    <app-header></app-header>
    <toolbar></toolbar>
    <app-main></app-main>
    <app-footer></app-footer>
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
    },
    methods: {
      toolbar () {
        let offset = window.pageYOffset
        let toolbar = document.querySelector('.toolbar')
        if (offset >= 115) {
          toolbar.classList.add('toolbar--fixed')
        } else {
          toolbar.classList.remove('toolbar--fixed')
        }
      }
    },
    created () {
      window.addEventListener('scroll', this.toolbar)
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.toolbar)
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

