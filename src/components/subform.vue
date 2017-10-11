<template>
  <v-container>
    <v-form class="subscribeForm" @submit.prevent="addSubscriber">
      <h5>Subscribe form</h5>
      <v-text-field required v-model="subscriber.name" label="Введите Ваше имя"></v-text-field>
      <v-text-field required v-model="subscriber.email" label="email"></v-text-field>
      <v-btn type="submit" class="ml-0">Отправить</v-btn>
      <v-btn @click.stop="close">Закрыть</v-btn>
    </v-form>
  </v-container>
</template>

<script>
// @flow

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
      console.log(this.subscriber)
      // axios
      this.$emit('closeSubForm')
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
}
</style>