<template>
  <main>
    <section class="banner">
      <v-parallax src="../../static/234.jpg" height="600" class="py-5">
        <v-container fluid>
          <v-layout row wrap align-center justify-center style="height: 600px">
            <v-flex xs12>
              <!-- <img style="width: 100%" src="/static/1980x600-4.png" alt="banner"> -->
              <div class="image"></div>
            </v-flex>
          </v-layout>
        </v-container>    
      </v-parallax>
    </section>
    <section class="advantage">
      <v-container fluid>
        <v-layout justify-center align-center class="pt-4 text-xs-center">
          <h4 style="text-transform: uppercase; font-weight: bold;">Почему выгодно покупать у нас?</h4>
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
    <section class="composition">
      <v-parallax src="/static/paralaks.jpg" height="500">
        <v-container fluid>
          <v-layout column justify-center align-center style="height: 500px; color: #000">
            <h5>Кому подходит наша одежда?</h5>
            <ul>
              <li>Тем кому нравится модная, удобная, стильная и эксклюзивная одежда</li>
              <li>Практичные и повседневные вещи</li>
              <li>Женственные платья с карманами</li>
              <li>Не стесняющие движений</li>
            </ul>
          </v-layout>
        </v-container>      
      </v-parallax>
    </section>
    <!-- карточки товаров -->
    <section class="gallery">
      <v-container fluid grid-list-lg>
        <v-layout justify-center align-center class="pt-4">
          <h3 class="mb-0 collectionH">Коллекция</h3>
        </v-layout>
        <v-layout row wrap class="galleryLayout py-5">
          <v-flex xs12 lg3 md4 sm6 v-for="(item,i) in gallery" :key="i">
            <v-card>
              <v-card-media :src="item.url" height="425"></v-card-media>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-actions class="cardActions">
                <v-btn flat @click="showItem(item)">Посмотреть</v-btn>
                <!-- <v-btn flat @click.stop="checkPrice(item)">Узнать цену</v-btn> -->
                <v-btn flat v-tooltip:top="{ html: `${item.price} грн` }">Узнать цену</v-btn>
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
    <section class="sizeTable">
      <v-parallax src="../../static/para22.jpg" height="500">
        <v-layout row wrap justify-start align-center>
          <v-flex xs12 md8 sm11 lg7 class="black--text text-xs-center">
            <h5>Таблица размеров</h5>
            <app-table></app-table>
          </v-flex>
          <v-flex xs12 md6 class="black--text text-xs-center"></v-flex>
        </v-layout>
      </v-parallax>
    </section>
    <section class="delivery py-5">
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
    <section class="aboutUs">
     <v-container fluid>
      <v-layout class="aboutContainer__one" justify-center row wrap align-end>
        <h4 style="text-transform: uppercase;" class="mb-0">О нас</h4>
      </v-layout>
      <v-layout class="aboutContainer" justify-center row wrap align-center>
        <v-flex xs12 sm3 class="text-xs-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, voluptas soluta sapiente culpa magni mollitia laudantium fugiat eius eaque porro accusantium, blanditiis beatae accusamus similique in quis magnam explicabo? At!
        </v-flex>
        <v-flex xs12 sm3 class="text-xs-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, voluptas soluta sapiente culpa magni mollitia laudantium fugiat eius eaque porro accusantium, blanditiis beatae accusamus similique in quis magnam explicabo? At!
        </v-flex>
        <v-flex xs12 sm3 class="text-xs-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, voluptas soluta sapiente culpa magni mollitia laudantium fugiat eius eaque porro accusantium, blanditiis beatae accusamus similique in quis magnam explicabo? At!
        </v-flex>
      </v-layout>
      </v-container>
    </section>
    <!-- слайдер карточки товара -->
    <section class="popup">
      <v-layout>
        <v-dialog v-model="popup" persistent width="500">
          <v-card>
            <v-carousel hide-controls v-if="popup">
              <v-carousel-item v-for="(item, i) in slider" :key="i" :src="item"></v-carousel-item>
            </v-carousel>
            <v-card-title>{{ collectionItem.title }}</v-card-title>
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs12 sm4 class="text-xs-center"><div class="avatar">35%</div>Эластан</v-flex>
                <v-flex xs12 sm4 class="text-xs-center"><div class="avatar">35%</div>Эластан</v-flex>
                <v-flex xs12 sm4 class="text-xs-center"><div class="avatar">35%</div>Эластан</v-flex>
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
  export default {
    components: {
      'app-table': table
    },
    data() {
      return {
        popup: false,
        collectionItem: {
          title: '',
          url: '',
          price: null
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
        console.log(this.slider)
        this.popup = true
      },
      checkPrice (item) {
        this.collectionItem.price = `${item.price} грн`
        this.showPrice = true
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