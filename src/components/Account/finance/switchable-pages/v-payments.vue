<template>
  <div class="payments mt-1 container-fluid">
    <!--    table options-->
    <div class="row table_options_block">
      <div class="col-2 datepicker_block">
        <v-md-date-range-picker
            start-date="2020-01-01"
            end-date="2020-12-12"
            max-year="2030"
            min-year="2010"
            show-year-select/>
      </div>
      <div class="col-2">
        <select class="form-control custom-select">
          <option value="1"><span>All directions</span></option>
          <option value="2"><span>Deposit</span></option>
          <option value="3"><span>Withdraw</span></option>
        </select>
      </div>
      <div class="col-2">
        <select class="form-control custom-select">
          <option value="1"><span>All curencyes</span></option>
          <option value="2"><span>USD</span></option>
          <option value="3"><span>EUR</span></option>
        </select>
      </div>
      <div class="col-2">
        <select class="form-control custom-select">
          <option value="1">All payments instruments</option>
        </select>
      </div>
      <div class="col-2">
        <select class="form-control custom-select">
          <option value="1"><span>All Statuses</span></option>
          <option value="2"><span>Payment verifications</span></option>
          <option value="3"><span>Unable to process</span></option>
        </select>
      </div>
    </div>
    <!--    table-->
    <table class="table mt-4">
      <thead class="">
      <tr>
        <th scope="col">Date created	</th>
        <th scope="col"> Date updated	</th>
        <th scope="col">Transaction ID</th>
        <th scope="col">Direction</th>
        <th scope="col">Currency</th>
        <th scope="col">Amount</th>
        <th scope="col">Payment Instrument</th>
        <th scope="col">Status</th>
        <th scope="col">Details</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
    <div class="pages_arrows_block mt-5 row">
      <div class="col-12">
        <div class="pages_block">
          <button class="btn btn_blue prev"></button>
          <button class="btn btn_blue next"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {VMdDateRangePicker} from "v-md-date-range-picker";

export default {
name: "v-paymenys",
  components:{
    VMdDateRangePicker
  }
}
</script>

<style scoped>
.table_options_block select, .table_options_block select option{
  font-style: italic;
  font-size: 14px;
  background-color: #f6f6f6;
}
table{
  text-align: center;
}
table th{
  color: #797777;
  font-size: 14px;
}
table tbody{
  height: 50px;
  overflow: hidden;
}
table td{
  color: #4a4b4b;
  font-size: 13px;
  font-weight: bold;
  font-style: italic;
}
table tr:first-child {
  border: 0 !important;
}
.pages_arrows_block > div button{
  border-radius: 0;
  font-size: 13px;
}
.pages_arrows_block > div > .pages_block{
  float: right;
}
.pages_arrows_block > div > .pages_block > button{
  margin-left: 15px;
  position: relative;
  height: 20px;
  width: 20px;
  background-color: #eae9e9 !important;
}
.pages_arrows_block > div > .pages_block > .prev:before{
  content: '➤';
  position: absolute;
  transform: rotate(180deg);
  top: 5%;
  right: 20%;

}
.pages_arrows_block > div > .pages_block > .next:before{
  content: '➤';
  position: absolute;
  top: 5%;
  left: 20%;
}
</style>