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
    <section class="delivery">
      <v-container fluid>
        <v-layout justify-center align-center row wrap>
          <h1>Условия Доставки</h1>
        </v-layout>
        <v-layout row wrap justify-center align-center>
          <v-flex xs12 sm6 class="text-xs-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse optio dolores nobis consectetur nisi, nemo beatae delectus quae, accusantium incidunt repudiandae nam nostrum fugiat odit ratione eligendi officiis voluptate!
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="aboutUs py-3">
      <v-layout justify-center row wrap align-center>
        <v-flex xs12 sm6 class="text-xs-center">
          <h1>О Нас</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere dolorem aspernatur, tempore nobis itaque nostrum corrupti neque, fugiat quod assumenda sed magni minima, deleniti dolores! Sapiente fugit sed perspiciatis, pariatur officia sint illum dolorum incidunt facere culpa id quasi adipisci voluptatem hic voluptates neque, error dicta nihil, et architecto?</p>
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

<style src="./main.css" scoped></style>