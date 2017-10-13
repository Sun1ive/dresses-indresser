<template>
<v-container fluid>
  <v-layout justify-center align-center>
    <v-flex class="something" xs12>
      <v-btn class="redd mr-4" @click="makeOrder">Закажите</v-btn><span class="big">У нас ваше платье сегодня!</span>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
  export default { 
    methods: {
      makeOrder () {
        alert('заказали')
      }
    }
  }
</script>


<style scoped lang="stylus">
.something
  min-height 200px
  background-color #fff
  display flex
  justify-content center
  align-items center
  transition .4s ease;
  cursor pointer
  &:hover
    transition .4s ease;
    background-color #DBD8DF
    .redd
      background-color #F44336 !important
      color #fff
      border-color: #F44336
    .big
      color #000
  .redd
    background-color #fff !important
    color #000
    border: 1px solid #000
    font-size 4rem
    height auto
    font-weight 300
  .big
    font-size 5rem
    text-transform uppercase
    font-weight 300
    color #F44336

</style>