<template>
  <v-container fluid class="">
    <v-layout justify-center align-center>
      <h3>Почему мы?</h3>
    </v-layout>
    <v-layout row wrap justify-center align-center class="advLayout">
      <v-flex xs12 lg4 md4 sm4 class="text-xs-center">
        <v-icon class="red--text">color_lens</v-icon>
        <div class="something">Экслюзивная дизайнерская одежда</div>
      </v-flex>
      <v-flex xs12 lg4 md4 sm4 class="text-xs-center">
        <v-icon class="red--text">directions_bus</v-icon>
        <div class="something">Бесплатная доставка по Украине</div>
      </v-flex>
      <v-flex xs12 lg4 md4 sm4 class="text-xs-center">
        <v-icon class="red--text">check</v-icon>
        <div class="something">Сочетание цены и качества</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped lang="stylus">
.container
  border-bottom: 1px solid #333

.layout
  min-height 150px

.advLayout
  min-height 350px

.head
  font-size: 38px;
  text-transform: uppercase;
  font-weight: 500;

h3
  text-transform: uppercase;
  font-size: 4rem;
  font-weight: 700;
  margin 0
  // padding-bottom: 1.2rem;

.something
  font-size: 1.5rem
  text-transform uppercase
  padding: 1rem 0;

.icon
  font-size: 9rem;


/* @media (max-width: 600px) {
  h3 {
    font-size: 5rem;
  }
} */
</style>