<template>
  <v-container fluid>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm10 md8 lg6 xl5 class="banner">
        <h2>Элегантные платья</h2>
        <h3>осень-зима 2017/2018</h3>
      </v-flex>
      <v-flex class="flex2">
        <v-btn class="myBtn">Получите консультацию</v-btn>
      </v-flex>
    </v-layout>
<!--     <v-layout class="class">
      <v-flex id="frame" xs12>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Tv_Vjz6FwfM?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
        <iframe src="https://www.youtube.com/embed/Tv_Vjz6FwfM" width="100%" height="100%" frameborder="0"></iframe>
      </v-flex>
    </v-layout> -->
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
/*     mounted () {
      (function() {
        let size = 100
        let frame = document.createElement('iframe')
        let url = 'https://www.youtube.com/embed/Tv_Vjz6FwfM'
        let src = document.createAttribute('src')
        let flex = document.querySelector('#frame')
        let width = document.createAttribute('width')
        let height = document.createAttribute('height')
        let vlayout = document.querySelector('.class')
        frame.src = url
        frame.width = `${size}%`
        frame.height = `${size}%`
        flex.appendChild(frame)
        console.log(window.frames);
      })()
    } */
  }
</script>

<style scoped lang="stylus">
@import url('https://fonts.googleapis.com/css?family=PT+Sans:700&subset=cyrillic')

.class
  min-height 90vh

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