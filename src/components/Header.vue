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
          <li><a @click.prevent="endDay">End day</a></li>
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
              <li><a @click.prevent="saveData">Save Data</a></li>
              <li><a @click.prevent="loadData">Load Data</a></li>
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
      ...mapActions(['initStocks', 'ramdomizeStocks', 'loadData']),
      endDay() {
        this.ramdomizeStocks();
      },
      saveData() {
        const data = {
          stockPorfolio: this.stockPorfolio,
          funds: this.funds,
          stocks: this.stocks
        };

        this.$http.put('data.json', data).then(
          r => console.log(r.json()),
          e => console.log(e)
        );
      },
      loadData() {
        this.$http.get('data.json').then(
          r => this.loadData(r.json()),
          e => console.log(e)
        );
      }
    }
  };
</script>

<style scoped></style>
