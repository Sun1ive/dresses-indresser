<template>
  <v-toolbar>
    <v-toolbar-title v-scroll-to="''">InDresser</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items>
      <v-btn flat>Телефон</v-btn>
      <v-btn flat v-scroll-to="'.composition'">Состав</v-btn>
      <v-btn flat v-scroll-to="'.desc'">Описание</v-btn>
      <v-btn flat v-scroll-to="'.advantage'">Преимущества</v-btn>
      <v-btn flat v-scroll-to="'.gallery'">Галерея</v-btn>
      <v-btn flat v-scroll-to="'.aboutUs'">О нас</v-btn>
      <v-btn flat>Заказать</v-btn>
    </v-toolbar-items>
  </v-toolbar>
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
.toolbar__title {
  cursor: pointer;
}
.toolbar {
  /* background-color: rgba(255,255,255, 0.4) */
}
</style>