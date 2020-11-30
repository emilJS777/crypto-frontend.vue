<template>
  <div class="deposit_tab col-12 table mt-5">
      <div class="row table_head">
        <div class="col-3"><span>Currency</span></div>
        <div class="col-3"><span>Payment method	</span></div>
        <div class="col-2"><span>Deposit</span></div>
        <div class="col-2"><span>Withdrawal</span></div>
        <div class="col-2"><span>Commission</span></div>
      </div>
      <div class="row table_body">
        <div class="col-3">
          <p><span>&#36;</span>	USD</p>
        </div>
        <div class="col-3">
          <p>visa</p>
          <p>mastercard</p>
          <p>skrill</p>
          <p>Bak Transfer</p>
          <p>ACH</p>
        </div>
        <div class="col-2">
          <p>2.99%</p>
          <p>2.99%</p>
          <p>2.99%</p>
          <p>0.00%</p>
          <p>0.00%</p>
        </div>
        <div class="col-2">
          <p>up to 1.8% + $ 1.20</p>
          <p>1%</p>
          <p>up to 1.8% + 1.20%</p>
          <p>0.3% + 25.0%</p>
          <p>1%</p>
        </div>
        <div class="col-2">
          <p>up to $ 3.80</p>
          <p>up to 1.2% + $ 3.80</p>
        </div>
      </div>
    <div class="row table_body">
      <div class="col-3">
        <p><span>&euro;	</span>	EURO</p>
      </div>
      <div class="col-3">
        <p>visa</p>
        <p>mastercard</p>
        <p>skrill</p>
        <p>Bak Transfer</p>
        <p>ACH</p>
      </div>
      <div class="col-2">
        <p>2.99%</p>
        <p>2.99%</p>
        <p>2.99%</p>
        <p>0.00%</p>
        <p>0.00%</p>
      </div>
      <div class="col-2">
        <p>up to 1.8% + $ 1.20</p>
        <p>1%</p>
        <p>up to 1.8% + 1.20%</p>
        <p>0.3% + 25.0%</p>
        <p>1%</p>
      </div>
      <div class="col-2">
        <p>up to $ 3.80</p>
        <p>up to 1.2% + $ 3.80</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-deposit-fees"
}
</script>

<style scoped>
.table{
  text-align: left;
}
.table > div{
  border-bottom: 1px solid #e5e3e3;
}
.table_head > div{

  padding-bottom: 15px;
  font-weight: bold;
}
.table_head > div:first-child{
  text-align: center;
}
.table_head > div:last-child{
  text-align: left;
}
.table_body > div{
  padding-top: 10px;
  padding-bottom: 10px;
}
.table_body > div:first-child{
  text-align: center;
  display: flex;
  align-items: center;
}
.table_body > div:first-child > p{
  margin: 0 auto;
  font-weight: bold;
}
.table_body > div:last-child{
  text-align: left;
}
.table_body > div >p > img{
  width: 26px;
  height: 26px;
  margin-right: 10px;
  display: block;
  margin: 0 auto;
}
.table_body > div > *{
  display: inline-block;
}
.table_body > div > p{
  line-height: 2.4;
  vertical-align: center;
  margin: 0;
  font-size: 15px;
  transition: .2s;
  display: block;
  color: #5a5858;
  border-bottom: 1px dashed #eeeded;
}
.table_body > div > p:last-child{
  border-bottom: 0;
}
.table_body > div > div > span{
  font-size: 10px;
  color: #9c9f9f;
}
.table_body > div >  p span{
  font-size: 10px;
  margin: 0;
  color: #9c9f9f;
}
.table_body > div:nth-child(2){
  font-weight: bold;
}
.table_body > div:first-child > p{
  color: #95bcbc;
  font-size: 30px;
}
.table_body > div:first-child > p > span{
  display: block;
  font-size: 40px;
  color: #95bcbc;
  line-height: .3;
}

</style>