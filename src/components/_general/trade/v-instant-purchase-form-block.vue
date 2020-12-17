<template>
  <div class="form_block">
    <h5 class="heading_darkBlue">{{ buyTitle }}: <span class="text_greey">{{ balance }}</span></h5>
    <form action="">
      <div class="col-auto">
        <span class="text_greey">Amount to Buy</span>
        <div class="input-group ">
          <div class="input-group-prepend">
            <div class="input-group-text">BTC</div>
          </div>
          <input type="number"  placeholder="0.000">
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
    <p>Total {{ total }} <span>(Fee {{ fee }})</span></p>
  </div>
</template>

<script>
export default {
name: "v-instant-purchase-form-block",
  props:['buyTitle','balance', 'total','fee']
}
</script>

<style scoped>
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
.input-group{
  display: grid;
  grid-template-columns: 1fr 6fr;
}
input{
  border: 1px solid #e3e0e0;
  padding: 5px;
  width: 80%;
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