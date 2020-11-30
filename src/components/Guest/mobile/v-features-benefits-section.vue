<template>
  <div class="container mt-5 pt-5 pb-5">
    <h1 class="heading_darkBlue">Features and benefits</h1>
    <div class="row pt-5">
      <div class="col-4 mt-5">
        <img :src="require('@/assets/icons/iconfinder_11_-_Valid_1815560.png')" alt="">
        <h4 class="heading_darkBlue">Price alerts</h4>
        <p class="text_greey text_big">Make informed and timely decisions. Set a price alert and you’ll receive a notification when the market reaches the specified price.</p>
      </div>
      <div class="col-4 mt-5">
        <img :src="require('@/assets/icons/iconfinder_11_-_Valid_1815560.png')" alt="">
        <h4 class="heading_darkBlue">Order notifications</h4>
        <p class="text_greey text_big">Make informed and timely decisions. Set a price alert and you’ll receive a notification when the market reaches the specified price.</p>
      </div>
      <div class="col-4 mt-5">
        <img :src="require('@/assets/icons/iconfinder_11_-_Valid_1815560.png')" alt="">
        <h4 class="heading_darkBlue">Money management</h4>
        <p class="text_greey text_big">Make informed and timely decisions. Set a price alert and you’ll receive a notification when the market reaches the specified price.</p>
      </div>
      <div class="col-4 mt-5">
        <img :src="require('@/assets/icons/iconfinder_11_-_Valid_1815560.png')" alt="">
        <h4 class="heading_darkBlue">Security</h4>
        <p class="text_greey text_big">Make informed and timely decisions. Set a price alert and you’ll receive a notification when the market reaches the specified price.</p>
      </div>
      <div class="col-4 mt-5">
        <img :src="require('@/assets/icons/iconfinder_11_-_Valid_1815560.png')" alt="">
        <h4 class="heading_darkBlue">Support 24/7</h4>
        <p class="text_greey text_big">Make informed and timely decisions. Set a price alert and you’ll receive a notification when the market reaches the specified price.</p>
      </div>
      <div class="col-4 mt-5">
       <div class="and_more">
         <p class="text_greey">And more great stuff coming soon</p>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-features-benefits-section"
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .and_more{
    width: 100%;
    height: 100%;
    border: 2px solid #eaeaea;
    display: flex;
    align-items: center;
    height: 250px;
    padding: 30px;
    text-align: center;
  }
  .and_more > p{
    display: block;
    margin: 0 auto;
    font-size: 25px;
  }
  img{
    width: 30px;
    height: 30px;
  }
</style>