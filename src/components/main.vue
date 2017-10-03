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
          <v-flex xs12 md6 class="text-xs-center">InDresser IND</v-flex>
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
      <v-parallax src="../../static/bgpara.jpg" height="500">
        <v-layout row wrap justify-center align-center>
          <v-flex xs12 md5 class="black--text text-xs-center">
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed assumenda autem mollitia officia? Sequi, possimus a iure sint, quod quo quaerat laboriosam fuga, dolores nihil dolore! Eum facere obcaecati, nemo doloribus ipsa aperiam eius quisquam iure assumenda nihil voluptas quam sapiente, recusandae impedit fugit quo voluptate dolorum numquam? Eligendi itaque laborum sed pariatur tempore magni sequi, consequuntur maiores repellendus non!</h5>
          </v-flex>
          <v-flex xs12 md6 class="black--text text-xs-center"></v-flex>
        </v-layout>
      </v-parallax>
    </section>
    <section class="advantage">
      <v-container fluid>
        <v-layout justify-center align-center class="pt-4">
          <h5>Преимущества:</h5>
        </v-layout>
        <v-layout row wrap justify-center align-center class="advLayout">
          <v-flex xs12 md6 class="text-xs-center">
            <v-icon x-large>directions_bus</v-icon>
            <h5>Бесплатная доставка</h5>
          </v-flex>
          <v-flex xs12 md6 class="text-xs-center">
            <v-icon x-large>check</v-icon>
            <h5>Подходит под любую обувь</h5>
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
          <h5>Условия Доставки</h5>
        </v-layout>
        <v-layout row wrap justify-center align-center>
          <v-flex xs12 sm6 class="text-xs-center">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremque, facilis similique tempora. Est tenetur culpa, ad laborum blanditiis voluptatem, et pariatur quod voluptates quam repellendus perferendis illo necessitatibus quisquam odio ullam? Beatae, inventore animi veritatis id mollitia, tenetur, unde quam hic voluptates eius saepe? Quis a vero laudantium libero voluptatibus maxime, unde cupiditate cum tempora quas molestiae provident, temporibus sed delectus repudiandae hic. Suscipit, quae?
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, voluptatum. Laudantium nihil odit doloremque, facilis similique tempora. Est tenetur culpa, ad laborum blanditiis voluptatem, et pariatur quod voluptates quam repellendus perferendis illo necessitatibus quisquam odio ullam? Beatae, inventore animi veritatis id mollitia, tenetur, unde quam hic voluptates eius saepe? Quis a vero laudantium libero voluptatibus maxime, unde cupiditate cum tempora quas molestiae provident, temporibus sed delectus repudiandae hic. Suscipit, quae?
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="aboutUs py-3">
      <v-layout justify-center row wrap align-center>
        <v-flex xs12 sm6 class="text-xs-center">
          <h5>О Нас</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere dolorem aspernatur, tempore nobis itaque nostrum corrupti neque, fugiat quod assumenda sed magni minima, deleniti dolores! Sapiente fugit sed perspiciatis, pariatur officia sint illum dolorum incidunt facere culpa id quasi adipisci voluptatem hic voluptates neque, error dicta nihil, et architecto?</p>
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