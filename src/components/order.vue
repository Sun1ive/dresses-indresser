<template>
  <v-container>
    <v-form @submit.prevent="submitOrder">
      <v-text-field label="Имя" required v-model="userData.name"></v-text-field>
      <v-text-field label="Телефон" required v-model="userData.phone"></v-text-field>
      <v-text-field label="e-mail" v-model="userData.email"></v-text-field>
      <v-btn class="red darken-2 white--text" type="submit">Оформить заказ</v-btn>
      <v-btn @click="closeOrder">Закрыть</v-btn>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        userData: {
          name: '',
          phone: null,
          email: '',
          orderedItem: []
        }
      }
    },
    methods: {
      submitOrder () {
        console.log(this.userData)
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
</style>