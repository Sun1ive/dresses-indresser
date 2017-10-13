<template>
<v-container fluid>
  <v-layout row wrap justify-center align-center>
    <v-flex class="something" xs12>
      <span class="big">Успейте</span><v-btn class="redd mx-4" @click="makeOrder">Заказать</v-btn><span class="big">У нас платье сегодня!</span>
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
  min-height 500px
  background-color #fff
  display flex
  justify-content center
  align-items center
  flex-flow row wrap
  transition .4s ease;
  background-color #DBD8DF
  text-align center
  &:hover
    transition .4s ease;
    background-color #fff
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
    font-size 3.5rem
    height auto
    font-weight 500
    border-radius 6px
  .big
    font-size 3.5rem
    text-transform uppercase
    font-weight 700
    color #F44336

</style>