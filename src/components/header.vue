<template>
  <header class="header">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12 class="test pr-4">
          <v-icon medium class="red--text mx-2">call</v-icon><div>333-333-333</div>
          <v-icon medium class="red--text mx-2">call</v-icon><div>333-333-333</div>
          <v-icon medium class="red--text mx-2">email</v-icon><div>info@indresser.com</div>
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
@font-face {
  font-family: "Geometric";
  src: url('/fonts/geometric.woff2') format('woff2');
}
.test {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 50px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
}
.header {
  background-color: #333;
}
</style>