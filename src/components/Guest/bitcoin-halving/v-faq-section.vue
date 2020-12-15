<template>
  <div class="faq_section container mt-5">
    <h4 class="heading_lightBlue"
        @click="show" v-bind:class="switchElem ? 'open' : ''">
      What is BTC halving?
    </h4>
    <div class="info"
         v-if="switchElem">

      <p class="text_greey text_big">
        Bitcoin halving is an event where the number of generated Bitcoin rewards per block decreases by 50%, or halves. The next bitcoin halving is expected in May 2020. At that time, the amount of BTC mined per block will decrease from 12.5 to 6.25. What are the possible effects of a Bitcoin halving?
      </p>
      <ul>
        <li>For a trader, halving can bring BTC price changes.</li>
        <li>For a miner, halving means a 50% lower mining reward.</li>
      </ul>

    </div>
  </div>
</template>

<script>
import {switchFunction} from "@/components/_mixins/switch";
export default {
  name: "v-faq-section",
  mixins: [switchFunction]
}
</script>

<style scoped>

  .faq_section{
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 10px;
  }
  h4{
    cursor: pointer;
    padding-bottom: 30px;
    position: relative;
  }
  ul{
    padding-left: 20px;
  }
  ul > li {
    font-size: 18px;
    list-style: initial;
    color: #42a5a5;
  }
  h4::before{
    content: "+";
    position: absolute;
    right: 0;
    top: 0;
    font-size: 30px;

  }
  h4.open:before{
    content: "-";
  }
</style>