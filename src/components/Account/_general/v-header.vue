<template>
  <div id="account_header">
    <nav>
      <ul class="menu">
        <li v-bind:class="this.active === 'buysell' ? 'active' : ''">
          <router-link to="/account/buysell">BUY/SELL</router-link>
        </li>
        <li v-bind:class="this.active === 'trade' ? 'active' : ''">
          <router-link to="/account/trade">TRADES</router-link>
        </li>
        <li v-bind:class="this.active === 'finance' ? 'active' : ''">
          <router-link to="/account/finance">FINANCE</router-link>
        </li>
        <li v-bind:class="this.active === 'cards' ? 'active' : ''">
          <router-link to="/account/cards">CARDS</router-link>
        </li>
        <li v-bind:class="this.active === 'affiliate' ? 'active' : ''">
          <router-link to="/account/affiliate">AFFILIATE</router-link>
        </li>
        <li v-bind:class="this.active === 'staking' ? 'active' : ''">
          <router-link to="/account/staking">STAKING</router-link>
        </li>
      </ul>
      <ul class="right_menu">
        <li>
          <router-link to="/account/support">SUPPORT</router-link>
        </li>
        <li>
          UP12355932
          <div>
            <ul>
              <li>
                <router-link to="/account/profile">Profil</router-link>
              </li>
              <li>
                <router-link to="/account/account-activity">Account Activity</router-link>
              </li>
              <li>
                <router-link to="/account/social-networks">Social Newtorks</router-link>
              </li>
              <li>
                <router-link to="/account/verification">Verification</router-link>
              </li>
              <li>
                <router-link to="/account/processing-alerts">Notfication Center</router-link>
              </li>
              <li>
                <a href="#">Exit</a>
              </li>
            </ul>
          </div>
        </li>
        <v-languages-select/>

      </ul>
    </nav>
  </div>
</template>

<script>
import VLanguagesSelect from "../../_general/languages-select";
export default {
  name: "v-header",
  components: {VLanguagesSelect},
  props:['active']
}
</script>

<style scoped>
  #account_header{
    background-color: #06283c;
    padding: 15px;
  }
  .menu{
    margin: 0;
  }
  ul > li{
    display: inline-block;
    margin-right: 6px;
    margin-left: 6px;
    color: #f5f5f5;
    font-size: 11px;
    font-weight: bold;
    padding: 3px;
  }
  .menu > li:hover{
    color: #ccc;
  }
  .menu > li.active{
    color: #42a5a5;
  }
  ul > li > a{
    color: inherit;
    display: block;
  }
  ul{
    display: inline-block;
  }
  ul.right_menu{
    float: right;
    margin: 0;
    display: flex;
    align-items: center;
  }
  ul.right_menu > li{
    border: 1px solid #888;
    padding: 5px 20px;
    border-radius: 4px;
    position: relative;
  }
  ul.right_menu > li:hover{
    background-color: #42a5a5;
    border: 1px solid #42a5a5;
    transition: .2s;
  }
  ul.right_menu > li > div{
    position: absolute;
    left: 0;
    top: 103%;
    border-radius: 6px;
    padding-top: 6px;
    opacity: 0;
    visibility: hidden;
    z-index: 999;
  }
  ul.right_menu > li:hover > div{
    opacity: 1;
    visibility: visible;
    transition: opacity .2s linear;
  }
  ul.right_menu > li > div > ul{
    padding: 0;
    background-color: #f1f1f1;
    width: 110%;
  }
  ul.right_menu > li > div > ul:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    width: 0;
    height: 0;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #f1f1f1;
  }
  ul.right_menu > li > div > ul > li{
    color: #0b364f;
    font-size: 10px;
    width: 100%;
    margin: 0;
    padding: 5px 10px;
  }
  ul.right_menu > li > div > ul > li:last-child{
    border-top: 2px solid #fff;
  }
  ul.right_menu > li > div > ul > li:first-child{
    margin-top: 3px;
  }
  ul.right_menu > li > div > ul > li:hover{
    color: #fff;
    background-color: #42a5a5;
  }
</style>