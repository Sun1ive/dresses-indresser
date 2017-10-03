<template>
  <main>
    <section class="banner">
      <v-container fluid grid-list-lg>
        <v-layout class="preview" row wrap>
          <v-flex xs12 md3 v-for="(item,i) in collection" :key="i">
            <v-card>
              <v-card-media :src="item.url" height="370"></v-card-media>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="composition">
      <v-container fluid>
        <v-layout justify-center align-center>
          <v-flex xs12 md6 class="text-xs-center">Состав</v-flex>
          <v-flex xs12 md6 class="text-xs-center">
            <ul>
              <li>Вискоза 40%</li>
              <li>Полиэстер 55%</li>
              <li>Эластан 5%</li>
            </ul>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="desc"></section>
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
  border-bottom: 1px solid #333;
  min-height: 470px;
}
.preview {
  max-width: 1100px;
  margin: 0 auto !important;
}
.composition {
  min-height: 250px;
  border-bottom: 1px solid #333;
}
.composition .container {
  min-height: inherit
}
.composition .container .layout {
  min-height: inherit
}
.desc {
  min-height: 300px;
  border-bottom: 1px solid #333
}
</style>