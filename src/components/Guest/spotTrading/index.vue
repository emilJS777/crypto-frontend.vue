<template>
  <div id="spot_trading">

    <v-upper-currency-layer/>

    <v-header-min/>

    <v-top-currency-menu/>

    <div class="container-fluid mt-5">

      <div class="row">

        <div class="col-3">
          <v-left-currency-select-bar/>
        </div>

        <div class="col-9">
          <v-right-pricing-informacion-last-day/>
          <v-trading-chart-section/>
          <v-instant-prchase/>

          <div class="row mb-3">
            <div class="col-6">
              <v-orders-table
                :ordersTable="ordersTable"/>
            </div>
            <div class="col-6">
              <v-orders-table
                :ordersTable="ordersTable"/>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <v-trade-history-table
                :tradeHistory="tradeHistory"/>
            </div>
          </div>
        </div>

      </div>
      <div class="row mt-5 mb-2">
        <v-bottom-description/>
        <v-sign-up/>
      </div>
    </div>
<!--    footer menu-->
    <v-footer-menu/>
<!--    modal window-->
    <v-modal-window/>
  </div>
</template>

<script>
// <!--  connecteds-->
import VUpperCurrencyLayer from "../../_general/v-upper-currency-layer";
import VHeaderMin from "../_general/v-header-min";
import VTopCurrencyMenu from "./v-top-currency-menu";
import VLeftCurrencySelectBar from "./v-left-currency-select-bar";
import VRightPricingInformacionLastDay from "./v-right-pricing-informacion-last-day";
import VTradingChartSection from "./trading-chart/v-trading-chart-section";
import VInstantPrchase from "./v-instant-prchase-switch-block";
import VOrdersTable from "@/components/Guest/spotTrading/v-orders-table";
import VTradeHistoryTable from "@/components/Guest/spotTrading/v-trade-history-table";
import VBottomDescription from "@/components/Guest/spotTrading/v-bottom-description";
import VFooterMenu from "@/components/_general/v-footer-menu";
import VSignUp from "@/components/Guest/spotTrading/v-sign-up";
import VModalWindow from "@/components/Guest/spotTrading/v-modal-window";
export default {
  name: "index",
  data(){
    return{
      ordersTable:[
        {pricePerBCH: "6743448.00", amountBCH: "345000",totalUSD: "$ 1778"},
        {pricePerBCH: "2348.00", amountBCH: "658000",totalUSD: "$ 578"},
        {pricePerBCH: "3448.00", amountBCH: "560000",totalUSD: "$ 10078"},
        {pricePerBCH: "6743448.00", amountBCH: "345000",totalUSD: "$ 1778"},
        {pricePerBCH: "2348.00", amountBCH: "658000",totalUSD: "$ 578"},
        {pricePerBCH: "3448.00", amountBCH: "560000",totalUSD: "$ 10078"},
        {pricePerBCH: "6743448.00", amountBCH: "345000",totalUSD: "$ 1778"},
        {pricePerBCH: "2348.00", amountBCH: "658000",totalUSD: "$ 578"},
        {pricePerBCH: "3448.00", amountBCH: "560000",totalUSD: "$ 10078"},
        {pricePerBCH: "6743448.00", amountBCH: "345000",totalUSD: "$ 1778"},
        {pricePerBCH: "2348.00", amountBCH: "658000",totalUSD: "$ 578"},
        {pricePerBCH: "3448.00", amountBCH: "560000",totalUSD: "$ 10078"}
      ],
      tradeHistory:[
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
  },
  components:{
    VModalWindow,
    VSignUp,
    VFooterMenu,
    VBottomDescription,
    VOrdersTable,
    VInstantPrchase,
    VTradingChartSection,
    VRightPricingInformacionLastDay,
    VLeftCurrencySelectBar,
    VTopCurrencyMenu,
    VUpperCurrencyLayer,
    VHeaderMin,
    VTradeHistoryTable
  }
}
</script>

<style scoped>

</style>