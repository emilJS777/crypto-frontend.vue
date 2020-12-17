<template>
  <div class="statistics mt-5">
    <h4 class="heading_darkBlue text-center">Statistics</h4>
    <div class="row mt-3">
      <div class="col-6">
        <button class="active">DAILY</button>
        <button class="">MONTHLY</button>
      </div>
      <div class="col-6">
        <div class="rating_block">
          <span class="text_small text_greey">Your current rating</span>
          <span class="text_big heading_darkBlue">1803 of 1803</span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="col-12 table mt-5">
          <div class="row table_head">
            <div class="col-2"><span>Data Range</span></div>
            <div class="col-1"><span>Visits</span></div>
            <div class="col-1"><span>Registrations</span></div>
            <div class="col-1"><span>Deposits</span></div>
            <div class="col-2"><span>Orders</span></div>
            <div class="col-2"><span> Fees (USD)</span></div>
            <div class="col-3"><span> Bonus (USD)</span></div>
          </div>
          <div class="row table_body">
            <div class="col-2">
              <p>2020-12-17	</p>
            </div>
            <div class="col-1">
              <p>1</p>
            </div>
            <div class="col-1">
              <p>0</p>
            </div>
            <div class="col-1"><p>0</p></div>
            <div class="col-2"><p>0</p></div>
            <div class="col-2"><p>0</p></div>
            <div class="col-3">
              <p>0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-statistics"
}
</script>

<style scoped>
  button{
    border-radius: 0;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #dedede;
    margin-right: 2px;
  }
  button:focus{
    outline: 0;
  }
  button.active{
    background-color: #42a5a5;
    color: #fff;
  }
  .rating_block{
    background-color: #eeeeee;
    display: table;
    float: right;
  }
  .rating_block > span{
    display: inline-block;
    vertical-align: middle;
    margin: 10px;
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