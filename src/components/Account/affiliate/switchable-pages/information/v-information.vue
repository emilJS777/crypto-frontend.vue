<template>
  <div class="col-12 mt-5">
    <div class="heading_info_block">
      <div>
        <img src="https://cex.io/img/affiliate/icons/affiliate-link.svg" alt="">
        <h5 class="heading_darkBlue">1. Get a link</h5>
        <p class="text_normal text_greey">Share your personal referral link across the web</p>
      </div>
      <div>
        <img src="https://cex.io/img/affiliate/icons/affiliate-invite.svg" alt="">
        <h5 class="heading_darkBlue">2. Invite users</h5>
        <p class="text_normal text_greey">The more users you bring to K7.Crypto, the more you earn</p>
      </div>
      <div>
        <img src="https://cex.io/img/affiliate/icons/affiliate-reward.svg" alt="">
        <h5 class="heading_darkBlue">3. Be rewarded</h5>
        <p class="text_normal text_greey">Get 30% of fee from all exchange transactions of your referred users!</p>
      </div>
    </div>
<!--    description-->
    <div class="description_block mt-5">
      <h6 class="heading_darkBlue">How does K7.Crypto affiliate program work?</h6>
      <ul class="mt-3">
        <li class="text_normal">To participate in K7.Crypto Affiliate Program (hereinafter - the “Program”), please read rules on this page and click on "Generate Link" button.</li>
        <li>Choose a promo tool for sharing your referral link:
          <ul>
            <li>simply copy your referral link</li>
            <li>choose the landing page, where you want to direct users</li>
            <li>choose banners to place on your website or blog</li>
          </ul>
        </li>
        <li class="text_normal">To participate in K7.Crypto Affiliate Program (hereinafter - the “Program”), please read rules on this page and click on "Generate Link" button.</li>
        <li>Choose a promo tool for sharing your referral link:</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
name: "v-information"
}
</script>

<style scoped>
  .heading_info_block{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8em;
  }
  .heading_info_block > div > img{
    width: 70px;
    height: 60px;
    display: block;
    margin: 10px auto;
  }
  .heading_info_block > div >*{
    text-align: center;
    margin-bottom: 8px;
  }
  ul{
    padding-left: 15px;
  }
  ul > li{
    cursor: initial;
    color: #646464;
    list-style-type: decimal;
    margin-top: 10px;
  }
  ul > li > ul > li{
    list-style: initial;
    margin-left: 20px;
    margin-top: 5px;
  }
</style>