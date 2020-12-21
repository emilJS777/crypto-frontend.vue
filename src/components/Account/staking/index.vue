<template>
  <div id="staking">
    <v-header active="staking"/>

    <div class="container mt-5">

      <v-staking-information/>

      <v-current-reward-sprint @viewModal="toggleModal"/>

      <div class="mt-5 rewards_portfolio_block">
        <v-last-rewards/>
        <v-portfolio-structure/>
      </div>

      <v-tabs-section/>

      <v-calculate-earnings class="mt-5"/>

      <v-faq
          question="Faq faq faq?"
          answer="answer answer answer!"
      />
      <v-faq
          question="Faq faq faq?"
          answer="answer answer answer!"
      />
      <v-faq
          question="Faq faq faq?"
          answer="answer answer answer!"
      />

    </div>

    <v-footer-menu/>

    <v-modal-block :show="this.modalView" @viewModal="toggleModal"/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VStakingInformation from "./v-staking-information";
import VCurrentRewardSprint from "./v-current-reward-sprint";
import VFooterMenu from "../../_general/v-footer-menu";
import VModalBlock from "./v-modal-block";
import VTabsSection from "./v-tabs-section";
import VLastRewards from "./v-last-rewards";
import VPortfolioStructure from "./v-portfolio-structure";
import VCalculateEarnings from "../../_general/staking/v-calculate-earnings";
import VFaq from "../../_general/staking/v-faq";


export default {
name: "index",
  components: {
    VFaq,
    VCalculateEarnings,
    VPortfolioStructure,
    VLastRewards, VTabsSection, VModalBlock, VFooterMenu, VCurrentRewardSprint, VStakingInformation, VHeader},
  data(){
    return{
      modalView: false
    }
  },
  methods:{
    toggleModal(){
      this.modalView = !this.modalView;
    }
  }
}
</script>

<style scoped>
#staking{
  background-color: #f1f1f1;
  padding-bottom: 10px;
}
.rewards_portfolio_block{
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 1em;
}
.faq{
  border-bottom: 1px solid #d7d7d7;
  padding-bottom: 15px;
}
</style>