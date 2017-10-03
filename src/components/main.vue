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
    <section class="desc">
      <v-container fluid>
        <v-layout row wrap justify-center align-center>
          <v-flex xs12 md6 class="text-xs-center">Описание:</v-flex>
          <v-flex xs12 md6 class="text-xs-center">таблица размеров</v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="advantage">
      <v-container fluid>
        <v-layout justify-center align-center class="pt-4">
          <h1>Преимущества:</h1>
        </v-layout>
        <v-layout row wrap justify-center align-center class="advLayout">
          <v-flex xs12 md6 class="text-xs-center">
            <v-icon x-large>directions_bus</v-icon>
            <h2>Бесплатная доставка</h2>
          </v-flex>
          <v-flex xs12 md6 class="text-xs-center">
            <v-icon x-large>check</v-icon>
            <h2>Подходит под любую обувь</h2>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="gallery">
      <v-container fluid grid-list-lg>
        <v-layout row wrap class="galleryLayout">
          <v-flex xs12 md3 v-for="(item,i) in gallery" :key="i">
            <v-card>
              <v-card-media :src="item.url" height="350"></v-card-media>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-actions>
                <v-btn>Заказать</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="aboutUs py-3">
      <v-layout justify-center row wrap align-center>
        <v-flex xs12 class="text-xs-center">
          <h1>О Нас</h1>
          <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere dolorem aspernatur, tempore nobis itaque nostrum corrupti neque, fugiat quod assumenda sed magni minima, deleniti dolores! Sapiente fugit sed perspiciatis, pariatur officia sint illum dolorum incidunt facere culpa id quasi adipisci voluptatem hic voluptates neque, error dicta nihil, et architecto?</p>
          ???
        </v-flex>
      </v-layout>
    </section>
  </main>
</template>

<script>
import collection from './collection'
import gallery from './gallery'
  export default {
    data() {
      return {
      }
    },
    computed: {
      collection () {
        return collection
      },
      gallery () {
        return gallery
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
  border-bottom: 1px solid #333
}
.desc .container .layout {
  min-height: 300px;
}
.advantage .container .advLayout {
  min-height: 150px;
  border-bottom: 1px solid #333
}
.galleryLayout {
  max-width: 1100px;
  margin: 0 auto !important;
}
.card__title {
  justify-content: center;
}
.card__actions {
  justify-content: center;
}
.gallery {
  border-bottom: 1px solid #333
}
.text {
  max-width: 1100px;
  margin: 0 auto;
}
.aboutUs {
  border-bottom: 1px solid #333
}
</style>