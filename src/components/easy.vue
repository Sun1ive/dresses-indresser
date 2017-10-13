<template>
  <v-container fluid class="">
    <!--         <v-avatar size="100">
          <div class="back">{{ item.step }}</div>
        </v-avatar> -->
    <v-layout justify-center align-center row wrap class="pt-5">
      <h3 class="mb-0 text-xs-center">Все просто!</h3>
    </v-layout>
    <v-layout row wrap justify-center align-center>
      <v-flex class="box" xs12 sm6 md4 lg2 v-for="(item, i) in steps" :key="i">
        <v-icon>{{ item.icon }}</v-icon>
        <div class="exhortation text-xs-center">{{ item.title }}</div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  export default {
    data () {
      return {
        steps: [
          { title: 'Выбирайте свое платье', step: 1, icon: 'shopping_basket' },
          { title: 'Оставляйте заявку в форме', step: 2, icon: 'format_list_numbered' },
          { title: 'Обсудите детали доставки', step: 3, icon: 'zoom_in' },
          { title: 'Укажите адресс доставки', step: 4, icon: 'local_shipping' },
          { title: `Наслаждайтесь покупкой`, step: 5, icon: 'thumb_up' },
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
.stepper
  width 100%

.exhortation
  font-size 1.5rem
  text-transform uppercase
  margin-top: 2rem

h3
  font-size 4rem
  font-weight bold
  text-transform uppercase

.container
  background url('../../static/crossword.png')

.box
  display flex
  justify-content center
  align-items center
  flex-flow column wrap
  text-align center
  // margin 0 15px
  min-height 300px
  transition .4s ease
  &:nth-child(2)
  &:nth-child(3)
  &:nth-child(4)
    // border-left: 2px solid #F44336
  .back
    background-color #F44336
    width 100%
    height 100%
    min-height 100px
    min-width 100px
    border-radius 50%
    color #fff
    display inline-flex
    justify-content center
    align-items center
    font-size 3rem
  .icon
    font-size 8rem
    min-height 150px
    color #F44336

</style>