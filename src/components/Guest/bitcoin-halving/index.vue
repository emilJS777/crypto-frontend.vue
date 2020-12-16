<template>
  <div id="bitcoin_halving">
    <v-header/>
    <v-face-section/>
    <div class="container pt-5">
      <h1 class="heading_darkBlue text-center">FAQ</h1>
      <v-toggle-select-section
          title="What is BTC halving?"
          description="Bitcoin halving is an event where the number of
      generated Bitcoin rewards per block decreases by 50%, or halves. The next bitcoin halving is expected in May 2020.
      At that time, the amount of BTC mined per block will decrease from 12.5 to 6.25. What are the possible effects of
      a Bitcoin halving?"
      :li="['For a trader, halving can bring BTC price changes.','For a miner, halving means a 50% lower mining reward.']"
      />
      <v-toggle-select-section
          title="What is BTC halving?"
          description="Bitcoin halving is an event where the number of
      generated Bitcoin rewards per block decreases by 50%, or halves. The next bitcoin halving is expected in May 2020.
      At that time, the amount of BTC mined per block will decrease from 12.5 to 6.25. What are the possible effects of
      a Bitcoin halving?"
          :li="['For a trader, halving can bring BTC price changes.','For a miner, halving means a 50% lower mining reward.']"
      />
      <v-toggle-select-section
          title="What is BTC halving?"
          description="Bitcoin halving is an event where the number of
                        generated Bitcoin rewards per block decreases by 50%, or halves. The next bitcoin halving is expected in May 2020.
                        At that time, the amount of BTC mined per block will decrease from 12.5 to 6.25. What are the possible effects of
                        a Bitcoin halving?"
          :li="['For a trader, halving can bring BTC price changes.','For a miner, halving means a 50% lower mining reward.']"
      />
    </div>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VFaceSection from "./v-face-section";
import VFooterMenu from "../../_general/v-footer-menu";
import VToggleSelectSection from "../_general/v-toggle-select-section";
export default {
name: "index",
  components: {VToggleSelectSection, VFooterMenu, VFaceSection, VHeader}
}
</script>

<style scoped>

</style>