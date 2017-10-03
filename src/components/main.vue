<template>
  <main>
    <section class="banner">
      <v-container fluid grid-list-sm>
        <v-layout class="preview" row wrap>
          <v-flex xs12 md3 v-for="(item,i) in collection" :key="i">
            <v-card>
              <v-card-media :src="item.url" height="370"></v-card-media>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
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
.banner {
  padding-top: 15px;
}
.preview {
  max-width: 1100px;
  margin: 0 auto !important;
}
</style>