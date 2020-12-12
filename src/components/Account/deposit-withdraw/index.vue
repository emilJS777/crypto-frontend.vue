<template>
  <div id="deposit_withdraw" class="container-fluid">
    <v-close :to="'/account/trade'"/>
    <div class="row">
      <div class="col-8">
        <h5>Choose deposit payment method</h5>
        <div class="payment_methods">
          <v-deposit-payment-method imgLink="https://cex.io/img/cashin/cards.svg" name="Payment Card"/>
          <v-deposit-payment-method imgLink="https://cex.io/img/cashin/bank_ach.svg" name="International bank transfer"/>
          <v-deposit-payment-method imgLink="https://cex.io/img/cashin/swift.svg" name="Skrill"/>
          <v-deposit-payment-method imgLink="https://cex.io/img/cashin/skrill.svg" name="Domesting bank transfer"/>
        </div>
        <div class="to_started_verification_block pt-5">
           <v-to-started-verification/>
        </div>
      </div>
      <div class="col-4 select_currency">
            <v-select-currency/>
            <v-score name="Commision:" score="0.00"/>
            <v-score name="Total:" score="20.00"/>
            <v-score name="Available:" score="$ 0.00"/>
            <v-score name="In Orders:" score="$ 0.00"/>
      </div>
    </div>
  </div>
</template>

<script>

import VDepositPaymentMethod from "./v-deposit-payment-method";
import VToStartedVerification from "./v-to-started-verification";
import VSelectCurrency from "./v-select-currency";
import VScore from "./v-score";
import VClose from "../../_general/v-close";
export default {
name: "index",
  components: {VClose, VScore, VSelectCurrency, VToStartedVerification, VDepositPaymentMethod},
}
</script>

<style scoped>
  #deposit_withdraw{
    background-color: #f3f3f3 !important;
  }
  .row > div{
    padding: 50px 60px;
    min-height: 100vh;
  }
  .row > div > h5{
    font-style: italic;
    color: #0b364f;
  }
  .payment_methods{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1em;
    row-gap: 2em;
  }

  .select_currency{
    background-color: #42a5a5;
    padding: 50px 10px !important;
  }
</style>