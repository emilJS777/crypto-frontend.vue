<template>
  <div class="contact_upper container mt-5 pb-5">
    <h1 class="heading_darkBlue">Contact Us</h1>
    <div class="row">
      <div class="col-8">
        <div class="row mt-5">
          <div class="col-4">
            <h5 class="heading_lightBlue">CEX.IO LTD</h5>
          </div>
          <div class="col-8">
            <p class="heading_darkBlue text_big">Correspondence address:</p>
            <span class="text_greey">
              33 St. James's Square, London, England, SW1Y 4JS, United Kingdom
            </span>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-4">
            <h5 class="text_greey">CEX.IO Ltd VAT:</h5>
            <span class="text_greey">
              GB 307261820
            </span>
          </div>
          <div class="col-8">
            <h5 class="heading_darkBlue text_big">Company number:</h5>
            <span class="text_greey">
              33 St. James's Square, London, England, SW1Y 4JS, United Kingdom
            </span>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-4">
            <h5 class="text_greey">Email for complaints:</h5>
            <span class="text_greey">
              <a href="#">complaint@cex.io</a>
            </span>
          </div>
          <div class="col-8">
            <h5 class="heading_darkBlue text_big">Company number:</h5>
            <span class="text_greey">
              <a href="#">web@cex.io</a>
            </span>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-4">
            <h5 class="text_greey">Support phone number:</h5>
            <span class="text_greey">
              +44 121 728 2228
            </span>
            <span class="text_greey">
              +44 121 728 2228
            </span>
          </div>
          <div class="col-8">
            <h5 class="heading_darkBlue text_big">Email for account-related issues and cardholder correspondence:</h5>
            <span class="text_greey">
              <a href="#">support@cex.io</a>
            </span>
          </div>
        </div>
      </div>
      <div class="col-4">
        <img :src="require('@/assets/img/contact.png')" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-upper-section"
}
</script>

<style scoped>
span{
  display: block;
}
.contact_upper{
  border-bottom: 1px solid #e0dede;
  margin-bottom: 4px;
}
img{
  height: auto;
}
</style>