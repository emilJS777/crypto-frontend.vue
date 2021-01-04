<template>
  <div id="terms">
    <v-header/>
    <v-document
      title="Terms of Use"
      data="Last update: 10th of November, 2020"
      description="These Terms of Use constitute an electronic agreement between you (hereinafter the “User”) and CEX.IO LTD of 33 St. James's Square, London, England, SW1Y 4JS, United Kingdom (hereinafter the “CEX.IO”)
                    that applies to the User's use of this website, any and all services, products and content provided by CEX.IO.
                    As used herein, “CEX.IO” refers to the company CEX.IO LTD Company, including but not limited to, its owners, directors, investors, officers, employees, agents or other related parties, unless otherwise provided herein.
                    The User acknowledges that CEX.IO Corp. registered at 101 Hudson Street, 21st Floor, Jersey City, NJ 07302 is a sister company of CEX.IO. CEX.IO Corp. provides its services on the Platform only to the United States of America (hereinafter “US”) Users from supported States.
                    The User also acknowledges that CEX.IO Limited is a company incorporated under the laws of Gibraltar with its registered address at 57/63 Line Wall Road, Gibraltar, GX11 1AA that is licensed by the Gibraltar Financial Services Commission as a DLT Provider under the license number: FSC1345B."
      :subdescription="[
        {title: '1. DEFINITIONS', descriptions: [
            '1.1.1. Account: means an account registered by the User on the Platform.',
            '1.1.2. Base Currency: means the first symbol in the trading pair.',
            '1.1.3. Buyer: means the User who submits an Order to buy Cryptocurrencies through the Platform.',
            '1.1.4. Commission: means a fee charged by or on behalf of any third party (e.g. bank, non-bank financial institution, payment service provider, etc).'
        ]},
        {title: '1. DEFINITIONS', descriptions: [
            '1.1.1. Account: means an account registered by the User on the Platform.',
            '1.1.2. Base Currency: means the first symbol in the trading pair.',
            '1.1.3. Buyer: means the User who submits an Order to buy Cryptocurrencies through the Platform.',
            '1.1.4. Commission: means a fee charged by or on behalf of any third party (e.g. bank, non-bank financial institution, payment service provider, etc).'
        ]},
        {title: '1. DEFINITIONS', descriptions: [
            '1.1.1. Account: means an account registered by the User on the Platform.',
            '1.1.2. Base Currency: means the first symbol in the trading pair.',
            '1.1.3. Buyer: means the User who submits an Order to buy Cryptocurrencies through the Platform.',
            '1.1.4. Commission: means a fee charged by or on behalf of any third party (e.g. bank, non-bank financial institution, payment service provider, etc).'
        ]}
        ]"
    />
    <v-footer-menu/>
  </div>
</template>

<script>
import VHeader from "../../_general/v-header";
import VDocument from "../../../_general/legal-security-doc/v-document";
import VFooterMenu from "../../../_general/footer-menu";
export default {
  name: "index",
  components: {VFooterMenu, VDocument, VHeader}
}
</script>

<style scoped>
#terms{
}
</style>