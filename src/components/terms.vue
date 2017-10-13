<template>
 <v-container fluid>
   <v-layout row wrap justify-center align-center>
     <v-flex xs12 sm5 lg3 class="nice text-xs-center" v-for="(item, i) in terms" :key="i">
       <v-icon class="niceIcon mr-2">{{ item.icon }}</v-icon>
       <h3 class="flexx mb-0">{{ item.title }}</h3>
       <v-btn flat @click.stop="showTerms(item)">Узнать подробнее <v-icon right>keyboard_arrow_right</v-icon><v-icon style="margin-left: -30px;">keyboard_arrow_right</v-icon></v-btn>
     </v-flex>
   </v-layout>
   <v-container>
     <v-dialog overflow v-model="showDialog" width="500">
       <v-card class="bradius">
        <v-card-text>
          <p class="mb-0 text" align="justify" v-for="(item, i) in currentTerm.desc" :key="i">{{ item }}</p>
        </v-card-text>
        <v-card-actions>
          <v-btn @click.stop="showDialog = false">Ок</v-btn>
        </v-card-actions>
       </v-card>
     </v-dialog>
   </v-container>
 </v-container>
</template>

<script>
  export default {
    data() {
      return {
        terms: [
          { title: 'Оформите заказ', desc: {
            one: 'Если вы оформите заказ до 15:00 мы отправим в его в тот же день.',
            two: 'В случае если заказ был оформлен после 15:00, в нерабочее время или в выходной день - заказ будет обработан на следующий рабочий день до 10:00.'
            }, icon: 'description'
          },
          { title: 'Оплатите', desc: {
            one: 'Оплатить товар можно следующими способами:',
            two: 'Безналичный расчет - перевод средств на расчетный счет интернет-магазина InDresser. После оформления заказа менеджер вышлет на вашу электронную почту счет-фактуру с платежными реквизитами. В этом случае, Ваш заказ отправляется сразу после зачисления денег на наш счет.',
            three: 'Перевод на карту "Приват Банка" - после оформления Вашего заказа менеджер сообщит вам реквизиты карты, на которую нужно перевести средства. В этом случае, Ваш заказ отправляется сразу после поступления денег на наш счет.',
            four: 'Наложенным платежом - оплата производится при получении товара в отделении курьерской службы доставки. За услугу наложенного платежа будет необходимо оплатить 2% от суммы стоимости покупки, а также внести предоплату в размере 100 грн на счет указанный менеджером, эта сумма будет вычтена из стоимости Вашего заказа. В случае отказа покупателя от заказа после отправки сумма 100 грн не возвращается.'
            }, icon: 'credit_card'
          },
          { title: 'Получите', desc: {
            one: 'Доставка Вашего заказа по Украине осуществляется ЗА НАШ СЧЕТ курьерскими службами Новая почта и Укрпочта.Время доставка по территории Украины занимает от 1 до 3х рабочих дней.',
            two: 'Точную дату получения товара вам сообщит менеджер при оформлении покупки.'
            }, icon: 'local_shipping'
          },
          { title: 'Гарантия', desc: {
            one: 'В соответствии с п. 1.8 «Правил продажи товаров на заказ и вне офисных или торговых помещений» (Приказ Минэкономики Украины от 19.04.2007 г. № 103), возврат полученного товара допускается в течение 14 календарных дней после его доставки (получение в службе доставки).Если приобретенный в нашем интернет-магазине товар по каким-либо причинам вам не подошел и вы желаете обменять его на другой или же осуществить возврат, то сделать это можно при соблюдении следующих условий:',
            two: 'Обмен или возврат товара осуществляется в течение двух недель (14 дней);• товар должен сохранить бирки, ярлыки, не иметь следов ношения, использования и т.д.;Покупатель самостоятельно оплачивает доставку возвращаемого товара, стоимость которой устанавливает курьерская служба.',
            three: 'Если товар имеет заводской брак, то обратная доставка осуществляется за счет интернет-магазина InDresser.Срок возврата денежных средств установлен в соответствии с «Правилами продажи товаров на заказ и вне офисных или торговых помещений» (Приказ Минэкономики Украины от 19.04.2007 г. № 103) и составляет до 30 календарных дней, считая от даты получения «Продавцом» заполненного «Покупателем» оригинала заявления на возврат товара, которое направляется вместе с товаром.'
            }, icon: 'autorenew'
          },

        ],
        showDialog: false,
        currentTerm: {
          title: '',
          desc: {
            one: '',
            two: '',
            three: ''
          }
        }
      }
    },
    methods: {
      showTerms (item) {
        this.currentTerm.title = item.title;
        this.currentTerm.desc = item.desc;
        this.showDialog = true;
      }
    }
  }
</script>

<style scoped>
.nice {
  display: flex;
  flex-flow: column wrap;
}

.nice .niceIcon {
  font-size: 9rem;
  color: #F44336;
}

.nice .btn {
  height: 42px;
  font-size: 1.5rem;
}
.nice .flexx {
  font-size: 2rem;
  font-weight: bold;
}

.btn {
  border-radius: 6px;
}
ul > li {
  margin: 0 10px;
}
.flexx {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-transform: uppercase;
}
.card__actions {
  justify-content: center;
}
.bradius {
  border-radius: 11px;
}
.text {
  text-indent: 1.5rem;
  font-size: 1.2rem;
}
.icon {
  font-size: 3rem;
}
h3 {
  font-size: 2rem;
  font-weight: 300;
}

.layout .flex:nth-child(1), 
.layout .flex:nth-child(2), 
.layout .flex:nth-child(3) {
  border-right: 2px solid rgba(255,25,12,.6);
} 

@media (max-width: 1384px) {
  h3 {
    font-size: 2.2rem;
  }
  .layout .flex:nth-child(1), 
  .layout .flex:nth-child(2), 
  .layout .flex:nth-child(3),
  .layout .flex:nth-child(4) {
    border-right: none;
    border-bottom: 2px solid rgba(255,25,12,.6);
    margin: 0px 5px;
    padding: 20px 0px;
  } 
}
</style>