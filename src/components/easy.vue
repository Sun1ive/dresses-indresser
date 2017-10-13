<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <h3 class="text-xs-center">Все просто!</h3>
    </v-layout>
    <v-layout row wrap justify-center align-center>
      <v-flex class="box" xs12 sm6 lg2 v-for="(item, i) in steps" :key="i">
        <v-avatar size="100">
          <div class="back">{{ item.step }}</div>
        </v-avatar>
        <h3 class="exhortation text-xs-center">{{ item.title }}</h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data () {
    return {
      steps: [
        { title: 'Выбирайте свое платье', step: 1 },
        { title: 'Оставляйте заявку в форме', step: 2 },
        { title: 'Обсудите детали доставки', step: 3 },
        { title: `Наслаждайтесь покупкой`, step: 4 }
      ]
    }
  }
}
</script>



<style scoped lang="stylus">
.exhortation
  font-size 1.6rem
  word-wrap wrap

.layout
  background-color #fff

.box
  display flex
  justify-content center
  align-items center
  flex-flow column wrap
  text-align center
  margin 0 15px
  min-height 300px
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
    font-size 4rem
</style>