<template>
  <v-container>
    <v-form @submit.prevent="submitOrder">
      <v-text-field v-model="userData.name"></v-text-field>
      <v-text-field v-model="userData.phone"></v-text-field>
      <v-text-field v-model="userData.email"></v-text-field>
      <v-btn type="submit">Заказать</v-btn>
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
        console.log('Submitted')
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