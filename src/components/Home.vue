<template>
  <div>
    <h1>Trade or view your porfolio</h1>
    <h6>You may save & load your data</h6>
    <h6>Click on 'End Day' to begin a new day!</h6>
    <hr />
    <app-money
      :value="funds"
      :locale="en"
      :currency-code="USD"
      :subunit-value="true"
      :hide-subunits="true"
      tag="p"
      prefix="Your funds:"
    ></app-money>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import MoneyFormat from 'vue-money-format';

  export default {
    components: {
      appMoney: MoneyFormat
    },
    computed: {
      ...mapGetters(['funds'])
    }
  };
</script>

<style scoped></style>
