<template>
  <v-container>
    <v-form @submit.prevent="submitOrder" id="form">
      <h5 class="mb-0 text-xs-center">Оформить заказ</h5>
      <v-text-field name="name" label="Имя" v-model="userData.name"></v-text-field>
      <v-text-field name="phone" label="Телефон" v-model="userData.phone"></v-text-field>
      <v-text-field name="email" label="e-mail" v-model="userData.email"></v-text-field>
      <v-select :items="items" v-model="userData.size" label="Select" single-line bottom></v-select>
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
        items: ['XS', 'S','M','L','XL']
      }
    },
    methods: {
      submitOrder () {
        this.userData.orderedItem = this.item
        let data = this.userData
        console.log(data);
        // emailjs.send('smtp_server','test', {
        //   name: data.name,
        //   phone: data.phone,
        //   email: data.email,
        //   order: `Товар: ${data.orderedItem.title} Размер: ${data.size} Цена: ${data.orderedItem.price}`
        // })
        // .then(r => console.log(r))
        // .catch(e => console.log(e))
/*         axios.post('https://myvuewebapp.firebaseio.com/order.json', this.userData)
          .then(r => console.log(r))
          .catch(e => console.log(e)) */
        this.userData = {
          name: null,
          phone: null,
          email: null,
          orderedItem: []
        }
        this.e1 = null
        this.$emit('closeOrder')
      },
      closeOrder () {
        this.e1 = null
        this.$emit('closeOrder')
      }
    }
  }
</script>

<style scoped>
.container {
  background-color: #fff;
  min-height: 350px;
}
#form {
  padding: 15px 45px;
}
</style>