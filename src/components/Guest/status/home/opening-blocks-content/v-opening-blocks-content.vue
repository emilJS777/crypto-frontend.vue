<template>
  <div class="opening_blocks_content container mb-3 mt-5">
    <div class="head_desc">
      <h3 class="heading_darkBlue">About This Site</h3>
      <p class="text_normal text_greey">
        Welcome to the K7.Crypto status page. This resource has been specifically created to provide you with real-time updates about the exchange’s operation, including partial system outages, planned maintenance, etc.
      </p>
    </div>
    <div class="content mt-5 mb-5">
      <v-opening-block
        title="Factor Authentication"
        :methods="[
            {name: 'Registrations', status: 'Operational'},
            {name: 'Login', status: 'Under Maintenance'}
        ]"
      />
      <v-opening-block
          title="Crypto Deposits"
          :methods="[
            {name: 'BTC', status: 'Operational'},
            {name: 'LTC', status: 'Under Maintenance'}
        ]"
      />

    </div>
  </div>
</template>

<script>
import VOpeningBlock from "./v-opening-block";
export default {
  name: "v-opening-blocks-content",
  components: {VOpeningBlock}
}
</script>

<style scoped>
.opening_blocks_content{
  width: 60%;
}
.content{
  border: 1px solid #bcbcbc;
}
</style>