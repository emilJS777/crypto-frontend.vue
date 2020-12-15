<template>
  <div class="different_purchase_card box_shadow">
    <div class="cost">
      <h1>Your Amount</h1>
    </div>
    <div class="get">
      <div>
        <input type="number" placeholder="USD" class="form-control">
        <span>min: 20 max: 10000</span>
      </div>
      <div>
        <input type="number" placeholder="BTC" class="form-control">
        <span>min: 0.00018</span>
      </div>
    </div>
    <router-link to="/account/cards" class="btn btn_blue">Buy</router-link>
  </div>
</template>

<script>
export default {
name: "v-different-purchase-card"
}
</script>

<style scoped>
.different_purchase_card > .cost > h1{
  text-align: center;
}

.different_purchase_card{
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: .3s;

}
.different_purchase_card > .cost{
  background-color: #42a5a5;
  padding: 10px;
  border-bottom: 1px solid#ced4da;
}
.different_purchase_card > .cost > h1{
  color: #fff;
  font-weight: bold;
  font-size: 35px;
}
.different_purchase_card > .get{
  height: 250px;
  position: relative;
}
.different_purchase_card > .get > div{
  width: 80%;
  display: block;
  margin: 20px auto;
}
.different_purchase_card > .get > div > span{
  font-size: 12px;
  color: darkred;
}
.different_purchase_card > .get > div > input{

  height: 50px;
  padding: 5px;
  border:1px solid#acaaaa;
  font-size: 25px;
}

.different_purchase_card > a{
  width: 90%;
  display: block;
  text-align: center;
  margin: 10px auto;
  padding: 10px;
  font-weight: bold;
  border: 1px solid#42a5a5;
}



</style>