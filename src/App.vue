<template>
  <v-app>
    <app-header></app-header>
    <app-toolbar :showNumbers="showNumbers" @showOrder="showOrder"></app-toolbar>
    <app-main @showOrder="showOrder"></app-main>
    <v-dialog scrollable v-model="dialog" width="400">
      <app-order :item="item" @closeOrder="closeOrder"></app-order>
    </v-dialog>
    <v-dialog v-model="showSubForm" width="400" scrollable>
      <app-subform @closeSubForm="closeSubForm"></app-subform>
    </v-dialog>
    <present-widget v-show="showPresent" v-if="!showSubForm" @showSubForm="showSubscribeForm"></present-widget>
    <scroll-top></scroll-top>
    <!-- <app-widget></app-widget> -->
    <app-footer @showOrder="showOrder"></app-footer>
    <!-- <widget-phone v-if="!callDialog" @showCallForm="showCallForm"></widget-phone> -->
  </v-app>
</template>

<script>
import toolbar from './components/toolbar'
import main from './components/main'
// import orderCall from './components/orderCall'
import footer from './components/footer'
import header from './components/header'
import order from './components/order'
import phone from './components/phone'
import scrollTop from './components/scrolltop'
// import sideWidget from './components/sidewidget'
import present from './components/present'
import subform from './components/subform'


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
      // 'app-widget': sideWidget,
      'present-widget': present,
      'app-subform': subform
    },
    data () {
      return {
        dialog: false,
        showSubForm: false,
        showPresent: false,
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
/*       showCallForm () {
        this.callDialog = true 
      }, */
      closeOrder () {
        this.dialog = false
      },
      showSubscribeForm () {
        this.showSubForm = true
      },
      closeSubForm () {
        this.showSubForm = false
      },
/*       closeCall () {
        this.callDialog = false
      } */
    },
    created () {
      window.addEventListener('scroll', this.toolbar)
    },
    mounted () {
      setTimeout(() => {
        this.showPresent = true
      }, 10000)
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

