import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import './stylus/main.styl'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Scroll from 'vue-scrollto'

Vue.use(Vuetify)

Vue.use(AOS)

Vue.use(Scroll, {
  container: 'body',
  duration: 500,
  offset: -200,
  cancelable: true,
  easing: 'ease'
})

new Vue({
  el: '#app',
  render: h => h(App),
  mounted () {
    AOS.init({
      disable: window.innerWidth < 1000
    });
  }
})