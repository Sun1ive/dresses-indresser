<template>
  <v-data-table :headers="headers" :items="items" hide-actions >
    <template slot="items" scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-center">{{ props.item.xs }}</td>
      <td class="text-xs-center">{{ props.item.s }}</td>
      <td class="text-xs-center">{{ props.item.m }}</td>
      <td class="text-xs-center">{{ props.item.l }}</td>
      <td class="text-xs-center">{{ props.item.xl }}</td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          {
            text: 'Евро',
            align: 'center',
            sortable: false,
          },
          { text: '34 / XS', value: '123', sortable: false, align: 'center' },
          { text: '36 / S', value: '123', sortable: false, align: 'center' },
          { text: '38 / M', value: '123', sortable: false, align: 'center' },
          { text: '40 / L', value: '123', sortable: false, align: 'center' },
          { text: '42 / XL', value: '123', sortable: false, align: 'center' },
        ],
        items: [
          {
            value: false,
            name: 'Охват груди',
            xs: '75-84',
            s: '85-90',
            m: '91-95',
            l: '96-100',
            xl: '101-105'
          },
          {
            value: false,
            name: 'Охват талии',
            xs: '60-65',
            s: '66-70',
            m: '71-75',
            l: '76-80',
            xl: '81-85',
          },
          {
            value: false,
            name: 'Охват бедер',
            xs: '80-86',
            s: '87-94',
            m: '95-98',
            l: '99-104',
            xl: '105-110',
          },
          {
            value: false,
            name: 'Рост',
            xs: 170,
            s: 170,
            m: 170,
            l: 170,
            xl: 170,
          }
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">
table.table tbody td
  font-size 1.5rem

.column
  font-size 1.5rem
</style>