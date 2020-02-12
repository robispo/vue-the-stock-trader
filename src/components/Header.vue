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
        <strong class="navbar-text navbar-right"
          >Funds: {{ funds | currency }}</strong
        >
        <ul class="nav navbar-nav navbar-right">
          <li><a @click.prevent="endDay" class="pointer">End day</a></li>
          <li
            class="dropdown"
            :class="{ open: isDropDownOpen }"
            @click.prevent="isDropDownOpen = !isDropDownOpen"
          >
            <a
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Save & Load <span class="caret"></span
            ></a>
            <ul class="dropdown-menu">
              <li>
                <a @click.prevent="aSaveData" class="pointer">Save Data</a>
              </li>
              <li>
                <a @click.prevent="aLoadData" class="pointer">Load Data</a>
              </li>
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
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        isDropDownOpen: false
      };
    },
    computed: {
      ...mapGetters(['funds', 'stockPorfolio', 'stocks'])
    },
    methods: {
      ...mapActions(['initStocks', 'ramdomizeStocks', 'saveData', 'loadData']),
      endDay() {
        this.ramdomizeStocks();
      },
      aSaveData() {
        this.saveData({
          stockPorfolio: this.stockPorfolio,
          funds: this.funds,
          stocks: this.stocks
        });
      },
      aLoadData() {
        this.loadData();
      }
    }
  };
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>
