<template>
  <v-container>
    <v-form @submit.prevent="submitOrder" id="form">
      <h5 class="mb-0 text-xs-center">Оформить заказ</h5>
      <v-text-field name="name" label="Укажите Ваше имя" v-model="userData.name"></v-text-field>
      <v-text-field name="phone" label="Укажите Ваш телефон" v-model="userData.phone"></v-text-field>
      <v-text-field name="email" label="e-mail" v-model="userData.email"></v-text-field>
      <v-select :items="items" v-model="userData.size" label="Выберите размер платья" single-line bottom></v-select>
      <v-btn class="red darken-2 white--text ml-0" type="submit">Оформить заказ</v-btn>
      <v-btn @click="closeOrder" class="white--text grey darken-4">Закрыть</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
    props: ['item'],
    data() {
      return {
        userData: {
          name: '',
          phone: null,
          email: '',
          orderedItem: [],
          size: null
        },
        items: ['XS', 'S','M','L']
      }
    },
    methods: {
      submitOrder () {
        this.userData.orderedItem = this.item
        console.log(this.userData);
/*         emailjs.send('smtp_server','test', {
          name: this.userData.name,
          phone: this.userData.phone,
          email: this.userData.email,
          order: `Товар: ${this.userData.orderedItem.title} Размер: ${this.userData.size} Цена: ${this.userData.orderedItem.price}`
        })
        .then(r => console.log(r))
        .catch(e => console.log(e)) */
/*         axios.post('https://myvuewebapp.firebaseio.com/order.json', this.userData)
          .then(r => console.log(r))
          .catch(e => console.log(e)) */
        this.userData = {
          name: null,
          phone: null,
          email: null,
          orderedItem: []
        }
        this.userData.size = null
        this.$emit('closeOrder')
      },
      closeOrder () {
        this.userData.size = null
        this.$emit('closeOrder')
      }
    }
  }
</script>

<style scoped>
.container {
  background-color: #fff;
  min-height: 350px;
  border-radius: 10px;
}
#form {
  padding: 15px 45px;
}
</style>