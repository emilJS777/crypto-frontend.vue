<template>
  <div class="mt-5 mb-5">
    <div class="buttons_block">
      <button class="switch_btn"
              v-bind:class="switchElem === 0 ? 'switch_btn_active': ' ' "
              @click="show(0)">Limit</button>
      <button class="switch_btn"
              v-bind:class="switchElem === 1 ? 'switch_btn_active': ' ' "
              @click="show(1)">Trading</button>
    </div>
    <div class="content">
      <div id="limit" class="row switchBlock"
           v-if="switchElem === 0">
        <div class="col-6">
          <div class="form_block">
            <h5 class="heading_darkBlue">Buy BTC: <span class="text_greey">USD balance 0.00</span></h5>
            <form action="">
              <div class="col-auto">
                <span class="text_greey">Amount to Buy</span>
                <div class="input-group ">
                  <div class="input-group-prepend">
                    <div class="input-group-text">BTC</div>
                  </div>
                  <input type="number" class="" id="" placeholder="0.000">
                </div>
              </div>
              <div class="col-auto">
                <span class="text_greey">Price per BTC</span>
                <div class="input-group ">
                  <div class="input-group-prepend">
                    <div class="input-group-text">USD</div>
                  </div>
                  <input type="number" class="" id="" placeholder="0.000">
                </div>
              </div>
              <button class="btn btn_blue mt-3">Price order</button>
            </form>
            <p>Total 0.00 USD <span>(Fee 0.00 0.00 USD)</span></p>
          </div>
        </div>
        <div class="col-6">
          <div class="form_block">
            <h5 class="heading_darkBlue">Sell BTC: <span class="text_greey">BTC balance: 0.00000000</span></h5>
            <form action="">
              <div class="col-auto">
                <span class="text_greey">Amount to Buy</span>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">BTC</div>
                  </div>
                  <input type="number" class="" id="" placeholder="0.000">
                </div>
              </div>
              <div class="col-auto">
                <span class="text_greey">Price per BTC</span>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">USD</div>
                  </div>
                  <input type="number" class="" id="" placeholder="0.000">
                </div>
              </div>
              <button class="btn btn_blue mt-3">Price order</button>
            </form>
            <p>Total 0.00 USD <span>(Fee 0.00 0.00 USD)</span></p>
          </div>
        </div>
      </div>
      <div id="trading" class="row switchBlock"
           v-if="switchElem === 1">
        <div class="col-6">
          <div class="form_block">
            <h5 class="heading_darkBlue">Instant buy BTC: <span class="text_greey">USD balance 0.00</span></h5>
            <form action="">
              <div class="col-auto">
                <span class="text_greey">USD to Spend</span>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">BTC</div>
                  </div>
                  <input type="number" class="" id="" placeholder="0.000">
                </div>
              </div>
              <div class="col-auto">
                <span class="text_greey">Estimated BTC amount: *</span>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">USD</div>
                  </div>
                  <input type="number" class="" id="" placeholder="0.000">
                </div>
              </div>
              <button class="btn btn_blue mt-3">Price order</button>
            </form>
            <p>* The estimated BTC amount is calculated from the lowest price offered to a higher price until all USD is spent</p>
          </div>
        </div>
        <div class="col-6">
          <div class="form_block">
            <h5 class="heading_darkBlue">Instant buy BTC: <span class="text_greey">USD balance 0.00</span></h5>
            <form action="">
              <div class="col-auto">
                <span class="text_greey">BTC to Sell</span>
                <div class="input-group ">
                  <div class="input-group-prepend">
                    <div class="input-group-text">BTC</div>
                  </div>
                  <input type="number"  placeholder="0.000">
                </div>
              </div>
              <div class="col-auto">
                <span class="text_greey">Estimated USD amount: *</span>
                <div class="input-group ">
                  <div class="input-group-prepend">
                    <div class="input-group-text">USD</div>
                  </div>
                  <input type="number" class="" id="" placeholder="0.000">
                </div>
              </div>
              <button class="btn btn_blue mt-3">Price order</button>
            </form>
            <p>* The estimated BTC amount is calculated from the lowest price offered to a higher price until all USD is spent</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {switchFunction} from "@/components/_mixins/switch";
export default {
  name: "v-instant-prchase",
  mixins: [switchFunction]
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
  background-color: #f1f0f0;

  color: #222;
}

.form_block{
  background-color: #fff;
  width: 90%;
  display: table;
  margin: 15px auto;
  border-radius: 5px;
  padding: 10px;
  height: 90%;
}
.form_block > h5{
  height: 30px;
  border-bottom: 1px solid #eae9e9;
}
.form_block > h5 > *{
  display: inline-block;
}
.form_block > h5 > span{
  float: right;
  font-size: 12px;
  line-height: 2;
}
input{
  border: 1px solid #e3e0e0;
  padding: 5px;
}
input:focus{
  outline: 0;
}
.form_block span{
  font-size: 12px;
  font-weight: bold;
}
.form_block button{
  text-align: center;
  display: block;
  margin: 0 auto;
}
.form_block p{
  font-size: 10px;
  margin: 0;
  margin-top: 10px;
  font-weight: bold;
  line-height: 1;
  color: #acaaaa;
}
.form_block p > span{
  text-align: right;
  float: right;
  font-size: inherit;
  line-height: inherit;
  color: #033d6b;
}
</style>