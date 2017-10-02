<template>
  <v-toolbar fixed>
    <v-toolbar-title v-scroll-to="'.collection'">InDresser</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
    <v-toolbar-items>
      <v-btn flat>Cart?</v-btn>
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
    }
  }
</script>

<style scoped>
.toolbar__title {
  cursor: pointer;
}
.toolbar {
  background-color: rgba(255,255,255, 0.4)
}
</style>