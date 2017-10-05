<template>
  <v-toolbar>
    <v-toolbar-title v-scroll-to="'.header'"><img class="logo" src="../../static/logo1.png" alt="logo"></v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up" @click.stop="showDrawer"></v-toolbar-side-icon>
    <v-toolbar-items class="hidden-md-and-down">
      <v-btn flat>Телефон</v-btn>
      <v-btn flat v-scroll-to="'.composition'">Состав</v-btn>
      <v-btn flat v-scroll-to="'.desc'">Описание</v-btn>
      <v-btn flat v-scroll-to="'.advantage'">Преимущества</v-btn>
      <v-btn flat v-scroll-to="'.gallery'">Галерея</v-btn>
      <v-btn flat v-scroll-to="'.aboutUs'">О нас</v-btn>
      <v-btn flat @click.stop="showOrder">Заказать</v-btn>
    </v-toolbar-items>
  </v-toolbar>
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
      },
      showDrawer () {
        this.$emit('showDrawer')
      }
    }
  }
</script>

<style scoped>
.logo {
  cursor: pointer;
}
</style>