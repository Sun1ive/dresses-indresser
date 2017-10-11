<template>
  <v-container fluid>
    <v-layout justify-center align-center class="pt-4 text-xs-center">
      <h3 class="mt-3">Почему мы?</h3>
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

<style scoped>
.head {
  font-size: 38px;
  text-transform: uppercase;
  font-weight: 500;
}
h3 {
  text-transform: uppercase;
  font-size: 6rem;
  font-weight: 300;
  line-height: 6rem;
}
.something {
  font-size: 1.8em;
}
.icon {
  font-size: 9rem;
}

@media (max-width: 600px) {
  h3 {
    font-size: 5rem;
  }
}
</style>