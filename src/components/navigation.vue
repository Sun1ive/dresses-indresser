<template>
  <v-navigation-drawer permanent clipped light class="pt-2">
    <v-list dense>
      <v-list-tile v-for="(item, i) in toolbar" :key="i" @click="">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import toolbar from './toolbar'
  export default {
    data() {
      return {
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

</style>