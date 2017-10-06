<template>
    <v-footer>
      <v-layout row wrap justify-center align-center>
        <v-flex xs12 sm6 class="text-xs-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A qui possimus expedita iste, provident porro dolores eligendi alias magnam velit, veniam mollitia!
        </v-flex>
        <v-flex xs12 sm6 class="text-xs-center">
          <div>Телефоны:</div> 
          <ul>
            <li><v-icon medium class="red--text mx-2">call</v-icon><a href="tel:3336621">098-02-02-092</a></li>
            <li><v-icon medium class="red--text mx-2">call</v-icon><a href="tel:3336621">068-02-02-092</a></li>
            <li><v-icon medium class="red--text mx-2">call</v-icon><a href="tel:3336621">073-02-02-090</a></li>
          </ul>
        </v-flex>
      </v-layout>
    </v-footer>
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
.footer {
  color: #fff;
  align-items: flex-start;
  font-size: 20px;
}
.layout {
  margin: 0;
  min-height: 200px;
  background-color: #333;
}
</style>