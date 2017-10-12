<template>
  <v-container fluid>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm10 md8 lg6 xl5 class="banner">
        <h2>Элегантные платья</h2>
        <!-- <img style="width: 100%" src="/static/banner.jpg" alt="banner"> -->
        <h3>осень-зима 2017/2018</h3>
      </v-flex>
      <v-flex class="flex2">
        <v-btn class="myBtn">Получите консультацию</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="stylus">
@import url('https://fonts.googleapis.com/css?family=PT+Sans:700&subset=cyrillic')

.layout
  min-height 850px
  background-image url('../../static/banner3.jpg')

.banner
  justify-content center
  align-items center
  display flex
  flex-direction column

.myBtn
  background-color #F44336 !important
  color: #fff
  min-height 50px
  font-size 2rem
  font-weight 300

h2
  font-size 5rem
  font-weight bold
  text-transform uppercase
  font-family: 'PT Sans', sans-serif;
h3
  font-size 2rem
  text-transform uppercase
  align-self flex-end
  font-style italic

.flex2
  align-items center
  display flex
</style>