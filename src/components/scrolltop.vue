<template>
  <v-container fluid>
    <div class="scrollTop" v-scroll-to="'.header'"></div>
  </v-container>
</template>

<style scoped>
  .scrollTop {
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 15;
    min-height: 10px;
    background-color: #fff;
    transition: .6s;
    opacity: .6;
    cursor: pointer;
  }
  .scrollTop:after {
    position: absolute;
    content: "";
    left: 50%;
    bottom: 100%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 25px 25px 25px;
    border-color: transparent transparent #fff transparent;
  }
  .scrollTop:hover {
    min-height: 40px;
    opacity: 1;
  }
</style>