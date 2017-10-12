<template>
  <v-container>
    <v-form class="subscribeForm" @submit.prevent="addSubscriber">
      <h5>Subscribe form</h5>
      <p class="mb-0" align="justify">Подпишитесь сегодня и получите скидку до 9999% (но это не точно)</p>
      <v-text-field required v-model="subscriber.name" label="Введите Ваше имя"></v-text-field>
      <v-text-field required v-model="subscriber.email" label="e-mail"></v-text-field>
      <v-btn type="submit" class="red darken-2 ml-0">Отправить</v-btn>
      <v-btn @click.stop="close" class="grey darken-4">Закрыть</v-btn>
    </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      subscriber: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    addSubscriber () {
      axios.post('https://myvuewebapp.firebaseio.com/subscribers.json', this.subscriber)
        .then(r => console.log(r))
        .catch(e => console.log(e))
      this.subscriber = {
        name: null,
        email: null
      }
      this.$emit('closeSubForm')
      this.$emit('removePresent')
    },
    close () {
      this.$emit('closeSubForm')
    }
  }
}
</script>

<style scoped>
.subscribeForm {
  background-color: #fff;
  padding: 35px;
  border-radius: 10px;
}
.btn {
  color: #fff
}
</style>