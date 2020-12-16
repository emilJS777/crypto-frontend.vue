<template>
  <div id="refund_policy">
    <v-header/>
    <h2 class="heading_darkBlue text-center pt-5">Refund and Return policy</h2>
    <div class="toggle_selects_block pt-5">
      <v-toggle-select-section
          title="1.Background"
          description="
                K7.Crypto guarantees to any its User his/her right for refund, in case if such User is not satisfied
                with the quality of the provided Services. Furthermore, CEX.IO declares that its User has the
                right to change his/her mind in case if the User’s Account was already funded and to request his/her
                Funds to be returned."
          :li="['This Refund Policy concerns exclusively Transaction fees and Users’ Funds.',
                'This Refund Policy does not cover any transactions between the Users related to purchase-sale of crypto-currencies,' +
                 ' as well as GHS, and it does not refer to any refunds for purchased crypto-currencies and GHS.']"
      />
      <v-toggle-select-section
          title="2.Definitions"
          description="
                K7.Crypto guarantees to any its User his/her right for refund, in case if such User is not satisfied
                with the quality of the provided Services. Furthermore, CEX.IO declares that its User has the
                right to change his/her mind in case if the User’s Account was already funded and to request his/her
                Funds to be returned."
          :li="['This Refund Policy concerns exclusively Transaction fees and Users’ Funds.',
                'This Refund Policy does not cover any transactions between the Users related to purchase-sale of crypto-currencies,' +
                 ' as well as GHS, and it does not refer to any refunds for purchased crypto-currencies and GHS.']"
      />
    </div>
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VToggleSelectSection from "../_general/v-toggle-select-section";
import VFooterMenu from "../../_general/v-footer-menu";
export default {
name: "index",
  components: {VFooterMenu, VToggleSelectSection, VHeader}
}
</script>

<style scoped>
  h2{
    margin-top: 100px;
  }
</style>