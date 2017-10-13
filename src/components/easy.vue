<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex class="box" xs12 sm6 lg3 v-for="(item, i) in steps" :key="i">
        <v-avatar size="128">
          <div class="back">{{ item.step }}</div>
        </v-avatar>
        <h3>{{ item.title }}</h3>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data () {
    return {
      steps: [
        { title: 'Lorem ipsum dolor sit amet', step: 1 },
        { title: 'Lorem ipsum dolor sit amet', step: 2 },
        { title: 'Lorem ipsum dolor sit amet', step: 3 },
        { title: 'Lorem ipsum dolor sit amet', step: 4 }
      ]
    }
  }
}
</script>



<style scoped lang="stylus">
.layout
  background-color #c0c0c0

.box
  display flex
  justify-content center
  align-items center
  flex-flow column wrap
  text-align center
  min-height 300px
  border-left: 1px solid #000
  .back
    background-color #F44336
    width 100%
    height 100%
    min-height 128px
    min-width 128px
    border-radius 50%
    color #fff
    display inline-flex
    justify-content center
    align-items center
    font-size 6rem
</style>