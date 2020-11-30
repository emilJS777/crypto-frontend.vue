<template>
  <div class="img_info_section_2 row pt-5">
    <div class="col-6 img_section">
      <img src="https://static.cex.io/landings/media/1x-services-section-picture.png" alt="">
    </div>
    <div class="col-6 info_section">
      <div>
        <p class="text_big text_greey">
          CEX.IO was one of the first platforms to make fiat-to-crypto transactions accessible by offering card payments and bank transfers to the clients. We place a great effort into developing and maintaining robust relationships with dozens of reputable banks across the key markets.
        </p>
        <p class="text_big text_greey">
          Currently, we provide a rich variety of trading tools for Bitcoin, Bitcoin Cash, Ethereum, Ripple, Stellar, Litecoin, Tron, and other crypto assets. You can trade these cryptocurrencies for USD, EUR, GBP, and RUB.
        </p>
        <p class="text_big text_greey">
          We know that mobility matters, so we’ve enabled trading through a website, iOS and Android mobile apps, WebSocket, and REST API.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-img-info-section-2"
}
</script>

<style scoped>
  .img_info_section_2 > div{
  }
  .img_section{
    padding: 0;
  }
  .img_section > img{
    height: auto;
    width: 100%;
  }
  .info_section{
    display: flex;
    align-items: center;
    padding-left: 0;
  }
  .info_section > div{
    padding: 30px;
    background-color: #f7f8fa;
  }
</style>