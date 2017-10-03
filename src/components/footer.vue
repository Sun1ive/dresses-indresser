<template>
  <footer>
    <v-container fluid>
      <v-layout row wrap justify-center align-center>
        <v-flex xs12 sm6 class="text-xs-center">
          <ul>
            <li><v-btn flat>Телефон</v-btn></li>
            <li><v-btn flat>Состав</v-btn></li>
            <li><v-btn flat>Описание</v-btn></li>
            <li><v-btn flat>Преимущества</v-btn></li>
            <li><v-btn flat>Галерея</v-btn></li>
            <li><v-btn flat>О Нас</v-btn></li>
            <li><v-btn flat>Заказать</v-btn></li>
          </ul>
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center">
          <h3>Контакты?</h3>
          <h3>Телефоны?</h3>
          <h3>Какая то информация?</h3>
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
    }
  }
</script>

<style scoped>
.footer {
  justify-content: center;
}
</style>