<template>
  <v-container fluid>
    <v-layout justify-center align-center class="pt-4 text-xs-center">
      <h1 class="mt-3">Почему мы?</h1>
    </v-layout>
    <v-layout row wrap justify-center align-center class="advLayout">
      <v-flex xs12 md3 class="text-xs-center">
        <v-icon x-large class="red--text">color_lens</v-icon>
        <h5>Экслюзивная дизайнерская одежда</h5>
      </v-flex>
      <v-flex xs12 md3 class="text-xs-center">
        <v-icon x-large class="red--text">directions_bus</v-icon>
        <h5>Бесплатная доставка по Украине</h5>
      </v-flex>
      <v-flex xs12 md3 class="text-xs-center">
        <v-icon x-large class="red--text">check</v-icon>
        <h5>Сочетание цены и качества</h5>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.head {
  font-size: 38px;
  text-transform: uppercase;
  font-weight: 500;
}
h1 {
  text-transform: uppercase;
}
</style>