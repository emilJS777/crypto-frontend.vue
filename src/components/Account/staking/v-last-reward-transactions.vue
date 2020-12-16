<template>
  <div class="last_reward_transactions">
    <h5 class="heading_darkBlue">Last reward transactions</h5>
    <div class="col-12 table mt-5">
      <div class="row table_head">
        <div class="col-2"><span>ID	</span></div>
        <div class="col-2"><span>Name</span></div>
        <div class="col-2"><span>Date	</span></div>
        <div class="col-2"><span>Staking Asset	</span></div>
        <div class="col-2"><span>Reward</span></div>
      </div>
<!--      <div class="row table_body">-->
<!--        <div class="col-2"><p></p></div>-->
<!--        <div class="col-2"><p></p></div>-->
<!--        <div class="col-2"><p></p></div>-->
<!--        <div class="col-2"><p></p></div>-->
<!--        <div class="col-2"><p></p></div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>

export default {
  name: "v-last-reward-transactions"
}
</script>

<style scoped>
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
.table_body > div > p{
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

</style>