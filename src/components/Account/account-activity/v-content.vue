<template>
  <div class="content container mt-5">
    <div class="heading_range_block row">
      <div class="col-6 datepicker_block range ">
        <v-md-date-range-picker
            start-date="2020-01-01"
            end-date="2020-12-12"
            max-year="2030"
            min-year="2010"
            show-year-select/>
      </div>
      <div class="heading col-6">
        <h4 class="heading_darkBlue">
          Account activity events
        </h4>
      </div>
    </div>
    <div class="row events">
        <v-account-activity-event
          title="User successfully logged in"
          ip="45.153.212.205"
          date="2020-12-07 11:21:01 +04:00"
          message="User login successful, user-agent is: Chrome 87.0.4280 / Linux 0.0.0, captcha:true, logged in via email"
        />
        <v-account-activity-event
            title="User successfully logged in"
            ip="45.153.212.205"
            date="2020-12-07 11:21:01 +04:00"
            message="User login successful, user-agent is: Chrome 87.0.4280 / Linux 0.0.0, captcha:true, logged in via email"
        />
        <div class="col-12 mt-5">
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
import VAccountActivityEvent from "./v-account-activity-event";
export default {
name: "v-content",
  components:{
    VAccountActivityEvent,
    VMdDateRangePicker
  }
}
</script>

<style scoped>
  .content{
    border: 1px solid #f5f3f3;
    border-radius: 4px;
  }
  h4 {
    line-height: 2;
    text-align: right;
  }
  .heading_range_block{
    background-color: #f5f3f3;
    padding: 15px;
  }
  .heading_range_block > .range > *{
    background-color: initial;
    line-height: 3;
  }
  .events{
    padding-right: 10px;
    padding-bottom: 10px;
  }


  .pages_block button{
    border-radius: 0;
    font-size: 13px;
  }
  .pages_block{
    float: right;
    display: block;
  }
  .pages_block > button{
    margin-left: 15px;
    position: relative;
    height: 20px;
    width: 20px;
    background-color: #eae9e9 !important;
  }
  .pages_block > .prev:before{
    content: '➤';
    position: absolute;
    transform: rotate(180deg);
    top: 5%;
    right: 20%;

  }
  .pages_block > .next:before{
    content: '➤';
    position: absolute;
    top: 5%;
    left: 20%;
  }
</style>