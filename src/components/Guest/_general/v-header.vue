<template>
  <div class="header">
    <div class="container">
      <div class="row">
<!--        col-2 logo-->
        <div class="col-2">
          <v-logo/>
        </div>
<!--        col-6 navbar-->
        <div class="col-7 pl-5 navigation_block">
          <nav class="navigation">
            <ul>
              <li>PRODUCTS
                <ul class="box_shadow_bottom">
                  <ul>
                    <h4 class="text_greey">For Everyone</h4>
                    <li>
                      <img :src="require('@/assets/icons/iconfinder_Basket_2_2205959.png')" alt="">
                      <router-link to="/buysell">Instant Buy</router-link>
                      <span class="text_greey">Buy crypto with your credit or debit card in a few clicks.</span>
                    </li>
                    <li>
                      <img :src="require('@/assets/icons/iconfinder_36-web_essential_3401854.png')" alt="">
                      <router-link to="/mobile">Site Mobile App</router-link>
                      <span class="text_greey">Buy, sell, earn and exchange crypto anywhere and anytime.</span>
                    </li>
                    <li>
                      <img :src="require('@/assets/icons/iconfinder_b-30_4229859.png')" alt="">
                      <router-link to="/staking">Staking</router-link>
                      <span class="text_greey">Buy, sell, earn and exchange crypto anywhere and anytime.</span>
                    </li>
                  </ul>
                  <ul>
                    <h4 class="text_greey">For Traders</h4>
                    <li>
                      <img :src="require('@/assets/icons/profit.png')" alt="">
                      <router-link to="/spot-trading">SPOT Trading</router-link>
                      <span class="text_greey">Buy, sell, earn and exchange crypto anywhere and anytime.</span>
                    </li>
                    <li>Margin Trading Beta
                      <span class="text_greey">Buy, sell, earn and exchange crypto anywhere and anytime.</span>
                    </li>
                  </ul>
                  <ul>
                    <h4 class="text_greey">For Businesses</h4>
                    <li>
                      CEX.IO Aggregator
                      <span class="text_greey">Buy, sell, earn and exchange crypto anywhere and anytime.</span>
                    </li>
                    <li>CEX Direct
                      <span class="text_greey">Buy, sell, earn and exchange crypto anywhere and anytime.</span>
                    </li>
                    <li>Custody</li>
                  </ul>
                </ul>
              </li>
              <li>FEES
                <ul class="box_shadow_bottom">
                  <li>
                    <img :src="require('@/assets/icons/Science-Percentage-2-icon.png')" alt="">
                    <router-link to="/limits-commissions">Limits and Commissions</router-link>
                    <span class="text_greey">Buy, sell, earn and exchange crypto anywhere and anytime.</span>
                  </li>
                  <li>
                    <img :src="require('@/assets/icons/iconfinder_business_finance_money-22_2784217.png')" alt="">
                    <router-link to="/fee-schedule">Fee Schedule</router-link>
                    <span class="text_greey">Buy, sell, earn and exchange crypto anywhere and anytime.</span>
                  </li>
                </ul>
              </li>
              <li>
                COMPANY
                <ul class="box_shadow_bottom">
                  <li>
                    <img :src="require('@/assets/icons/iconfinder_about-info-information_2931180.png')" alt="">
                    <router-link to="/about" >About Us</router-link>
                    <span class="text_greey">Buy, sell, earn and exchange crypto anywhere and anytime.</span>
                  </li>
                  <li>
                    <img :src="require('@/assets/icons/iconfinder_group-customers-team-contacts-family_3209291.png')" alt="">
                    <router-link to="/contacts">Contacts</router-link>
                    <span class="text_greey">Buy, sell, earn and exchange crypto anywhere and anytime.</span>
                  </li>
                  <li>
                    <img :src="require('@/assets/icons/iconfinder_Lawyer_1_753891.png')" alt="">
                    <router-link to="/legal-security">Legal and Security</router-link>
                    <span class="text_greey">Buy, sell, earn and exchange crypto anywhere and anytime.</span>
                  </li>
                  <li>
                    <img :src="require('@/assets/icons/iconfinder_dailynews__newspaper__information__paper__blog__survey__news_2528135.png')" alt="">
                    <router-link to="/blog">Blog</router-link>
                    <span class="text_greey">Buy, sell, earn and exchange crypto anywhere and anytime.</span>
                  </li>
                  <li>
                    <img :src="require('@/assets/icons/iconfinder_journalist-newscaster-broadcaster-announcer-press_4313140.png')" alt="">
                    <router-link to="/press">Press</router-link>
                    <span class="text_greey">Buy, sell, earn and exchange crypto anywhere and anytime.</span>
                  </li>
                </ul>
              </li>
              <li>
                <router-link to="/prices">PRICES</router-link>
              </li>
              <li>
                <router-link to="/affiliate-program">AFFILIATE PROGRAM</router-link>
              </li>
              <li class="new">
                <router-link to="/account/trade">ACCOUNT TRADE</router-link>
              </li>
            </ul>
          </nav>
        </div>
<!--        col-4 auth-->
        <div class="col-3 auth_block">
          <ul class="auth">
            <li><router-link to="/login" class="btn btn_blue">Sign in</router-link></li>
            <li><router-link to="/register" class="btn">Create Account</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vLogo from "../../_general/v-logo"

  export default {
    name: "v-header",
    components: {
      vLogo
    }
  }
</script>

<style scoped>
  .header{
    padding: 12px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background: #fff;
  }
  .container{
    padding: 0;
  }
  .navigation_block > nav{
    height: 100%;
    position: relative;
    z-index: 9;
    font-weight: bold;
  }
  .navigation_block > nav > ul{
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }
  .navigation > ul > li{
    display: inline-block;
    margin-right: 30px;
    font-size: 13px;
    position: relative;
    color: #4a4b4b;
    font-weight: 600;
  }
  li.new:before{
    content: 'NEW';
    position: absolute;
    font-size: 6px;
    padding: 2px 3px;
    color: #fff;
    top: -3px;
    right: -23px;
    background-color: #42a5a5;
  }
  .navigation > ul > li > a{
    color: inherit;
  }
  .navigation > ul > li:nth-child(1)::before,
  .navigation > ul > li:nth-child(2)::before,
  .navigation > ul > li:nth-child(3)::before{
    content: "\27A4";
    position: absolute;
    right: -13px;
    top: 2px;
    font-size: 10px;
    transform: rotate(90deg);
    transition: .2s;
  }
  .navigation > ul > li:hover{
    color: #42a5a5;
  }
  .navigation > ul > li > ul{
    position: absolute;
    width: max-content;
    top: 99%;
    left: -80px;
    background: #fff;
    border-radius: 10px;
    display: none;
    z-index: 999;
  }
  .navigation > ul > li:hover > ul{
    display: block;
  }
  .navigation > ul > li > ul > ul,
  .navigation > ul > li:nth-child(2) > ul,
  .navigation > ul > li:nth-child(3) > ul{
    float: left;
    padding: 20px;
    max-width: 300px;
  }
  .navigation > ul > li > ul > ul > li,
  .navigation > ul > li > ul > li{
    color: #414141;
    line-height: 2;
    margin-top: 10px;
  }
  .navigation > ul > li > ul > ul > li > img,
  .navigation > ul > li > ul > li > img{
    width: 24px;
    height: 24px;
  }
  .navigation > ul > li > ul > ul > li> span,
  .navigation > ul > li > ul > li> span{
    display: block;
    font-size: small;
    line-height: 1;
  }
  .navigation > ul > li > ul > ul > li:hover,
  .navigation > ul > li > ul > li:hover{
    color: #42a5a5;
  }
  .navigation > ul > li > ul > ul> li>a,
  .navigation > ul > li > ul > li>a{
    color: inherit !important;
    margin-left: 5px;
    padding: 5px;
    font-size: 14px;
  }
  .auth_block{
    position: relative;
  }
  .auth_block > .auth{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
  }
  .auth_block > .auth > li{
    display: inline-block;
    margin-left: 15px;
  }
  .auth_block > .auth > li:first-child > a{
    border-radius: 0 !important;
    background-color: #fff !important;
    color: #444 !important;
    border: 1px solid #42a5a5;
  }
  .auth_block > .auth > li:last-child{
    background-color: #42a5a5;
  }

</style>