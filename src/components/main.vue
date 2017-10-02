<template>
  <main>
    <v-container fluid class="paraContainer">
      <v-parallax src="../../static/bg.png" height="700"></v-parallax>
    </v-container>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <v-carousel hide-controls>
            <v-carousel-item :src="item.img" v-for="(item, i) in collection" :key="i"></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-lg class="collection">
      <v-layout row wrap>
        <v-flex xs12 sm3 v-for="(item, i) in collection" :key="i">
          <v-card>
            <v-card-media :src="item.url" height="350"></v-card-media>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>{{ item.desc }}</v-card-text>
            <v-card-actions>
              <v-btn>Посмотреть</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
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
.carousel__item {
  transition: 1.5s;
}
.paralax__image-container > img {
  background-position-y: 200px
}
.paraContainer {
  padding-top: 100px;
}
.collection {
  background-color: #F7F7F7;
}
</style>