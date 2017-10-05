<template>
  <div>
    <v-navigation-drawer right temporary v-model="drawer">
      <v-list class="pa-1">
        <v-list-tile avatar class="text-xs-center">
          <img src="/static/logo1.png">
        </v-list-tile>
      </v-list>
      <v-list class="pt-0">
        <v-divider></v-divider>
        <v-list-tile v-for="item in toolbar" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon medium class="red--text">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content v-scroll-to="item.scroll">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon medium class="red--text">menu</v-icon>
          </v-list-tile-action>
          <v-list-tile-content @click.stop="drawer = false">
            <v-list-tile-title>Свернуть</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-title v-scroll-to="'.header'"><img class="logo" src="../../static/logo1.png" alt="logo"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-md-and-down" v-for="(item, i) in toolbar" :key="i">
        <v-btn flat v-scroll-to="item.scroll">{{ item.title }}</v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn flat @click.stop="showOrder">Заказать</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>


<script>
import toolbarList from './toolbarList'

export default {
  data() {
    return {
      drawer: null
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
.logo {
  cursor: pointer;
}
</style>