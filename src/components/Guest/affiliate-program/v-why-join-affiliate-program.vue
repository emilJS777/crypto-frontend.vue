<template>
  <div class="why-join-program pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-5">
          <h1 class="heading_darkBlue">Why join the K7 Affiliate Program?</h1>
          <p class="text_big text_greey">
            You’re minutes away from starting to earn money with K7
          </p>
          <a href="#" class="btn btn_blue">Start Earning now</a>
        </div>
        <div class="col-5 offset-2">
          <div class="info_block"
          v-for="(info, index) in infos" :key="index">
            <h5 class="heading_lightBlue">
              <img :src="info.icon" alt="">
              {{ info.title }}
            </h5>
            <p class="text_greey text_normal">
              {{ info.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-why-join-affiliate-program",
  data(){
    return{
      infos:[
        {icon: require('@/assets/icons/iconfinder_Dollar_1737376.png'), title: 'Unlimited earnings opportunities', desc: 'There are no limitations on the amount you can earn. Invite as many people as you like. The more people who create accounts and trade on CEX.IO after clicking your referral link, the more payouts you’ll receive.'},
        {icon: require('@/assets/icons/iconfinder_Dollar_1737376.png'), title: 'Unlimited earnings opportunities', desc: 'There are no limitations on the amount you can earn. Invite as many people as you like. The more people who create accounts and trade on CEX.IO after clicking your referral link, the more payouts you’ll receive.'},
        {icon: require('@/assets/icons/iconfinder_Dollar_1737376.png'), title: 'Unlimited earnings opportunities', desc: 'There are no limitations on the amount you can earn. Invite as many people as you like. The more people who create accounts and trade on CEX.IO after clicking your referral link, the more payouts you’ll receive.'}
      ]
    }
  }
}
</script>

<style scoped>
  .why-join-program{
    background-color: #f5f7fa;
  }
  .info_block{
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
    margin-top: 40px;
  }
  .info_block:first-child{
    margin-top: 0;
  }
  h5 > img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
</style>