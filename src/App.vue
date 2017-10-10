<template>
  <v-app>
    <app-header></app-header>
    <!-- <app-toolbar :showNumbers="showNumbers" @showCallForm="showCallForm" @showOrder="showOrder"></app-toolbar> -->
    <app-toolbar :showNumbers="showNumbers" @showOrder="showOrder"></app-toolbar>
    <app-main @showOrder="showOrder"></app-main>
    <v-dialog scrollable v-model="dialog" width="400">
      <app-order :item="item" @closeOrder="closeOrder"></app-order>
    </v-dialog>
    <!-- <v-dialog scrollable v-model="callDialog" width="370">
      <app-call @closeCall="closeCall"></app-call>
    </v-dialog> -->
    <!-- <widget-phone v-if="!callDialog" @showCallForm="showCallForm"></widget-phone> -->
    <scroll-top></scroll-top>
    <app-widget></app-widget>
    <app-footer @showOrder="showOrder"></app-footer>
  </v-app>
</template>

<script>
import toolbar from './components/toolbar'
import main from './components/main'
import footer from './components/footer'
import header from './components/header'
import order from './components/order'
// import orderCall from './components/orderCall'
import phone from './components/phone'
import scrollTop from './components/scrolltop'
import sideWidget from './components/sidewidget'


  export default {
    components: {
      'app-toolbar': toolbar,
      'app-main': main,
      'app-footer': footer,
      'app-header': header,
      'app-order': order,
      // 'app-call': orderCall,
      'widget-phone': phone,
      'scroll-top': scrollTop,
      'app-widget': sideWidget
    },
    data () {
      return {
        dialog: false,
        // callDialog: false,
        showNumbers: false,
        item: [],
      }
    },
    methods: {
      toolbar () {
        let offset = window.pageYOffset
        let toolbar = document.querySelector('.toolbar')
        if (offset >= 115) {
          toolbar.classList.add('toolbar--fixed')
          this.showNumbers = true
        } else {
          toolbar.classList.remove('toolbar--fixed')
          this.showNumbers = false
        }
      },
      showOrder (item) {
        this.item = item
        // console.log(this.item);
        this.dialog = true
      },
      closeOrder () {
        this.dialog = false
      },
      // showCallForm () {
      //   this.callDialog = true
      // },
      closeCall () {
        this.callDialog = false
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

