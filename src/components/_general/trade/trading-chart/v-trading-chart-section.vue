<template>
  <div class="trading_chart">
    <trading-vue
        :data="this.$data"
        title-txt="USD/BTC"
        :width="width"
        :color-back="colors.colorBack"
        :color-grid="colors.colorGrid" :color-text="colors.colorText"
    />
  </div>
</template>

<script>

import TradingVue from 'trading-vue-js'

export default {
  name: "v-chart-section",
  components:{
    TradingVue
  },
  data() {
    return {
      ohlcv: [
        [ 1551128400000, 33,  37.1, 14,  14,  196 ], // [timestamp, open, high, low, close, volume],
        [ 1551132000000, 13.7, 30, 6.6,  30,  206 ],
        [ 1551135600000, 29.9, 33, 21.3, 21.8, 74 ],
        [ 1551139200000, 21.7, 25.9, 18, 24,  140 ],
        [ 1551142800000, 24.1, 24.1, 24, 24.1, 29 ]
      ],
      width: 980,
      height: window.innerHeight,
      colors: {
        colorBack: '#fff',
        colorGrid: '#eee',
        colorText: '#222',
      }
    }
  }
}
</script>

<style scoped>

</style>