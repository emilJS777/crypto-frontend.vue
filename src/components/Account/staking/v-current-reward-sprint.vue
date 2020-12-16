<template>
  <div class="current_reward_sprint mt-5">
    <h5 class="heading_darkBlue">Current reward sprint</h5>
    <div class="col-12 table mt-5">
      <div class="row table_head">
        <div class="col-2"><span>name</span></div>
        <div class="col-1"><span>price,$</span></div>
        <div class="col-1"><span>EAY</span></div>
        <div class="col-1"><span>Balance</span></div>
        <div class="col-2"><span>Shares</span></div>
        <div class="col-2"><span>Earned</span></div>
        <div class="col-3"><span>Actions</span></div>
      </div>
      <div class="row table_body">
        <div class="col-2">
          <i class="cf cf-ada"></i>
          <a>Cardano</a>
        </div>
        <div class="col-1"><p>$ 0.152	</p></div>
        <div class="col-1"><p class="plus">4-5%	</p></div>
        <div class="col-1"><p>-</p></div>
        <div class="col-2"><p>-</p></div>
        <div class="col-2"><p>-</p></div>
        <div class="col-3">
          <a class="btn btn_darkBlue" @click="this.viewModal">
            Add Funds
          </a>
          <router-link to="/buysell" class="btn btn_blue">Buy</router-link>
        </div>
      </div>
    </div>
    <span class="text_greey text_small">*All rewards will be funded on your account next day after end of reward sprint</span>
  </div>
</template>

<script>
export default {
name: "v-current-reward-sprint",
  methods:{
    viewModal(){
      this.$emit('viewModal')
    }
  }
}
</script>

<style scoped>
  .current_reward_sprint{
    background-color: #fff;
    border-radius: 6px;
    padding: 15px;
  }
  .table{
    text-align: center;
  }
  .table > div{
    border-bottom: 1px solid #e5e3e3;
  }
  .table_head > div{
    color: #808181;
    padding-bottom: 15px;
    font-size: 12px;
  }
  .table_head > div:first-child{
    text-align: left;
  }
  .table_head > div:last-child{
    text-align: right;
  }
  .table_body > div{
    padding-top: 25px;
    padding-bottom: 15px;
    font-weight: bold;
  }
  .table_body > div:first-child{
    text-align: left;
  }
  .table_body > div:last-child{
    text-align: right;
  }
  .table_body > div:nth-child(2){
    color: #8298a5;
  }
  .table_body > div > i{
    color: #079494;
    font-size: 20px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .table_body > div > *{
    display: inline-block;
  }
  .table_body > div > p{
    line-height: 2;
    vertical-align: center;
    margin: 0;
    font-size: 12px;
    transition: .2s;
  }
  .table_body > div > a{
    color: inherit;
    font-size: 12px;
    margin-left: 3px;
  }
  .table_body > div:first-child > p{
    cursor: pointer;
    text-decoration: underline !important;
  }
  .table_body > div > p:hover{
    color: #42a5a5;
  }
  .table_body > div > p.minus{
    color: #fa2121;
  }
  .table_body > div > p.plus{
    color: #02795d;
  }
</style>