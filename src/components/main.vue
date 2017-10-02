<template>
  <main>
    <v-container fluid>
      <v-layout>
        <v-flex xs12>
          <v-carousel hide-controls>
            <v-carousel-item :src="item.url" v-for="(item, i) in collection" :key="i"></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
  </main>
</template>

<script>
import col from './collection'
  export default {
    data() {
      return {
      }
    },
    computed: {
      collection () {
        return col
      }
    }
  }
</script>

<style scoped>

</style>