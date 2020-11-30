<template>
  <div class="container mt-5 pt-5 pb-5">
      <h1 class="heading_darkBlue">What’s in it for you?</h1>
    <div class="row mt-5">
      <div class="col-4">
        <div class="icon_block">
          <img :src="require('@/assets/icons/iconfinder_11_-_Valid_1815560.png')" alt="">
        </div>
        <h3>All-in-one app</h3>
        <div class="description">
          <p class="text_greey text_big">
            The CEX.IO mobile app features all the functionality of the CEX.IO platform to satisfy the needs of every trader. No web version required.
          </p>
        </div>
      </div>
      <div class="col-4">
        <div class="icon_block">
          <img :src="require('@/assets/icons/iconfinder_11_-_Valid_1815560.png')" alt="">
        </div>
        <h3>Trade functionality</h3>
        <div class="description">
          <p class="text_greey text_big">
            Advanced order matching algorithms, a high-liquidity order book, analytical tools for experienced traders, and a simple Instant Buy/Sell interface for those just getting started.
          </p>
        </div>
      </div>
      <div class="col-4">
        <div class="icon_block">
          <img :src="require('@/assets/icons/iconfinder_11_-_Valid_1815560.png')" alt="">
        </div>
        <h3>Multi-currency</h3>
        <div class="description">
          <p class="text_greey text_big">
            Support for leading crypto protocols and cryptocurrencies. You’ll find all the top pairs, and the list is constantly growing.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-faq-section"
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .icon_block{
    padding: 10px;
  }
  .icon_block > img{
    width: 30px;
    height: 30px;
  }
  h3{
    font-weight: bold;
    color: #0b364f;
  }
</style>