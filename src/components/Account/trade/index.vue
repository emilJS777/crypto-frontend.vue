<template>
  <div id="trade">
    <v-header active="trade"/>
    <v-sub-header/>
    <v-top-currency-menu/>
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-3">
          <v-left-currency-select-bar/>
        </div>
        <div class="col-9">
          <v-right-pricing-informacion-last-day/>
          <v-chart-section/>
          <v-instant-prchase/>
          <v-bar-chart/>
          <div class="row mb-3">
            <div class="col-6">
              <v-orders-table
                  :ordersTable="ordersTable"/>
            </div>
            <div class="col-6">
              <v-orders-table
                  :ordersTable="ordersTable"/>
            </div>
            <div class="col-12">
              <v-trade-history
              :trade-history="tradeHistory"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-footer-menu/>
  </div>
</template>

<script>

import VHeader from "../_general/v-header";
import VSubHeader from "../_general/v-sub-header";
import VTopCurrencyMenu from "../../_general/trade/v-top-currency-menu";
import VLeftCurrencySelectBar from "../../_general/trade/v-left-currency-select-bar";
import VInstantPrchase from "../../_general/trade/v-instant-prchase-switch-block";
import VChartSection from "../../_general/trade/trading-chart/v-trading-chart-section";
import VRightPricingInformacionLastDay from "../../_general/trade/v-right-pricing-informacion-last-day";
import VOrdersTable from "../../_general/trade/v-orders-table";
import VTradeHistory from "../../_general/trade/v-trade-history-table";
import VFooterMenu from "../../_general/v-footer-menu";
import VBarChart from "../../_general/bar-chart";
export default {
  name: "index",
  components: {
    VBarChart,
    VFooterMenu,
    VTradeHistory,
    VOrdersTable,
    VRightPricingInformacionLastDay,
    VChartSection, VInstantPrchase, VLeftCurrencySelectBar, VTopCurrencyMenu, VSubHeader, VHeader
  },
  data() {
    return {
      ordersTable: [
        {pricePerBCH: "6743448.00", amountBCH: "345000", totalUSD: "$ 1778"},
        {pricePerBCH: "2348.00", amountBCH: "658000", totalUSD: "$ 578"},
        {pricePerBCH: "3448.00", amountBCH: "560000", totalUSD: "$ 10078"},
        {pricePerBCH: "6743448.00", amountBCH: "345000", totalUSD: "$ 1778"},
        {pricePerBCH: "2348.00", amountBCH: "658000", totalUSD: "$ 578"},
        {pricePerBCH: "3448.00", amountBCH: "560000", totalUSD: "$ 10078"},
        {pricePerBCH: "6743448.00", amountBCH: "345000", totalUSD: "$ 1778"},
        {pricePerBCH: "2348.00", amountBCH: "658000", totalUSD: "$ 578"},
        {pricePerBCH: "3448.00", amountBCH: "560000", totalUSD: "$ 10078"},
        {pricePerBCH: "6743448.00", amountBCH: "345000", totalUSD: "$ 1778"},
        {pricePerBCH: "2348.00", amountBCH: "658000", totalUSD: "$ 578"},
        {pricePerBCH: "3448.00", amountBCH: "560000", totalUSD: "$ 10078"}
      ],
      tradeHistory: [
        {date: "18-09-2019", type: "Sell", amountBTC: "0.589001", price: "17200", total: "501"},
        {date: "18-09-2019", type: "Sell", amountBTC: "0.589001", price: "17200", total: "501"},
        {date: "18-09-2019", type: "Sell", amountBTC: "0.589001", price: "17200", total: "501"},
        {date: "18-09-2019", type: "Sell", amountBTC: "0.589001", price: "17200", total: "501"},
        {date: "18-09-2019", type: "Sell", amountBTC: "0.589001", price: "17200", total: "501"},
        {date: "18-09-2019", type: "Sell", amountBTC: "0.589001", price: "17200", total: "501"},
        {date: "18-09-2019", type: "Sell", amountBTC: "0.589001", price: "17200", total: "501"},
        {date: "18-09-2019", type: "Sell", amountBTC: "0.589001", price: "17200", total: "501"},
        {date: "18-09-2019", type: "Sell", amountBTC: "0.589001", price: "17200", total: "501"},
        {date: "18-09-2019", type: "Sell", amountBTC: "0.589001", price: "17200", total: "501"},
        {date: "18-09-2019", type: "Sell", amountBTC: "0.589001", price: "17200", total: "501"},
        {date: "18-09-2019", type: "Sell", amountBTC: "0.589001", price: "17200", total: "501"},
        {date: "18-09-2019", type: "Sell", amountBTC: "0.589001", price: "17200", total: "501"}
      ]
    }
  }
}

</script>

<style scoped>

</style>