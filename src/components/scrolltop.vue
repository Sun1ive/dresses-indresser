<template>
  <v-container fluid>
    <div class="scrollTop" v-scroll-to="'.header'"></div>
  </v-container>
</template>


<style>
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
  .scrollTop:before {
    position: absolute;
    content: "";
    left: 51%;
    margin-left: -6px;
    bottom: 100%;
    z-index: 5;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 12.5px 15px 12.5px;
    border-color: transparent transparent #000 transparent;
  }
  .scrollTop:hover {
    min-height: 20px;
    opacity: 1;
  }

  @media (max-width: 1930px) {
    .scrollTop:after {
      left: 50%;
      margin-left: -5px
    }
    .scrollTop:before {
      margin-left: -11px;
    }
  }
  @media (max-width: 1600px) {
    .scrollTop:after {
      left: 50%;
      margin-left: -5px
    }
    .scrollTop:before {
      margin-left: -8px;
    }
  }
  @media (max-width: 1280px) {
    .scrollTop:after {
      left: 50%;
      margin-left: -5px
    }
    .scrollTop:before {
      margin-left: -4px;
    }
  }
  @media (max-width: 1024px) {
    .scrollTop:after {
      left: 50%;
      margin-left: -10px;
    }
    .scrollTop:before {
      bottom: 90%;
    }
  }
  @media (max-width: 650px) {
    .scrollTop:after {
      left: 48%;
      margin-left: 1px;
    }
  }
  @media (max-width: 320px) {
    .scrollTop:after {
      left: 50%;
      margin-left: -15px;
    }
  }
</style>