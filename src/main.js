import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import _ from 'lodash'
import Scroll from 'vue-scrollto'

Vue.use(Vuetify)
Vue.use(_)
Vue.use(Scroll, {
  container: 'body',
  duration: 500,
  offset: -300,
  cancelable: true,
  easing: 'ease'
})

new Vue({
  el: '#app',
  render: h => h(App)
})
