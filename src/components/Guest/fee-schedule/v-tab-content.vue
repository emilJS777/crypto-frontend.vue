<template>
<div class="container">
    <div class="mt-5 mb-5 row">
      <div class="buttons_block col-12">
        <button class="switch_btn"
                v-bind:class="tabElem === 0 ? 'switch_btn_active': ' ' "
                @click="nextTab(0)">Transaction Fees</button>
        <button class="switch_btn"
                v-bind:class="tabElem === 1 ? 'switch_btn_active': ' ' "
                @click="nextTab(1)">Deposit/Withdrawal Fees</button>
      </div>
      <div class="content col-12">
        <div class="row switchBlock"
             v-if="tabElem === 0">
          <v-transaction-fees/>
        </div>
        <div class="row switchBlock"
             v-if="tabElem === 1">
          <v-deposit-fees/>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import VDepositFees from "@/components/Guest/fee-schedule/v-deposit-fees";
import VTransactionFees from "@/components/Guest/fee-schedule/v-transaction-fees";
import {tabsFunction} from '../../_mixins/tabs';


export default {
name: "v-content",
  components: {VTransactionFees, VDepositFees},
  mixins: [tabsFunction]
}
</script>

<style scoped>
  .buttons_block{
    border-bottom: 1px solid #dee7e7;
    padding-bottom: 0px;
    padding-left: 0;
  }
  button{
    display: inline-block;
    width: 220px;
    margin: 0 auto;
    border: 0;
    margin-left: 0px;
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
  .switch_btn_active{
    border-bottom: 2px solid #3da78d;
    color: #3da78d;
  }
  .content{
    padding-top: 30px;
  }
</style>