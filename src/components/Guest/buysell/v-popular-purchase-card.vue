<template>
  <div class="popular_purchase_card box_shadow">
    <div class="cost">
      <h1>{{ '$ ' + price }}</h1>
    </div>
    <div class="get">
      <div>
        <p>Get</p>
        <p>0.0116</p>
        <p>BTC</p>
      </div>
    </div>
    <a href="#" class="btn btn_blue">Buy</a>
  </div>
</template>

<script>
export default {
  props: ["price"],
  name: "v-popular-purchase-card"
}
</script>

<style scoped>

  .popular_purchase_card > .cost > h1{
    text-align: center;
  }

  .popular_purchase_card{
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transition: .3s;
  }
  .popular_purchase_card > .cost{
    background-color: #42a5a5;
    padding: 10px;
    border-bottom: 1px solid#ced4da;
  }
  .popular_purchase_card > .cost > h1{
    color: #fff;
    font-weight: bold;
    font-size: 50px;
  }
  .popular_purchase_card > .get{
    height: 250px;
    position: relative;
  }
  .popular_purchase_card > .get > div{
    width: 150px;
    height: 150px;
    position: absolute;
    left: 50%;
    right: 50%;
    top: 50%;
    bottom: 50%;
    transform: translate(-50%,-50%);
    padding: 15px;
    border-radius: 50%;
    border: 2px solid#42a5a5;
  }
  .popular_purchase_card > .get > div > p{
    text-align: center;
    line-height: 0.9;
    font-size: 30px;
    font-weight: bold;
  }
  .popular_purchase_card > .get > div > p:first-child{
    font-weight: initial;
    font-size: 20px;
  }
  .popular_purchase_card > a{
    width: 90%;
    display: block;
    text-align: center;
    margin: 10px auto;
    padding: 10px;
    font-weight: bold;
    border: 1px solid#42a5a5;
  }
  .popular_purchase_card:hover{
    background: #42a5a5;
  }
  .popular_purchase_card:hover > .get > div{
    border: solid#fff;
    color: #fff;
  }
  .popular_purchase_card:hover > a{
    border: 1px solid #fff;
  }
</style>