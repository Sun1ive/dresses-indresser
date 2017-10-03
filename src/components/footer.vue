<template>
  <footer>
    <v-container fluid>
      <v-layout row wrap justify-center align-center>
        <v-flex xs12 sm6 class="text-xs-center">
          <v-btn flat>Телефон</v-btn>
          <v-btn flat v-scroll-to="'.composition'">Состав</v-btn>
          <v-btn flat v-scroll-to="'.desc'">Описание</v-btn>
          <v-btn flat v-scroll-to="'.advantage'">Преимущества</v-btn>
          <v-btn flat v-scroll-to="'.gallery'">Галерея</v-btn>
          <v-btn flat v-scroll-to="'.aboutUs'">О нас</v-btn>
          <v-btn flat @click.stop="showOrder">Заказать</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center">
          <v-btn flat><v-icon>call</v-icon>067-1112233</v-btn>
          <v-btn flat><v-icon>call</v-icon>067-1112233</v-btn>
          <div class="adress">Главный офис: вул. Николая Оводова, буд. 51</div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer light>InDresser &copy; {{ new Date().getFullYear() }}</v-footer>
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
}
.container .layout .flex {
  min-height: inherit
}
</style>