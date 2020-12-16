<template>
  <div class="tabs_section  mt-5">
    <div class="col-12">
      <button @click="nextTab(0)" v-bind:class="tabElem === 0 ? 'active' : ''">
        Settlement History
      </button>
      <button @click="nextTab(1)" v-bind:class="tabElem === 1 ? 'active' : ''">
        Last rewarding blocks
      </button>
    </div>
    <div class="col-12 content mt-3">
      <v-last-reward-transactions v-if="tabElem === 0"/>
      <v-last-rewarding-blocks v-if="tabElem === 1"/>
    </div>
  </div>
</template>

<script>
import VLastRewardTransactions from "./v-last-reward-transactions";
import {tabsFunction} from "../../_mixins/tabs";
import VLastRewardingBlocks from "./v-last-rewarding-blocks";

export default {
name: "v-tabs-section",
  components: {VLastRewardingBlocks, VLastRewardTransactions},
  mixins: [tabsFunction]
}
</script>

<style scoped>
  button{
    border: 0;
    border-bottom: 2px solid initial;
    background-color: initial;
    font-size: 13px;
    margin-left: 5px;
    font-weight: bold;
    padding: 5px 10px;
    color: #a2a2a2;
  }
  button:focus{
    outline: 0;
  }
  .active{
    border-bottom: 2px solid #42a5a5;
    color: #7a7a7a;
  }
  .content{
    background-color: #fff;
    border-radius: 6px;
    padding: 20px;
  }
</style>