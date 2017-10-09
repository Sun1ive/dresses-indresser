<template>
    <footer>
      <v-layout row wrap justify-center align-center class="text">
        <v-flex xs12 sm6 class="text-xs-center">
          <h5 class="mb-0">Адресс:</h5>
          <div>г. Винница</div>
          <div>ул. Николая Оводова, 51</div>
          <div>Главный офис</div>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center">
          <h5 class="mb-0">Телефоны:</h5> 
          <ul>
            <li><v-icon medium class="red--text mx-2">call</v-icon><a href="tel:3336621">098-02-02-092</a></li>
            <!-- <li><v-icon medium class="red--text mx-2">call</v-icon><a href="tel:3336621">068-02-02-092</a></li> -->
            <li><v-icon medium class="red--text mx-2">call</v-icon><a href="tel:3336621">073-02-02-090</a></li>
          </ul>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center align-center class="socialContainer">
        <v-flex xs12 sm6 style="color: #fff">&copy; InDresser {{ new Date().getFullYear() }}</v-flex>
        <v-flex xs12 sm6 class="socialList__box">
          <app-socials></app-socials>
        </v-flex>
      </v-layout>
    </footer>
</template>


<script>
import toolbarList from './toolbarList'
import socials from './socials'

  export default {
    components: {
      'app-socials': socials
    },
    data() {
      return {
        e2: 3
      }
    },
    methods: {
      showOrder () {
        this.$emit('showOrder')
      }
    },
    computed: {
      toolbar () {
        return toolbarList
      }
    }
  }
</script>

<style scoped>
.text {
  color: #fff;
  font-size: 14px;
  min-height: 150px;
}
footer {
  background-color: #D3D0D7;
}
.socialList__box {
  min-height: 50px;
}
.socialContainer {
  background-color: #172227;
  padding-bottom: 10px;
}
</style>