<template>
  <header class="header">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 class="test pr-4">
          <v-icon medium class="red--text mx-2">call</v-icon><a href="tel:3336621">333-66-21</a>
          <v-icon medium class="red--text mx-2">call</v-icon><a href="tel:3336621">333-66-21</a>
          <v-icon medium class="red--text mx-2">email</v-icon><a href="mailto:info@indresser.com">info@indresser.com</a>
        </v-flex>
      </v-layout>
    </v-container>
  </header>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
.test {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 50px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
}
.header {
  background-color: #333;
}
</style>