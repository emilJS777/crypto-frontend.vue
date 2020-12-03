<template>
  <div class="transactions mt-1 container-fluid">
<!--    table options-->
    <div class="row table_options_block">
      <div class="col-2">
        <select class="form-control custom-select">
          <option value="1"><span>all curencyes</span></option>
          <option value="2"><span>USD</span></option>
          <option value="3"><span>EUR</span></option>
        </select>
      </div>
      <div class="col-2">
        <select class="form-control custom-select">
          <option value="1">all Transaction types</option>
          <option value="2"><span>Deposit</span></option>
          <option value="3"><span>Withdraw</span></option>
          <option value="3"><span>Trade</span></option>
          <option value="3"><span>Margin Trade</span></option>
        </select>
      </div>
      <div class="col-4 datepicker_block">
        <v-md-date-range-picker
        start-date="2020-01-01"
        end-date="2020-12-12"
        max-year="2030"
        min-year="2010"
        show-year-select/>
      </div>
    </div>
<!--    table-->
    <table class="table mt-4">
      <thead class="">
      <tr>
        <th scope="col">Tx ID	</th>
        <th scope="col"> Date	</th>
        <th scope="col">Amount</th>
        <th scope="col">Balance</th>
        <th scope="col">Type</th>
        <th scope="col">Fee</th>
        <th scope="col">Comment</th>
      </tr>
      </thead>
      <tbody>
        <tr>
          <td>TX ID</td>
          <td>01/02/2012</td>
          <td>Amount</td>
          <td>0.00</td>
          <td>changes</td>
          <td>Fee</td>
          <td>comment</td>
        </tr>
      </tbody>
    </table>
    <div class="download_csv_page_select_block mt-5 row">
      <div class="col-6">
        <button class="btn btn_blue">Download CSV</button>
      </div>
      <div class="col-6">
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
name: "v-transactions",
  components:{
    VMdDateRangePicker
  }
}
</script>

<style scoped>
  .table_options_block select, .table_options_block select option{
    font-style: italic;
    font-size: 14px;
  }
  table{
    text-align: center;
  }
  table th{
    color: #354954;
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
  .download_csv_page_select_block > div:first-child button,
  .download_csv_page_select_block > div:last-child button{
    border-radius: 0;
    font-size: 13px;
  }
  .download_csv_page_select_block > div:last-child > .pages_block{
    float: right;
  }
  .download_csv_page_select_block > div:last-child > .pages_block > button{
    margin-left: 15px;
    position: relative;
    height: 20px;
    width: 20px;
    background-color: #eae9e9 !important;
  }
  .download_csv_page_select_block > div:last-child > .pages_block > .prev:before{
    content: '➤';
    position: absolute;
    transform: rotate(180deg);
    top: 5%;
    right: 20%;

  }
  .download_csv_page_select_block > div:last-child > .pages_block > .next:before{
    content: '➤';
    position: absolute;
    top: 5%;
    left: 20%;
  }
</style>