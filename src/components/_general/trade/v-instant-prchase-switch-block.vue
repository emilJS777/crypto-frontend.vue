<template>
  <div class="mt-5 mb-5">
    <div class="buttons_block">
      <button class="switch_btn"
              v-bind:class="tabElem === 0 ? 'switch_btn_active': ' ' "
              @click="nextTab(0)">Limit</button>
      <button class="switch_btn"
              v-bind:class="tabElem === 1 ? 'switch_btn_active': ' ' "
              @click="nextTab(1)">Trading</button>
    </div>
    <div class="content">
      <div id="limit" class="row switchBlock"
           v-if="tabElem === 0">
        <div class="col-6">
          <v-instant-purchase-form-block
              buyTitle="Buy BTC"
              balance="USD balance 0.00"
              total="0.00 USD"
              fee="0.00 0.00 USD"
          />
        </div>
        <div class="col-6">
          <v-instant-purchase-form-block
              buyTitle="Buy BTC"
              balance="USD balance 0.00"
              total="0.00 USD"
              fee="0.00 0.00 USD"
          />
        </div>
      </div>
      <div id="trading" class="row switchBlock"
           v-if="tabElem === 1">
        <div class="col-6">
          <v-instant-purchase-form-block
              buyTitle="Instant buy BTC"
              balance="USD balance 0.00"
          />
        </div>
        <div class="col-6">
          <v-instant-purchase-form-block
              buyTitle="Instant buy BTC"
              balance="USD balance 0.00"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {tabsFunction} from '../../_mixins/tabs';
import VInstantPurchaseFormBlock from "./v-instant-purchase-form-block";

export default {
  name: "v-instant-prchase",
  components: {VInstantPurchaseFormBlock},
  mixins: [tabsFunction]
}
</script>

<style scoped>
.col-auto{
  padding: 5px;
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
  color: #fff;
  font-weight: bold;
  background-color: #42a5a5;
}
button:focus{
  outline: 0;
}
.content {
  background-color: #eae9e9;
  padding: 5px;
  position: relative;
}
.content:before{
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("~@/assets/icons/exchange_money.png");
  background-repeat: no-repeat;
  background-position: center center;
  opacity: .1;
}
.switch_btn_active{
  background-color: #eae9e9;

  color: #222;
}


</style>