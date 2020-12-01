<template>
  <div class="face_section">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h1 class="heading_darkBlue">Staking Get rewarded for simply holding coins and tokens in your account</h1>
          <p class="text_greey text_big">Staking allows you to receive rewards by just keeping coins and tokens in your account. By staking your coins, you let them work for you and increase your earnings while they’re sitting in your account.</p>
        </div>
        <div class="col-6">
          <img :src="require('@/assets/img/reting.png')" alt="">
        </div>
        <div class="col-12 bottom_section">
          <div class="row">
            <div class="col-3">
              <div class="">
                <p class="text_greey">Total staking assets</p>
                <h3 class="heading_darkBlue">$ 31,700,000</h3>
              </div>
            </div>
            <div class="col-3">
              <div class="">
                <p class="text_greey">Total reward paid</p>
                <h3 class="heading_darkBlue">$ 235,000</h3>
              </div>
            </div>
            <div class="col-3">
              <div class="">
                <p class="text_greey">Clients</p>
                <h3 class="heading_darkBlue">10900+</h3>
              </div>
            </div>
            <div class="col-3">
              <div class="">
                <p class="text_greey">Next reward</p>
                <h3 class="heading_darkBlue">02 December 2020</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-face-section"
}
</script>

<style scoped>
.face_section{
  margin-top: 30px;
  background-color: #f5f7fa;
  padding-top: 60px;
  padding-bottom: 60px;
}
.bottom_section{
  padding-top: 120px;
  text-align: center;
}



</style>