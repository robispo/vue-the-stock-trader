<template>
  <div>
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue';

  export default {
    components: {
      appStock: Stock
    },
    data() {
      return {
        stocks: [
          { id: 1, name: 'Apple', price: 150 },
          { id: 2, name: 'Amazon', price: 140 },
          { id: 3, name: 'Microsoft', price: 130 },
          { id: 4, name: 'Facebook', price: 120 },
          { id: 5, name: 'WhatsApp', price: 100 }
        ]
      };
    }
  };
</script>

<style scoped></style>
