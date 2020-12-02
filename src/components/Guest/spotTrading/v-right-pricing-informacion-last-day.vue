<template>
  <div class="row">
    <div class="col-2 heading_exchanger">
      <h2>BTC/USD</h2>
    </div>
    <div class="col-10 infos_block">
      <div class="info_block">
        <span class="text_greey text_small">Last price:</span>
        <p>$ 1033.5</p>
      </div>
      <div class="info_block">
        <span class="text_greey text_small">Daily change:</span>
        <p><i class="cf cf-ltc"></i> 17794.5</p>
      </div>
      <div class="info_block">
        <span class="text_greey text_small">Today's open:</span>
        <p><i class="cf cf-eth"></i> 16761.0</p>
      </div>
      <div class="info_block">
        <span class="text_greey text_small">24h volume:</span>
        <p><i class="cf cf-btc"></i> 451.16242817</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-right-pricing-informacion-last-day"
}
</script>

<style scoped>
  h2{
    color: #c7c7c7;
    font-size: 40px;
    font-style: italic;
  }
  .infos_block{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  .info_block {
  text-align: right;
    line-height: 1.2;
    font-style: italic;
  }
  .info_block > span{}
  .info_block > p{
    font-weight: bold;
    color: #6d767f;
    font-size: 16px;
  }
</style>