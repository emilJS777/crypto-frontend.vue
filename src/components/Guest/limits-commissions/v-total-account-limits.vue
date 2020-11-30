<template>
  <div class="total_account_limits pb-5">
    <div class="container mt-5 mb-5">
      <h1 class="heading_darkBlue pb-5">Total account limits</h1>
      <div class="row">
        <div class="col-12 table mt-5 mb-2">
          <div class="row table_head">
            <div class="col-4"><span>Limits*</span></div>
            <div class="col-3"><span>Daily deposit</span></div>
            <div class="col-3"><span>Daily withdrawal</span></div>
            <div class="col-2"><span></span></div>
          </div>
          <div class="row table_body"
          v-for="(tb, index) in totalAccountsLimits" :key="index">
            <div class="col-4">
              <h5 class="heading_darkBlue">{{ tb.title }}</h5>
              <p class="text_greey">{{ tb.limits }}</p>
            </div>
            <div class="col-3">
              <p class="heading_darkBlue">{{ tb.dailyDeposit }}</p>
            </div>
            <div class="col-3">
              <p class="heading_darkBlue">{{ tb.dailyWathdrawal }}</p>
            </div>
            <div class="col-2">
              <a href="#" class="btn btn_blue">Increase Limit</a>
            </div>
          </div>
        </div>
        <span class="text_greey text_small">* For EU residents, the limits apply in EUR</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-total-account-limits",
  data(){
    return{
      totalAccountsLimits:[
        {title: "Identity", limits: "Level up your daily limits: deposits — up to $3,000.00, withdrawals — up to $10,000.00.", dailyDeposit: "$3,000.00", dailyWathdrawal: "$10.000"},
        {title: "Address", limits: "Level up your daily limits: deposits — up to $3,000.00, withdrawals — up to $10,000.00.", dailyDeposit: "$3,000.00", dailyWathdrawal: "$10.000"},
        {title: "Enhanced", limits: "Level up your daily limits: deposits — up to $3,000.00, withdrawals — up to $10,000.00.", dailyDeposit: "$3,000.00", dailyWathdrawal: "$10.000"}
      ]
    }
  }
}
</script>

<style scoped>
.total_account_limits{
  padding-top: 80px;
  background-color: #f7f8fa;
}
h1{
  text-align: center;
}

.table{
  text-align: center;
}
.table > div{
  border-bottom: 1px solid #e5e3e3;
}
.table_head > div{
  color: #919494;
  padding-bottom: 15px;
}
.table_head > div:first-child{
  text-align: left;
}
.table_head > div:last-child{
  text-align: right;
}
.table_body > div{
  padding-top: 30px;
  padding-bottom: 30px;
}
.table_body > div:first-child{
  text-align: left;
}
.table_body > div:last-child{
  text-align: right;
}
.table_body > div:nth-child(2),
.table_body > div:nth-child(3),
.table_body > div:nth-child(4){
  display: flex;
  align-items: center;
}


.table_body > div > p{
  line-height: 1.3;
  display: block;
  margin: 0 auto;
  font-size: 16px;
  transition: .2s;
}
.table_body > div > p:hover{
  color: #42a5a5;
}

</style>