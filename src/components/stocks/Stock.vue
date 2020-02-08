<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }} <small>(Price: {{ stock.price }})</small>
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
            class="btn btn-success"
            @click.prevent="buyStock"
            :disabled="
              Number(quantity) <= 0 ||
                !Number.isInteger(Number(quantity)) ||
                Number(quantity) * stock.price > funds
            "
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    props: ['stock'],
    data() {
      return {
        quantity: ''
      };
    },
    computed: {
      ...mapGetters(['funds'])
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: Number(this.quantity)
        };

        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    }
  };
</script>

<style scoped></style>
