<template>
  <div>
    <v-navigation-drawer temporary v-model="drawer">
      <v-list class="pa-1">
        <v-list-tile avatar class="text-xs-center">
          <img src="/static/logo1.png">
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in toolbar" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content v-scroll-to="item.scroll">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-title v-scroll-to="'.header'"><img class="logo" src="../../static/logo1.png" alt="logo"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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
  </div>
</template>


<script>
import toolbar from './toolbar'

  export default {
    data() {
      return {
        drawer: null
      }
    },
    methods: {
      showOrder () {
        this.$emit('showOrder')
      },
      showSide () {
        this.$emit('showSide')
      }
    },
    computed: {
      toolbar () {
        return toolbar
      }
    }
  }
</script>

<style scoped>
.logo {
  cursor: pointer;
}
</style>