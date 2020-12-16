<template>
  <div class="faq_section container mt-5">
    <h4 class="heading_darkBlue"
        @click="show" v-bind:class="switchElem ? 'open' : ''">
      {{ title }}
    </h4>
    <div class="info"
         v-if="switchElem">

      <p class="text_greey text_big">
        {{description}}
      </p>
      <ul>
        <li v-for="(item, index) in li" :key="index">
          {{item}}
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import {switchFunction} from "@/components/_mixins/switch";
export default {
  name: "v-toggle-select-section",
  mixins: [switchFunction],
  props:['title','description','li']
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