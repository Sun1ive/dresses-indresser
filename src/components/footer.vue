<template>
  <footer>
    <v-card dark height="200px">
      <div class="headline text-xs-center pa-5">FOOTER</div>
      <v-bottom-nav absolute :active.sync="e2">
        <v-btn v-scroll-to="item.scroll" flat v-for="(item,i) in toolbar" :key="i">
          <span>{{ item.title }}</span>
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-card>
  </footer> 
</template>


<script>
import toolbarList from './toolbarList'
  export default {
    data() {
      return {
        e2: 3
      }
    },
    methods: {
      showOrder () {
        this.$emit('showOrder')
      }
    },
    computed: {
      toolbar () {
        return toolbarList
      }
    }
  }
</script>

<style scoped>
.bottom-nav {
  min-height: 65px;
  height: auto;
  background-color: #333;
  align-items: center;
}
.bottom-nav .btn {
  color: #fff
}
</style>