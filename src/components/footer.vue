<template>
  <footer>
    <v-container fluid class="firstFooter">
      <v-layout row wrap justify-center align-center>
        <v-flex xs12 sm6 class="text-xs-center">
          <v-btn class="white--text" flat>Телефон</v-btn>
          <v-btn class="white--text" flat v-scroll-to="'.composition'">Состав</v-btn>
          <v-btn class="white--text" flat v-scroll-to="'.desc'">Описание</v-btn>
          <v-btn class="white--text" flat v-scroll-to="'.advantage'">Преимущества</v-btn>
          <v-btn class="white--text" flat v-scroll-to="'.gallery'">Галерея</v-btn>
          <v-btn class="white--text" flat v-scroll-to="'.aboutUs'">О нас</v-btn>
          <v-btn class="white--text" flat @click.stop="showOrder">Заказать</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center">
          <v-btn class="white--text" flat><v-icon>call</v-icon>067-1112233</v-btn>
          <v-btn class="white--text" flat><v-icon>call</v-icon>067-1112233</v-btn>
          <div class="adress">Главный офис: вул. Николая Оводова, буд. 51</div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer>InDresser &copy; {{ new Date().getFullYear() }}</v-footer>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      showOrder () {
        this.$emit('showOrder')
      }
    }
  }
</script>

<style scoped>
.footer {
  justify-content: center;
  background-color: rgba(0,0,0, .5);
}
.container .layout .flex {
  min-height: inherit
}
.firstFooter {
  background-color: rgba(0,0,0,0.4);
}
</style>