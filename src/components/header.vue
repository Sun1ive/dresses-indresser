<template>
  <header class="header">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 sm6 class="headerBox pr-4">
          <v-icon medium class="red--text mx-2">email</v-icon><a href="mailto:info@indresser.com">info@indresser.com</a>
          <v-icon medium class="red--text mx-2">call</v-icon><a href="tel:3336621">098-02-02-092</a>
          <!-- <v-icon medium class="red--text mx-2">call</v-icon><a href="tel:3336621">068-02-02-092</a> -->
          <v-icon medium class="red--text mx-2">call</v-icon><a href="tel:3336621">073-02-02-090</a>
        </v-flex>
        <v-flex xs12 sm6>
          <app-socials></app-socials>
        </v-flex>
      </v-layout>
    </v-container>
  </header>
</template>

<script>
import socials from './socials'
  export default {
    components: {
      'app-socials': socials
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
.headerBox {
  display: flex;

  align-items: center;
  min-height: 50px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}
.header {
  background-color: #172227;
}

@media (max-width: 500px) {
  .headerBox {
    flex-direction: column;
  }
}
</style>