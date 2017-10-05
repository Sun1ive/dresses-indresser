<template>
  <header>
    <div class="header">
      <v-flex xs6 class="text-xs-right">
        <v-icon class="mr-3">contact_mail</v-icon>info@indresser.com</v-flex>
      <v-flex xs6 class="text-xs-right">
        <v-icon class="mr-3">contact_phone</v-icon>513-12-12</v-flex>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
.header {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>