<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs12 class="banner">
        <h1 class="mb-5">Lorem, ipsum dolor.</h1>
        <!-- <img style="width: 100%" src="/static/banner.jpg" alt="banner"> -->
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
.banner
  min-height 900px
  background-image url('../../static/banner2.jpg')
  justify-content center
  align-items center
  display flex
  flex-direction column

.myBtn
  background-color #F44336 !important
  color: #fff
  min-height 86px
  font-size 3.5rem
  font-weight 300
</style>