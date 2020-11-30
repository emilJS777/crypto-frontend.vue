<template>
  <div class="recommendations_rewards mt-5 pt-5 pb-5 mb-5">
      <div class="pay">
        <h1 class="heading_lightBlue">$2,000,000</h1>
        <p class="text_big text_greey">Paid to our affiliate partners</p>
      </div>
      <div class="container mt-5 recommend">
        <h1 class="heading_darkBlue">Recommend CEX.IO. Get Rewarded.</h1>
        <p class="text_big text_greey">Start making money in three simple steps.</p>
        <div class="row mt-5">
          <div class="col-4">
            <img :src="require('@/assets/icons/iconfinder_interface_1934114.png')" alt="">
            <h3 class="heading_darkBlue">Join</h3>
            <p class="text_big text_greey">
              thousands of our affiliate partners who are already earning with the CEX.IO Affiliate Program. Get your unique affiliate link for free.
            </p>
          </div>
          <div class="col-4">
            <img :src="require('@/assets/icons/iconfinder_Audio_1891017.png')" alt="">
            <h3 class="heading_darkBlue">Promote</h3>
            <p class="text_big text_greey">
              CEX.IO to your audience and invite them to join the platform with your affiliate link.
            </p>
          </div>
          <div class="col-4">
            <img :src="require('@/assets/icons/iconfinder_MONEY_2-05_2812111.png')" alt="">
            <h3 class="heading_darkBlue">Earn</h3>
            <p class="text_big text_greey">
              30% in affiliate fees instantly for qualifying trades and purchases. Our competitive conversion rates help you maximize earnings.
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
name: "v-recommendations-and-rewards"
}
</script>

<style scoped>
  .pay{
    width: 400px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 1px solid#ccc;
  }
  .pay > h1{
    font-size: 60px;
  }
  .recommend{
    text-align: center;
  }
  img{
    width: 60px;
    height: auto;
    margin-bottom: 10px;
  }
</style>