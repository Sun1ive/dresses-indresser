import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import axios from 'axios'
import _ from 'lodash'

Vue.use(Vuetify)
Vue.prototype.$http = axios
Vue.use(_)

new Vue({
  el: '#app',
  render: h => h(App)
})
