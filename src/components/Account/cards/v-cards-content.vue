<template>
  <div class="cards_content container mt-5">
    <div class="row">
      <div class="col-12">
        <router-link to="/account/verification" class="btn btn_blue">Verification</router-link>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6 heading_desc">
        <h2 class="heading_darkBlue">
          Manage your payment cards
        </h2>
        <p class="text_big text_greey mt-3">
          Provide information about your card. You can use any Visa/MasterCard issued in any currency
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-cards-content"
}
</script>

<style scoped>
  .heading_desc{
    text-align: center;
  }
  .col-12 > a{
    float: right;
    background-color: #eae9e9 !important;
    color: #033d6b !important;
    font-weight: bold;
    font-size: 13px;
  }
</style>