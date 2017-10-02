<template>
  <main>
    <v-container fluid>
      <v-layout>
        <v-flex xs12>
          <v-carousel hide-controls>
            <v-carousel-item :src="item.img" v-for="(item, i) in collection" :key="i"></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <div class="br"></div>
    </v-container>
  </main>
</template>

<script>
import collection from './collection'
  export default {
    data() {
      return {
      }
    },
    computed: {
      collection () {
        return collection
      }
    }
  }
</script>

<style scoped>
.carousel {
  min-height: 700px;
}
.br {
  min-height: 9999px;
}
</style>