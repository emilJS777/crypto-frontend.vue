<template>
  <div class="limits_commissions pt-5 pb-2">
    <div class="container mt-5">
      <h1 class="heading_darkBlue">Limits and Commissions</h1>
      <div class="row">
        <div class="mt-5 mb-5 col-12">
          <div class="buttons_block">
            <button class="switch_btn"
                    v-bind:class="switchElem === 0 ? 'switch_btn_active': ' ' "
                    @click="show(0)">Payment Methods</button>

            <button class="switch_btn"
                    v-bind:class="switchElem === 1 ? 'switch_btn_active': ' ' "
                    @click="show(1)">Cryptocurrencies</button>
          </div>
          <div class="content">
            <div class="switchBlock"
            v-if="switchElem === 0">
              <div class="">
                <div class="col-12 table mt-5">
                  <div class="row table_head">
                    <div class="col-2"><span>Payment methods</span></div>
                    <div class="col-3"><span>Daily deposit (Min-Max)</span></div>
                    <div class="col-3"><span>Daily withdrawal (Min-Max)</span></div>
                    <div class="col-2"><span>Deposit commissions</span></div>
                    <div class="col-2"><span>Withdrawal commissions</span></div>
                  </div>
                  <div class="row table_body"
                  v-for="(tb, index) in payments" :key="index">
                    <div class="col-2">
                      <img :src="require('@/assets/img/Visa.png')" alt="">
                      <p>{{ tb.paymentsMethod }}</p>
                    </div>
                    <div class="col-3">
                      <p>{{ tb.DayliDepositMinMAx }}</p>
                    </div>
                    <div class="col-3">
                      <p>{{ tb.DayliWithdrawalMinMax }}</p>
                    </div>
                    <div class="col-2">
                      <p class="plus">{{ tb.DepositCommissions }}</p>
                    </div>
                    <div class="col-2">
                      <p>{{ tb.withDrawalCommissions }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="description_block">
                <div class="mb-5">
                  <span class="text_greey text_small">1 - New customers (under 3 months from the identity verification) have a maximum daily limit of $1,000 and a maximum monthly limit of $3,000.</span>
                  <span class="text_greey text_small">2 - Requires Address verification at least.</span>
                  <span class="text_greey text_small">3 - Requires Identity verification at least.</span>
                  <span class="text_greey text_small">4 - Lowered fees only apply for GBP deposits made with the UK-issued cards.</span>
                </div>
                <div class="mb-3">
                  <h6 class="text_greey">CARD DEPOSITS</h6>
                  <span  class="text_greey text_small">
                    Countries where card payments aren’t available: Afghanistan, Algeria, Bangladesh, Bolivia, Bosnia and Herzegovina, Burundi, Cambodia, Central African Republic, China, Cuba, Democratic People's Republic of Korea (DPRK), Democratic Republic of the Congo, Ethiopia, Guam, Guinea Bissau, Guyana, Iran, Iraq, Japan, Lao People's Democratic Republic, Lebanon, Libya, Mali, Morocco, Nepal, Pakistan, Puerto Rico, Somalia, South Sudan, Sri Lanka, Sudan, Syria, Trinidad and Tobago, Tunisia, Uganda, United States Virgin Islands, Vanuatu, Venezuela, Yemen, Zimbabwe.
                    Deposit payment processing time - instant. Only 3 daily successful transactions per account are allowed for all countries except those where card payments are not available. Deposits via payment cards are acceptable in any fiat currencies. In case your local currency is different from USD, EUR, GBP or RUB, it will be automatically converted into the selected deposit currency. The exchange rate and any fees associated with the transaction are calculated and deducted by your card issuer.
                  </span>
                </div>
              </div>
            </div>
            <div  class="switchBlock hidden"
            v-else-if="switchElem === 1">
              <div class="">
                <div class="col-12 table mt-5">
                  <div class="row table_head">
                    <div class="col-3"><span>Currency</span></div>
                    <div class="col-3"><span>Minimum deposit</span></div>
                    <div class="col-3"><span>Minimum withdrawal</span></div>
                    <div class="col-3"><span>Withdrawal fee (floating)</span></div>
                  </div>
                  <div class="row table_body"
                  v-for="(tb, index) in cryptocurrencies" :key="index">
                    <div class="col-3">
                      <i class="cf cf-btc"></i>
                      <p>{{ tb.currency }}</p>
                    </div>
                    <div class="col-3">
                      <p>{{ tb.minimumDeposit }}</p>
                    </div>
                    <div class="col-3">
                      <p>{{ tb.minimumWithDrawal }}</p>
                    </div>
                    <div class="col-3">
                      <p>{{ tb.withdrawal }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {switchFunction} from "@/components/_mixins/switch";

export default {
  name: "v-limits-and-commissions",
  data(){
    return{
      payments:[
        {paymentsMethod: "Visa", DayliDepositMinMAx: "$20.00 — Unlimited", DayliWithdrawalMinMax: "$20.00 — $50,000.00", DepositCommissions: "1.39%", withDrawalCommissions: "Service charge: up to 3% + $1.20 Commission: up to $3.80"},
        {paymentsMethod: "Visa", DayliDepositMinMAx: "$20.00 — Unlimited", DayliWithdrawalMinMax: "$20.00 — $50,000.00", DepositCommissions: "1.39%", withDrawalCommissions: "Service charge: up to 3% + $1.20 Commission: up to $3.80"}
      ],
      cryptocurrencies:[
        {currency: "Bitcoin (BTC)", minimumDeposit: "0.001", minimumWithDrawal: "0.002", withdrawal: "0.005"},
        {currency: "Bitcoin (BTC)", minimumDeposit: "0.001", minimumWithDrawal: "0.002", withdrawal: "0.005"},
        {currency: "Bitcoin (BTC)", minimumDeposit: "0.001", minimumWithDrawal: "0.002", withdrawal: "0.005"}
      ]
    }
  },
  mixins:[switchFunction]
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .buttons_block{
    display: table;
    margin: 0 auto;
  }
  button{
    display: inline-block;
    width: 150px;
    margin: 0 auto;
    border: 0;
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
    color: #0b364f;
    font-weight: bold;
    background-color: initial;
    border-bottom: 2px solid #fff;
  }
  button:focus{
    outline: 0;
  }
  .content {
    padding: 5px;
    position: relative;
  }

  .switch_btn_active{
    border-bottom: 2px solid #3da78d;
    color: #3da78d;
  }

  .table{
    text-align: left;
  }
  .table > div{
    border-bottom: 1px solid #e5e3e3;
  }
  .table_head > div{
    color: #919494;
    padding-bottom: 15px;
  }
  .table_head > div:first-child{
    text-align: left;
  }
  .table_head > div:last-child{
    text-align: center;
  }
  .table_body > div{
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
  }
  .table_body > div:first-child{
    text-align: center;
  }
  .table_body > div:last-child{
    text-align: center;
  }
  .table_body > div > img{
    width: 25px;
    height: auto;
    margin-right: 10px;
  }
  .table_body > div > i{
    margin-right: 15px;
  }
  .table_body > div > *{
    display: inline-block;
  }
  .table_body > div > p{
    line-height: 1.5;
    vertical-align: center;
    margin: 0;
    font-size: 16px;
    transition: .2s;
    color: #727b80;
  }
  .table_body > div:first-child > p{
    font-weight: bold;
  }
  .table_body > div:last-child > p{
    margin: 0 auto;
  }
  .table_body > div > p:hover{
    color: #42a5a5;
  }
  .table_body > div > p.minus{
    color: #fa2121;
  }
  .table_body > div > p.plus{
    color: #02795d;
  }
  .description_block span{
    display: block;
  }
  .read_more{
    color: #fff;
    font-size: 12px;
  }
</style>