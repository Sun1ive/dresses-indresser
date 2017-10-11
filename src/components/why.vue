<template>
  <v-parallax src="/static/paralaks.jpg" height="500">
    <v-container fluid>
      <v-layout justify-center>
        <h2 class="mt-5 pt-3">Кому подходит наша одежда?</h2>
      </v-layout>
      <v-layout column wrap align-center justify-center>
        <v-flex xs12 lg7 offset-lg2 class="whyUsContainer">
          <v-icon large class="red--text mr-3">thumb_up</v-icon>
            <p class="mb-0">Для любительниц что-то носить с собой, теперь ЕСТЬ решение - это практичное и элегантоное платье с карманами!</p>
        </v-flex>
        <v-flex xs12 lg7 offset-lg2 class="whyUsContainer">
          <v-icon large class="red--text mr-3">thumb_up</v-icon>
            <p class="mb-0">Для тех, кто предпочитает стильные, удобные и женственные платья в cтиле Casual!</p>
        </v-flex>
        <v-flex xs12 lg7 offset-lg2 class="whyUsContainer">
          <v-icon large class="red--text mr-3">thumb_up</v-icon>
            <p class="mb-0">Для тех, кто живет в ритме города и не беспокоится по мелочам!</p>
        </v-flex>
      </v-layout>
    </v-container>      
  </v-parallax>
</template>


<style scoped lang="stylus">
@import './../stylus/why.styl'
</style>