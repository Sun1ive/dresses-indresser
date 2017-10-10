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
      <v-container fluid>
        <v-layout justify-center align-center class="pt-4 text-xs-center">
          <h4 class="mt-3 head">Почему выгодно покупать у нас?</h4>
        </v-layout>
        <v-layout row wrap justify-center align-center class="advLayout">
          <v-flex xs12 md3 class="text-xs-center">
            <v-icon x-large class="red--text">color_lens</v-icon>
            <h5>Дизайнерская одежда</h5>
          </v-flex>
          <v-flex xs12 md3 class="text-xs-center">
            <v-icon x-large class="red--text">directions_bus</v-icon>
            <h5>Быстрая бесплатная доставка</h5>
          </v-flex>
          <v-flex xs12 md3 class="text-xs-center">
            <v-icon x-large class="red--text">check</v-icon>
            <h5>Подходит под любую обувь</h5>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <!-- почему -->
    <section class="why">
      <v-parallax src="/static/paralaks.jpg" height="500">
        <v-container fluid>
          <v-layout>
            <v-flex xs12 sm6 offset-sm5 class="test" style="min-height: 500px;">
            <h3 class="headline">Кому подходит наша одежда?</h3>
              <ul>
                <li>Тем кому нравится модная, удобная, стильная и эксклюзивная одежда</li>
                <li>Практичные и повседневные вещи</li>
                <li>Женственные платья с карманами</li>
                <li>Не стесняющие движений</li>
              </ul>
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
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-actions class="cardActions">
                <v-btn flat @click="showItem(item)">Посмотреть</v-btn>
                <!-- <v-btn flat @click.stop="checkPrice(item)">Узнать цену</v-btn> -->
                <v-btn flat v-tooltip:top="{ html: `${item.price} грн` }">Цена</v-btn>
                <v-btn flat @click.stop="showOrder(item)">Заказать</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <!-- проверка цены -->
<!--    <v-layout>
          <v-dialog v-model="showPrice">
            <v-card>
              <v-card-title class="priceBox">{{ collectionItem.price }}<v-btn flat @click.stop="showOrder(item)">Заказать</v-btn></v-card-title>
              <v-card-actions>
                <v-btn flat @click.stop="showPrice = false">Закрыть</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout> -->
      </v-container>
    </section>
    <!-- таблица размеров -->
    <section class="sizeTable">
      <v-parallax src="/static/para22.jpg" height="500">
        <v-layout row wrap justify-start align-center>
          <v-flex xs12 md8 sm11 lg7 class="black--text text-xs-center">
            <h5 class="head">Таблица размеров</h5>
            <app-table></app-table>
          </v-flex>
          <v-flex xs12 md6 class="black--text text-xs-center"></v-flex>
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
            <v-btn type="submit" class="ml-0 black white--text">Заказать</v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </section>
    <!-- отзывы -->
    <section class="reviews pt-3 pb-5">
      <v-container fluid>
        <v-layout justify-center align-center>
          <h5 class="head pt-5 pb-3">Отзывы клиентов</h5>
        </v-layout>
        <v-layout row wrap class="reviewsContainer">
          <v-flex xs12 lg4 class="text-xs-center client">
            <v-icon large>star</v-icon>
            <p><blockquote>Катя, предприниматель</blockquote></p>
            <p class="mb-0">
              <q>Я очень-очень довольна покупкой! Мне понравился крой и дизайн синего платья 009 . Отличное качество пошива.! Благодарю команду InDresser за консультацию при выборе!</q>
            </p>
          </v-flex>
          <v-flex xs12 lg4 class="text-xs-center client">
            <v-icon large>star</v-icon>
            <p><blockquote>Наталия, домохозяйка</blockquote></p>
            <p class="mb-0">
              <q>Спасибо огромное за модное и практичное платье с карманами, у вас это платье 002! <br> Приятно, когда встречаешь профессионала своего дела. Правда, я ошиблась в размере, но все оперативно поменяли. Буду у вас заказывать теперь всегда и советовать всем своим знакомым! От души, спасибо!</q>
            </p>
          </v-flex>
          <v-flex xs12 lg4 class="text-xs-center client">
            <v-icon large>star</v-icon>
            <p><blockquote>Юлия, студентка мед университета</blockquote></p>
            <p class="mb-0">
              <q>Я ризикнула і замовила плаття через Інтернет! Мене приємно вразила якість пошиву. Колір той, який я дивилася на фото, абсолютно ідентичний. Дякую Вам, дійсно гарне плаття, те що і радив менеджер!</q>
            </p>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <!-- слайдер карточки товара -->
    <section class="popup">
      <v-layout>
        <v-dialog v-model="popup" persistent width="500">
          <v-card class="collectionCard">
            <v-carousel hide-controls v-if="popup">
              <v-carousel-item v-for="(item, i) in slider" :key="i" :src="item"></v-carousel-item>
            </v-carousel>
            <v-card-title primary-title>{{ collectionItem.title }}</v-card-title>
            <v-card-text>
              <v-layout>
                <v-flex xs12 class="text-xs-center">{{collectionItem.desc }}</v-flex>
              </v-layout>
              <v-layout row wrap justify-center align-center>
                <v-flex xs12 sm4 class="text-xs-center">
                  <div class="avatar">35%</div><div>Полиэстр</div>
                </v-flex>
                <v-flex xs12 sm4 class="text-xs-center">
                  <div class="avatar">35%</div><div>Вискоза</div>
                </v-flex>
                <v-flex xs12 sm4 class="text-xs-center">
                  <div class="avatar">30%</div><div>Эластан</div>
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex xs12 class="text-xs-center">{{ collectionItem.price }}грн</v-flex>
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

  export default {
    components: {
      'app-table': table,
      'app-terms': terms
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
        console.log(item);
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
        console.log(this.slider)
        this.popup = true
      },
      checkPrice (item) {
        this.collectionItem.price = `${item.price} грн`
        this.showPrice = true
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