<template>
    <footer>
      <v-layout row wrap justify-center align-center class="text">
        <v-flex xs12 lg3 sm6 class="py-3 text-xs-center">
          <img src="/static/logo1.png" alt="logo" v-scroll-to="'.header'" style="cursor:pointer;">
        </v-flex>
        <v-flex xs12 lg3 sm6 class="py-3 text-xs-center text-lg-left">
          <h5 class="head mb-0">Режим работы:</h5>
          <div>С понедельника по пятницу с 09:00 до 18:00.</div>
          <div>Выходные дни -  суббота и воскресенье</div>
        </v-flex>
        <v-flex xs12 lg3 sm6 class="py-3 text-xs-center text-lg-left paddingLeft">
          <h5 class="head mb-0">Телефоны:</h5> 
          <ul>
            <li><a href="tel:+380980202092"><v-icon medium class="red--text pr-2">call</v-icon>098-02-02-092</a></li>
            <li><a href="tel:+380730202090"><v-icon medium class="red--text pr-2">call</v-icon>073-02-02-090</a></li>
          </ul>
        </v-flex>
        <v-flex xs12 lg3 sm6 class="py-3 text-xs-center text-lg-left pl-5">
          <h5 class="head mb-0">Адресс:</h5>
          <div>г. Винница</div>
          <div>ул. Николая Оводова, 51</div>
          <div>Главный офис</div>
        </v-flex>
      </v-layout>
      <v-layout row wrap align-center class="socialContainer">
        <v-flex xs12 sm6 class="pl-4 InD text-xs-center">&copy; InDresser {{ new Date().getFullYear() }}</v-flex>
        <v-flex xs12 sm6 class="socialList__box pr-4">
          <app-socials></app-socials>
        </v-flex>
      </v-layout>
    </footer>
</template>


<script>
import socials from './socials'

  export default {
    components: {
      'app-socials': socials
    }
  }
</script>

<style scoped>
  .paddingLeft {
    padding-left: 100px;
  }
  .text {
    font-size: 14px;
    min-height: 150px;
  }
  .InD {
    font-size: 16px;
    color: #fff;
  }
  footer {
    /* background-color: #E2E2E4; */
    background-image: url('/static/grunde.png');
    background-repeat: repeat;
  }
  .socialList__box {
    min-height: 50px;
  }
  .socialContainer {
    background-color: #172227;
    padding-bottom: 10px;
    justify-content: space-around;
  }
  ul > li > a {
    color: rgba(0,0,0,0.87);
  }
  .head {
    text-transform: uppercase;
    font-weight: bolder;
  }

  @media (max-width: 900px) {
    .paddingLeft {
      padding-left: 0;
    }
  }
  @media (max-width: 580px) {
    .flex {
      padding-left: 0 !important;
    }
  }
</style>