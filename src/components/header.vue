<template>
  <header>
    <nav>
      <div class="header">
        <v-flex xs6 class="tt text-xs-center"><v-icon>call</v-icon>123123</v-flex>
        <v-flex xs6 class="tt text-xs-center"><v-icon>call</v-icon>123123</v-flex>
      </div>
    </nav>
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
.header {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.tt {
  min-height: inherit
}
</style>