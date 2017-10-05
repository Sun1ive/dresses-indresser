<template>
  <v-app>
    <app-navigation></app-navigation>
    <app-header></app-header>
    <app-toolbar @showOrder="showOrder"></app-toolbar>
    <app-main @showOrder="showOrder"></app-main>
    <v-dialog v-model="dialog" width="400">
      <app-order :item="item" @closeOrder="closeOrder"></app-order>
    </v-dialog>
    <app-footer @showOrder="showOrder"></app-footer>
  </v-app>
</template>

<script>
import toolbar from './components/toolbar'
import main from './components/main'
import footer from './components/footer'
import header from './components/header'
import order from './components/order'
import navigation from './components/navigation'

  export default {
    components: {
      'app-toolbar': toolbar,
      'app-main': main,
      'app-footer': footer,
      'app-header': header,
      'app-order': order,
      'app-navigation': navigation
    },
    data () {
      return {
        dialog: false,
        item: []
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
      },
      showOrder (item) {
        this.item = item
        console.log(this.item);
        this.dialog = true
      },
      closeOrder () {
        this.dialog = false
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
.list {
  padding: 0
}
</style>

