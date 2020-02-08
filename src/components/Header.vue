<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <router-link to="/porfolio" tag="li" activeClass="active"
            ><a>Porfolio</a>
          </router-link>
          <router-link to="/stocks" tag="li" activeClass="active"
            ><a>Stocks</a>
          </router-link>
        </ul>
          <app-money
            :value="funds"
            :locale="en"
            :currency-code="USD"
            :subunit-value="true"
            :hide-subunits="true"
            tag="strong"
            prefix="Funds:"
            class="navbar-text navbar-right"
          ></app-money>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">End day</a></li>
          <li class="dropdown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Save & Load <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li><a href="#">Save Data</a></li>
              <li><a href="#">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
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
