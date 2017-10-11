<template>
  <v-container fluid>
    <v-layout justify-center align-center>
      <h5 class="head pt-5 pb-3">Отзывы клиентов</h5>
    </v-layout>
      <v-layout row wrap justify-center class="reviewsContainer">
      <v-flex xs12 lg3 class="text-xs-right client">
        <p class="mb-0 review black--text" align="justify">
          <q>Я очень-очень довольна покупкой! Мне понравился крой и дизайн синего платья 009 . Отличное качество пошива.! Благодарю команду InDresser за консультацию при выборе!</q>
        </p>
        <p class="reviewClient black--text">Катя, предприниматель</p>
      </v-flex>
      <v-flex xs12 lg3 class="text-xs-right client">
        <p class="mb-0 review black--text" align="justify">
          <q>Спасибо огромное за модное и практичное платье с карманами, у вас это платье 002! Приятно, когда встречаешь профессионала своего дела. Правда, я ошиблась в размере, но все оперативно поменяли. Буду у вас заказывать теперь всегда и советовать всем своим знакомым! От души, спасибо!</q>
        </p>
        <p class="reviewClient black--text">Наталия, молодая мама</p>
      </v-flex>
      <v-flex xs12 lg3 class="text-xs-right client">
        <p class="mb-0 review black--text" align="justify">
          <q>Я ризикнула і замовила плаття через Інтернет! Мене приємно вразила якість пошиву. Колір той, який я дивилася на фото, абсолютно ідентичний. Дякую Вам, дійсно гарне плаття, те що і радив менеджер!</q>
        </p>
        <p class="reviewClient black--text">Юлия, студентка мед университета</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.client {
  margin: 5px 25px;
  padding: 25px 25px 0 25px;
  border-radius: 7px;
  box-shadow: 2px 2px 5px rgba(0,0,0,.3);
  background: url('/static/grunde.png') center center repeat;
  transition: .3s ease;
}
.reviewClient {
  font-size: 1rem;
  font-style: italic;
  font-weight: 500;
  margin-top: auto;
  margin-top: 15px;
}
.client:hover {
  transform: scale(1.1);
  transition: .3s ease;
  box-shadow: 3px 2px 8px rgba(0,0,0,.7);
}
.head {
  font-size: 38px;
  text-transform: uppercase;
  font-weight: 500;
}
</style>