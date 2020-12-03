<template>
  <div class="sub_header container-fluid">
    <div class="row">
      <div class="purse col-6">
        <ul>
          <li>
            <span>$ 0.00</span>
          </li>
          <li>
            <span>€ 0.00</span>
          </li>
          <li>
            <span><i class="cf cf-btc"></i> 0.00000</span>
          </li>
          <li>
            <span><i class="cf cf-ltc"></i> 0.00000</span>
          </li>
        </ul>
      </div>
      <div class="deposit_withdraw_block col-6">
        <ul>
          <li>
            <a href="#">
              <span>DEPOSIT</span>
              <img :src="require('@/assets/icons/deposit.svg')" alt="">
            </a>
          </li>
          <li>
            <a href="#">
              <span>WITHDRAW</span>
              <img :src="require('@/assets/icons/withdraw.svg')" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-sub-header"
}
</script>

<style scoped>
  i{
    font-size: 14px;
    vertical-align: middle;
  }
  .sub_header{
    padding: 15px 20px;
    background-color: #eae9e9;
    margin-bottom: 10px;
  }
  .sub_header > div > div > ul > li{
    display: inline-block;
    margin-right: 13px;
    font-size: 12px;
    color: #797979;
    font-weight: bold;
  }
  ul{
    margin: 0;
  }
  .purse{
    display: flex;
    align-items: center;
  }
  .purse > ul > li{
    cursor: initial;
    letter-spacing: 1.4px;
    font-style: italic;
  }
  .deposit_withdraw_block > ul{
    float: right;
  }
  .deposit_withdraw_block > ul > li{
    transition: .3s;
    color: #fff !important;
  }
  .deposit_withdraw_block > ul > li > a{
    font-size: 13px;
    padding: 8px 15px;
    color: inherit;
    background-color: inherit;
    line-height: 1;
    display: flex;
    align-items: center;
  }
  .deposit_withdraw_block > ul > li > a > *{
    vertical-align: middle;
  }
  .deposit_withdraw_block > ul > li > a > span{
    margin-right: 10px;
  }
  .deposit_withdraw_block > ul > li > a> img{
    width: 18px;
    height: 15px;
    vertical-align: middle;
  }
  .deposit_withdraw_block > ul > li:first-child{
    background-color: #42a5a5;
  }
  .deposit_withdraw_block > ul > li:first-child:hover{
    background-color: #368d8d;
  }
  .deposit_withdraw_block > ul > li:last-child{
    background-color: #095794;
    margin: 0;
  }
  .deposit_withdraw_block > ul > li:last-child:hover{
    background-color: #04365d;
  }
</style>