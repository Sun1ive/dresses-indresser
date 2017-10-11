<template>
  <v-container>
    <v-form id="form" @submit.prevent="offerCall">
      <h5 class="mb-0 text-xs-center">Заказать звонок</h5>
      <v-text-field v-model="userCall.name" required label="Имя"></v-text-field>
      <v-text-field v-model="userCall.phone" required label="Телефон"></v-text-field>
      <v-btn type="submit" class="red darken-2 white--text ml-0">Заказать звонок</v-btn>
      <v-btn class="ml-0 white--text grey darken-4" @click.stop="closeCall">Закрыть</v-btn>
    </v-form>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        userCall: {
          name: '',
          phone: ''
        }
      }
    },
    methods: {
      offerCall () {
        console.log(`Имя: ${this.userCall.name}`)
        this.$emit('closeCall')
        this.userCall = {
          name: null,
          phone: null
        }
      },
      closeCall () {
        this.$emit('closeCall')
      }
    }
  }
</script>

<style scoped>
.container {
  background-color: #fff;
  min-height: 250px;
}
#form {
  padding: 15px 45px;
}
</style>