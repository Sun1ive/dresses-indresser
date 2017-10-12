<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <v-flex xs12 class="banner">
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
  min-height 650px
  // background-color #c0c0c0
  background-image url('../../static/1980x600-about-us.png')
  justify-content center
  align-items center
  display flex

.myBtn
  background-color #F44336 !important
  color: #fff
  min-height 86px
  font-size 4rem
  font-weight 300
</style>