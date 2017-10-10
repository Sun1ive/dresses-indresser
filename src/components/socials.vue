<template>
  <v-container fluid>
    <ul class="socialList">
      <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
      <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
      <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
      <li><a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a></li>
    </ul>
  </v-container>
</template>

<style scoped>
  .socialList {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 24px;
    min-height: 50px;
  }
  .socialList li {
    margin: 0 15px;
  }
  .socialList li a {
    transition: .4s ease;
  }
  .socialList li a:hover {
    transition: .4s ease;
    color: #F44336
  }
  @media (max-width: 350px) {
    .socialList {
      justify-content: center;
    }
  }
</style>