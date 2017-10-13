<template>
  <v-container fluid class="pb-5">
    <v-layout justify-center align-center>
      <h5 class="head mb-0">Отзывы клиентов</h5>
    </v-layout>
      <v-layout row wrap justify-center class="reviewsContainer">
      <v-flex xs10 lg3 class="text-xs-right client" v-for="(item, i) in reviews" :key="i">
        <p class="mb-0 review black--text" align="justify">{{ item.desc }}</p>
        <div class="py-3">
          <span class="name mr-2">{{ item.name }}</span><span class="job">{{ item.job }}</span>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
export default {
  data () {
    return {
      reviews: [
        { name: 'Катя', job: 'предприниматель' , desc: '"Я очень-очень довольна покупкой! Мне понравился крой и дизайн синего платья 009. Отличное качество пошива! Благодарю команду InDresser за консультацию при выборе!"' },
        { name: 'Наталия', job: 'молодая мама' , desc: 'Спасибо огромное за модное и практичное платье с карманами, у вас это платье 002! Приятно, когда встречаешь профессионала своего дела. Правда, я ошиблась в размере, но все оперативно поменяли. Буду у вас заказывать теперь всегда и советовать всем своим знакомым! От души, спасибо!' },
        { name: 'Юлия', job: 'студентка мед университета' , desc: 'Я ризикнула і замовила плаття через Інтернет! Мене приємно вразила якість пошиву. Колір той, який я дивилася на фото, абсолютно ідентичний. Дякую Вам, дійсно гарне плаття, те що і радив менеджер!' },
      ]
    }
  }
}

</script>







<style scoped>
.client {
  margin: 5px 25px;
  padding: 25px 25px 0 25px;
  border-radius: 7px;
  box-shadow: 2px 2px 5px rgba(0,0,0,.3);
  /* background: url('/static/grunde.png') center center repeat; */
  transition: .3s ease;
}
p {
  min-height: 180px;
  font-size: 1.2rem;
}
.name {
  font-weight: bold;
  font-size: 1.3rem;
}
.reviewClient {
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 500;
  margin-top: 15px;
}
.client:hover {
  transform: scale(1.1);
  transition: .3s ease;
  box-shadow: 3px 2px 8px rgba(0,0,0,.7);
}
.head {
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 700;
  padding: 20px 0;
  text-align: center;
  line-height: initial;
}

@media (max-width: 1660px) {
  p {
    min-height: 180px;
  }
  .head {
    font-size: 4.6rem;
  }
}
@media (max-width: 1270px) {
  p {
    min-height: 50px;
  }
  .head {
    font-size: 4rem;
  }
}
@media (max-width: 800px) {
  .head {
    font-size: 3rem;
    padding: 5px 0;
    line-height: 4rem;
  }
}
</style>