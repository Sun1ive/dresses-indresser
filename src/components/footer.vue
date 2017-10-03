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
          <v-btn flat>Заказать</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center">
          <h3>Контакты?</h3>
          <h3>Телефоны?</h3>
          <h3>Какая то информация?</h3>
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