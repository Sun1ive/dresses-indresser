<template>
  <v-container>
    <v-form id="form" @submit.prevent="offerCall">
      <v-text-field v-model="userCall.name" required label="Имя"></v-text-field>
      <v-text-field v-model="userCall.phone" required label="Телефон"></v-text-field>
      <v-btn type="submit" class="red white--text ml-0">Заказать звонок</v-btn>
      <v-btn class="ml-0 black white--text" @click.stop="closeCall">Закрыть</v-btn>
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
        console.log(this.userCall)
        this.$emit('closeCall')
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