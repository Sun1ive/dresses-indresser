<template>
  <main>
    <!-- баннер -->
    <section class="banner">
      <!-- <app-banner></app-banner> -->
    </section>
    <!-- мотивация? -->
    <section class="motivation">
      <app-motivation></app-motivation>
    </section>
    <!-- все просто -->
    <section class="easy">
      <app-easy></app-easy>
    </section>
    <!-- преимущества -->
    <section class="advantage">
      <app-advantages data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300"></app-advantages>
    </section>
    <!-- почему -->
    <section class="why">
      <app-why data-aos="" data-aos-duration="1000" data-aos-offset="300"></app-why>
    </section>
    <!-- карточки товаров -->
    <section class="gallery">
      <v-container fluid grid-list-lg>
        <v-layout justify-center align-center class="pt-4">
          <h3 class="mb-0 collectionH">Выбери себе платье</h3>
        </v-layout>
        <v-layout row wrap class="galleryLayout py-5">
          <v-flex xs12 lg2 md3 sm6 v-for="(item,i) in gallery" :key="i">
            <v-card class="bradius">
              <v-card-media :src="item.url" height="400" @click.stop="showSlider(item)"></v-card-media>
              <v-card-title class="itemTitle">{{ item.title }}</v-card-title>
              <v-card-text class="text-xs-center py-0"><span class="priceBold">{{ item.price }}</span> грн</v-card-text>
              <v-card-actions class="cardActions">
                <v-btn style="font-weight: bold;" flat @click.stop="showItem(item)">Подробно</v-btn>
                <v-btn class="myButn" flat @click.stop="showOrder(item)">Заказать</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <!-- таблица размеров -->
    <section class="sizeTable">
      <v-parallax src="/static/para22.jpg" height="500">
        <v-layout row wrap justify-start align-center>
          <v-flex xs12 md9 sm12 lg6 offset-lg3 class="black--text text-xs-center">
            <h3 class="collectionH mb-5">Таблица размеров</h3>
            <app-table></app-table>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>
    <!-- условия доставки -->
    <section class="terms">
      <app-terms></app-terms>
    </section>
    <!-- заказать звонок -->
    <section class="requestConsult">
      <v-layout row wrap justify-center align-center>
        <v-flex xs12 sm6 md4 lg3>
          <v-form class="requestForm" @submit.prevent="requestConsult" v-model="valid">
            <h3 class="head text-xs-center">Получить консультацию</h3>
            <v-text-field required v-model="user.name" label="Имя"></v-text-field>
            <v-text-field required v-model="user.phone" label="Телефон"></v-text-field>
            <v-text-field required type="email" v-model="user.email" label="e-mail"></v-text-field>
            <v-card-actions class="white">
              <v-btn type="submit" class="ml-0 circleBtn">Получить консультацию</v-btn>
            </v-card-actions>
          </v-form>
        </v-flex>
      </v-layout>
    </section>
    <!-- отзывы -->
    <section class="reviews">
      <app-reviews data-aos="fade-up" data-aos-duration="1000" data-aos-offset="300"></app-reviews>
    </section>
    <!-- слайдер карточки товара -->
    <section class="popup">
      <v-layout>
        <v-dialog v-model="popup" width="80vh">
          <v-card class="collectionCard">
            <v-carousel hide-controls v-show="popup">
              <v-carousel-item v-for="(item, i) in slider" :key="i" :src="item"></v-carousel-item>
            </v-carousel>
            <!-- <v-card-title class="popupTitle">{{ collectionItem.title }}<v-spacer></v-spacer>
             <span class="valute">{{ collectionItem.price }} грн</span></v-card-title>
            <v-card-text>
              <v-layout>
                <v-flex xs12 class="text-xs-left">
                  <p align="justify">{{collectionItem.desc }}</p>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-btn @click.stop="showOrder(collectionItem)" class="red darken-2 white--text ml-0">Оформить заказ</v-btn>
              <v-btn flat @click.stop="popup = false" class="white--text grey darken-4">Закрыть</v-btn>
            </v-card-actions> -->
          </v-card>
        </v-dialog>
      </v-layout>
    </section>
    <section class="poputData">
      <v-dialog v-model="popupData" lazy>
        <v-card>
          <v-card-title class="popupTitle">{{ collectionItem.title }}<v-spacer></v-spacer>
             <span class="valute">{{ collectionItem.price }} грн</span></v-card-title>
            <v-card-text>
              <v-layout>
                <v-flex xs12 class="text-xs-left">
                  <p align="justify">{{collectionItem.desc }}</p>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-btn @click.stop="showOrder(collectionItem)" class="red darken-2 white--text ml-0">Оформить заказ</v-btn>
              <v-btn @click.stop="popupData = false" class="white--text grey darken-4">Закрыть</v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
    </section>
  </main>
</template>

<script>
import gallery from './gallery'
import table from './table'
import terms from './terms'
import reviews from './reviews'
import adv from './advantages'
import why from './why'
import banner from './banner'
import motivation from './motivation'
import easy from './easy'

import axios from 'axios'

  export default {
    components: {
      'app-table': table,
      'app-terms': terms,
      'app-reviews': reviews,
      'app-advantages': adv,
      'app-why': why,
      'app-banner': banner,
      'app-motivation': motivation,
      'app-easy': easy
    },
    data() {
      return {
        valid: false,
        popup: false,
        popupData: false,
        collectionItem: {
          title: '',
          url: '',
          price: null,
          desc: ''
        },
        user: {
          name: '',
          phone: '',
          email: ''
        },
        slider: ['','',''],
        showPrice: false
      }
    },
    methods: {
      showOrder (item) {
        // console.log(item);
        this.popup = false
        this.showPrice = false
        this.$emit('showOrder', item)
      },
      showItem (item) {
        this.collectionItem.title = item.title
        this.collectionItem.url = item.url
        this.collectionItem.price = item.price
        // this.slider = item.slider
        this.collectionItem.desc = item.desc
        // console.log(this.slider)
        // this.popup = true
        this.popupData = true
      },
      showSlider (item) {
        this.slider = item.slider
        this.popup = true
      },
      requestConsult () {
        console.log(this.user)
        axios.post('https://myvuewebapp.firebaseio.com/request.json', this.user)
          .then(r => console.log(r))
          .catch(e => console.log(e))
        this.user = {
          name: null,
          phone: null,
          email: null
        }
      }
    },
    computed: {
      gallery () {
        return gallery
      }
    }
  }
</script>

<style src="./main.css" scoped></style>