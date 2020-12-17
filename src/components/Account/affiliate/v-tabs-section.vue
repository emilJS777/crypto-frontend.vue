<template>
  <div class="tabs_section container">
    <div class="col-12 mt-5 tabs_buttons_block">
      <button v-bind:class="tabElem === 0 ? 'active' : ''" @click="nextTab(0)">
        Information
      </button>
      <button v-bind:class="tabElem === 1 ? 'active' : ''" @click="nextTab(1)">
        Lading Pages
      </button>
      <button v-bind:class="tabElem === 2 ? 'active' : ''" @click="nextTab(2)">
        Banners
      </button>
      <button v-bind:class="tabElem === 3 ? 'active' : ''" @click="nextTab(3)">
        Statistics
      </button>
    </div>
    <div class="col-12 content pt-4">
      <v-referral-link/>
      <v-information v-if="tabElem === 0"/>
      <v-lading-pages v-if="tabElem === 1"/>
      <v-statistics v-if="tabElem === 3"/>
    </div>
  </div>
</template>

<script>
import {tabsFunction} from "../../_mixins/tabs";
import VReferralLink from "./v-referral-link";
import VInformation from "./switchable-pages/information/v-information";
import VLadingPages from "./switchable-pages/lading-pages/v-lading-pages";
import VStatistics from "./switchable-pages/statistics/v-statistics";

export default {
  name: "v-tabs-section",
  components: {VStatistics, VLadingPages, VInformation, VReferralLink},
  mixins:[tabsFunction]
}
</script>

<style scoped>
  .tabs_buttons_block{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

  }
  .tabs_buttons_block > button{
    border: 0;
    background-color: initial;
    padding-bottom: 3px;
    border-bottom: 1px solid #afb0b0;
    color: #0b364f;
  }
  .tabs_buttons_block > button:focus{
    outline: 0;
  }
  .tabs_buttons_block > button.active{
    border-bottom: 2px solid #42a5a5;
    font-weight: bold;
  }
</style>