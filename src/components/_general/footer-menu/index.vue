<template>
  <div class="footer_menu">
    <div class="container">
      <div class="row">
        <div class="col-12 grid_menu_block">
          <ul>
            <h5>Services</h5>
            <li><router-link to="/buy-crypto">Buy Crypto</router-link></li>
            <li><router-link to="/buy-crypto">Buy DASH</router-link></li>
            <li><router-link to="/spot-trading">BTC to USD</router-link></li>
            <li><router-link to="/sell-bitcoins">Sell Bitcoin</router-link></li>
            <li><router-link to="/bitcoin-trading">Bitcoin Trading</router-link></li>
          </ul>
          <ul>
            <h5>Information</h5>
            <li><router-link to="/limits-commissions">Limit and Commissions</router-link></li>
            <li><router-link to="/account/support/edition">How to buy crypto</router-link></li>
            <li><router-link to="/bitcoin-halving">Bitcoin Halving</router-link></li>
            <li><router-link to="/fee-schedule">Fee Schedule</router-link></li>
            <li><router-link to="/account/support/edition">Getting Started</router-link></li>
            <li><router-link to="/account/support/edition">Identity Verification Guite</router-link></li>
            <li><router-link to="/account/support/edition">Card Verification Guite</router-link></li>
          </ul>
          <ul>
            <h5>Tools</h5>
            <li><router-link to="/k7-api">Api</router-link></li>
            <li><router-link to="/bitcoin-calculator">Tools Bitcoin Calculator</router-link></li>
            <li><router-link to="/mobile">Mobile App</router-link></li>
            <li><router-link to="/affiliate-program">Affiliate Program</router-link></li>
          </ul>
          <ul>
            <h5>About</h5>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/legal-security">Legal and Security</router-link></li>
            <li><router-link to="/terms">Terms of Use</router-link></li>
            <li><router-link to="/refund-policy">Refund Policy</router-link></li>
            <li><router-link to="/press">Press</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
          </ul>
          <ul>
            <h5>Follow</h5>
            <li><img :src="require('@/assets/icons/social/iconfinder_twitter-social-media_765208.png')" alt=""></li>
            <li><img :src="require('@/assets/icons/social/iconfinder_facebook-social-media_765252.png')" alt=""></li>
            <li><img :src="require('@/assets/icons/social/iconfinder_linkedin-social-media_765228.png')" alt=""></li>
            <router-link to="/status" class="btn btn_blue">K7 Status</router-link>
            <div>
              <img :src="require('@/assets/img/Visa.png')" alt="">
              <img :src="require('@/assets/img/creditcards.png')" alt="">
              <img :src="require('@/assets/img/mastercard.png')" alt="">
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-footer-menu"
}
</script>

<style scoped>
  .footer_menu{
    margin-top: 60px;
    padding-top: 40px;
    padding-bottom: 40px;
    border-top: 1px solid #e7e4e4;
  }
  .grid_menu_block{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  .grid_menu_block > ul{
    padding: 5px;
  }
  .grid_menu_block > ul > h5{
    font-weight: bold;
  }
  .grid_menu_block > ul > li{
    margin-bottom: 8px;
    font-size: 15px;
    font-style: italic;
    color: #929090;
  }
  .grid_menu_block > ul > li > a{
    color: inherit;
  }
  .grid_menu_block > ul > li:hover{
    color: #42a5a5;
    transition: .3s;
  }
  .grid_menu_block > ul:last-child > li{
    display: inline-block;
    border: 1px solid #dedcdc;
    padding: 5px;
    margin-right: 8px;
    border-radius: 8px;
  }
  .grid_menu_block > ul:last-child > li:hover{
    background-color: #42a5a5;
  }
  .grid_menu_block > ul:last-child > li > img{
    width: 28px;
    height: 28px;
  }
  .grid_menu_block > ul:last-child > button{
    margin-top: 10px;
  }
  .grid_menu_block > ul:last-child > div{
    margin-top: 25px;
  }
  .grid_menu_block > ul:last-child > div > img{
    width: 50px;
    display: inline-block;
  }
</style>