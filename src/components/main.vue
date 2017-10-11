<template>
  <main>
    <!-- баннер -->
    <section class="banner">
      <v-parallax src="../../static/234.jpg" height="600" class="py-5">
        <v-container fluid>
          <v-layout row wrap align-center justify-center style="height: 600px">
            <v-flex xs12>
              <img style="width: 100%" src="/static/1980x600-4.png" alt="banner">
            </v-flex>
          </v-layout>
        </v-container>    
      </v-parallax>
    </section>
    <!-- преимущества -->
    <section class="advantage py-3">
      <app-advantages></app-advantages>
    </section>
    <!-- почему -->
    <section class="why">
      <v-parallax src="/static/paralaks.jpg" height="500">
        <v-container fluid>
          <v-layout justify-center>
            <h3 class="head mt-5 pt-3" style="color: #000">Кому подходит наша одежда?</h3>
          </v-layout>
          <v-layout column wrap align-center justify-center>
            <v-flex xs12 lg7 offset-lg2 class="whyUsContainer">
              <v-icon large class="red--text mr-3">thumb_up</v-icon>
                <p class="mb-0">Для любительниц что-то носить с собой, теперь ЕСТЬ решение - это практичное и элегантоное платье с карманами!</p>
            </v-flex>
            <v-flex xs12 lg7 offset-lg2 class="whyUsContainer">
              <v-icon large class="red--text mr-3">thumb_up</v-icon>
                <p class="mb-0">Для тех, кто предпочитает стильные, удобные и женственные платья в cтиле Casual!</p>
            </v-flex>
            <v-flex xs12 lg7 offset-lg2 class="whyUsContainer">
              <v-icon large class="red--text mr-3">thumb_up</v-icon>
                <p class="mb-0">Для тех, кто живет в ритме города и не беспокоится по мелочам!</p>
            </v-flex>
          </v-layout>
        </v-container>      
      </v-parallax>
    </section>
    <!-- карточки товаров -->
    <section class="gallery">
      <v-container fluid grid-list-lg>
        <v-layout justify-center align-center class="pt-4">
          <h3 class="mb-0 collectionH head">Наша коллекция осень-зима 17/18</h3>
        </v-layout>
        <v-layout row wrap class="galleryLayout py-5">
          <v-flex xs12 lg2 md3 sm6 v-for="(item,i) in gallery" :key="i">
            <v-card class="bradius">
              <v-card-media :src="item.url" height="250"></v-card-media>
              <v-card-title class="itemTitle">{{ item.title }}</v-card-title>
              <v-card-actions>
                <v-btn style="border-radius: 8px; background-color: rgba(255,255,255,.2)" v-tooltip:top="{ html: `${item.price} грн` }">Узнать цену</v-btn>
              </v-card-actions>
              <v-card-actions class="cardActions">
                <v-btn flat @click="showItem(item)">Посмотреть</v-btn>
                <v-btn flat @click.stop="showOrder(item)">Заказать</v-btn>
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
          <v-flex xs12 md8 sm11 lg5 offset-lg3 class="black--text text-xs-center">
            <h5 class="head mb-5">Таблица размеров</h5>
            <app-table></app-table>
          </v-flex>
        </v-layout>
      </v-parallax>
    </section>
    <!-- условия доставки -->
    <section class="terms py-5">
      <app-terms></app-terms>
    </section>
    <!-- заказать звонок -->
    <section class="requestConsult">
      <v-layout row wrap justify-center align-center>
        <v-flex xs12 sm6 md4 lg3>
          <v-form class="requestForm" @submit.prevent="requestConsult">
            <h3 class="headline mb-0 text-xs-center">Заказать консультацию</h3>
            <v-text-field required v-model="user.name" label="Имя"></v-text-field>
            <v-text-field required v-model="user.phone" label="Телефон"></v-text-field>
            <v-text-field v-model="user.email" label="e-mail"></v-text-field>
            <v-card-actions class="white">
              <v-btn type="submit" class="ml-0 red darken-2 white--text circleBtn">Заказать</v-btn>
            </v-card-actions>
          </v-form>
        </v-flex>
      </v-layout>
    </section>
    <!-- отзывы -->
    <section class="reviews pt-3 pb-5">
      <app-reviews></app-reviews>
    </section>
    <!-- слайдер карточки товара -->
    <section class="popup">
      <v-layout>
        <v-dialog v-model="popup" persistent width="500">
          <v-card class="collectionCard">
            <v-carousel hide-controls v-show="popup">
              <v-carousel-item v-for="(item, i) in slider" :key="i" :src="item"></v-carousel-item>
            </v-carousel>
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
              <v-btn flat @click.stop="popup = false" class="white--text grey darken-4">Закрыть</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </section>
  </main>
</template>

<script>
import gallery from './gallery'
import table from './table'
import terms from './terms'
import reviews from './reviews'
import adv from './advantages'

  export default {
    components: {
      'app-table': table,
      'app-terms': terms,
      'app-reviews': reviews,
      'app-advantages': adv
    },
    data() {
      return {
        popup: false,
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
        // slider: ['/static/gallery/1.jpg','/static/gallery/2.jpg','/static/gallery/3.jpg'],
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
        this.slider = item.slider
        this.collectionItem.desc = item.desc
        // console.log(this.slider)
        this.popup = true
      },
      requestConsult () {
        console.log(this.user)
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