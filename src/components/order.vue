<template>
  <v-container>
    <v-form @submit.prevent="submitOrder" id="form">
      <v-text-field label="Имя" v-model="userData.name"></v-text-field>
      <v-text-field label="Телефон" v-model="userData.phone"></v-text-field>
      <v-text-field label="e-mail" v-model="userData.email"></v-text-field>
      <v-checkbox label="Выбрать время?" v-model="pickTime"></v-checkbox>
      <v-flex xs12 v-show="pickTime">
        <v-time-picker v-model="userData.hours" format="24hr"></v-time-picker>
      </v-flex>
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
          day: null,
          hours: null
        },
        pickTime: false,
      }
    },
    methods: {
      submitOrder () {
        this.userData.orderedItem = this.item
        console.log(this.userData)
        axios.post('https://myvuewebapp.firebaseio.com/order.json', this.userData)
          .then(r => console.log(r))
          .catch(e => console.log(e))
        this.userData = {
          name: null,
          phone: null,
          email: null,
          orderedItem: []
        }
        this.$emit('closeOrder')
      },
      closeOrder () {
        this.$emit('closeOrder')
      }
    }
  }
</script>

<style scoped>
.container {
  background-color: #fff;
  min-height: 350px;
  min-width: 350px;
}
#form {
  padding: 15px 45px;
}
</style>