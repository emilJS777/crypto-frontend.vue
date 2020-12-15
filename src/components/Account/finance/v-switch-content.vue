<template>
  <div class="switch_content container mt-5">
    <div class="row">
        <div class="col-12">
          <div class="buttons_block">
            <button
                v-bind:class="tabElem === 0 ? 'active':''"
                @click="nextTab(0)">
              Balance
            </button>
            <button
                v-bind:class="tabElem === 1 ? 'active':''"
                @click="nextTab(1)">
              Transactions
            </button>
            <button
                v-bind:class="tabElem === 2 ? 'active':''"
                @click="nextTab(2)">
              Payments
            </button>
            <button
                v-bind:class="tabElem === 3 ? 'active':''"
                @click="nextTab(3)">
              Archived orders
            </button>
            <button
                v-bind:class="tabElem === 4 ? 'active':''"
                @click="nextTab(4)">
              Margin trading
            </button>
            <button>
              <router-link to="/limits-commissions">Limit and Commisions</router-link>
            </button>
          </div>
        </div>
        <div class="col-12 pt-5 content">
          <v-balance v-if="tabElem === 0"/>
          <v-transactions v-if="tabElem === 1"/>
          <v-payments v-if="tabElem === 2"/>
          <v-archived-orders v-if="tabElem === 3"/>
          <v-margin-trading v-if="tabElem === 4"/>
        </div>
    </div>
  </div>
</template>

<script>
import {tabsFunction} from '../../_mixins/tabs';
import VBalance from "./switchable-pages/v-balance";
import VTransactions from "./switchable-pages/v-transactions";
import VPayments from "./switchable-pages/v-payments";
import VArchivedOrders from "./switchable-pages/v-archived-orders";
import VMarginTrading from "./switchable-pages/v-margin-trading";
export default {
  name: "v-switch-content",
  components: {VMarginTrading, VArchivedOrders, VTransactions, VPayments, VBalance},
  mixins: [tabsFunction]
}
</script>

<style scoped>
  .buttons_block{
    display: table;
  }
  .buttons_block > button{
    margin-left: 5px;
    margin-right: 5px;
    padding: 10px 15px;
    background-color: #eae9e9;
    border: 1px solid #eae9e9;
    color: #75797c;
    font-weight: bold;
    border-radius: 1px;
    padding-top: 5px;
    transition: .3s;
    font-size: 15px;
    letter-spacing: 1px;
  }
  .buttons_block > button:first-child{
    margin: 0;
  }
  .buttons_block > button:focus{
    outline: 0;
  }
  .buttons_block > button.active{
    color: #0b364f;
    background-color: #f6f6f6;
    border-top: 1px solid #1d345d;
  }
  .buttons_block > button:hover{
    background-color: #f6f6f6;
  }
  .content{
    background-color: #f6f6f6;
    margin-top: -8px;
    padding-bottom: 30px;
    min-height: 500px;
  }
  .switch_content > div > div:first-child{
    padding-left: 0;
  }
  .buttons_block > button > a{
    color: inherit;
  }
</style>