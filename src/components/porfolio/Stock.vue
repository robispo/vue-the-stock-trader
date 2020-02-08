<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small
            >(Price: {{ stock.price }}) | (Quantity:
            {{ stock.quantity }})</small
          >
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <div class="form-grou">
            <input
              type="number"
              placeholder="Quantity"
              class="form-control"
              v-model="quantity"
            />
          </div>
        </div>
        <div class="pull-right">
          <button
            class="btn btn-info"
            @click.prevent="sellStock"
            :disabled="cannotSell"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['stock'],
    data() {
      return {
        quantity: ''
      };
    },
    computed: {
      cannotSell() {
        return (
          Number(this.quantity) <= 0 ||
          !Number.isInteger(Number(this.quantity)) ||
          Number(this.quantity) > this.stock.quantity
        );
      }
    },
    methods: {
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: Number(this.quantity)
        };

        this.$store.dispatch('sellStock', order);
        this.quantity = 0;
      }
    }
  };
</script>

<style scoped></style>
