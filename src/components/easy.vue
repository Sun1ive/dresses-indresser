<template>
  <v-container fluid class="py-5">
    <v-layout justify-center align-center row wrap>
      <h3 class="mb-0 text-xs-center">Все просто!</h3>
    </v-layout>
    <v-layout row wrap justify-center align-center>
      <v-flex class="box" xs12 sm6 md4 lg3 v-for="(item, i) in steps" :key="i">
        <v-avatar size="100">
          <div class="back">{{ item.step }}</div>
        </v-avatar>
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
        { title: 'Выбирайте свое платье', step: 1 },
        { title: 'Оставляйте заявку в форме', step: 2 },
        { title: 'Обсудите детали доставки', step: 3 },
        { title: 'Укажите адресс доставки', step: 4 },
        { title: `Наслаждайтесь покупкой`, step: 5 },
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
.exhortation
  font-size 1.5rem
  text-transform uppercase

h3
  font-size 4rem
  font-weight bold
  text-transform uppercase

.container
  background-color #fff

.box
  display flex
  justify-content center
  align-items center
  flex-flow column wrap
  text-align center
  margin 0 15px
  min-height 200px
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