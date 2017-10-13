<template>
  <v-container>
    <v-form id="form" @submit.prevent="offerCall">
      <h5 class="mb-0 text-xs-center">Заказать Консультацию</h5>
      <v-text-field v-model="userCall.name" required label="Имя"></v-text-field>
      <v-text-field v-model="userCall.phone" required label="Телефон"></v-text-field>
      <v-btn type="submit" class="redd ml-0">Заказать звонок</v-btn>
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

<style scoped lang="stylus">
.container
  background-color: #fff;
  min-height: 250px;
  border-radius 6px

#form
  padding: 15px 45px;


.btn
  border-radius 6px

.redd
  background-color #F44336 !important
  color #fff
</style>