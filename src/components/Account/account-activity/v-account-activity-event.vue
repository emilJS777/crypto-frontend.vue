<template>
  <div class="account-activity-event container-fluid mt-3">
      <div class="row">
        <div class="col-1">
          <img :src="require('@/assets/icons/iconfinder_lock_1814107.png')" alt="">
        </div>
        <div class="col-11 message_block">
          <div class="event_header">
            <span class="user_log_mess">
             {{title}}
            </span>
            <span class="ip_address">
              IP: {{ ip }}
            </span>
            <span class="date_time">
              <img :src="require('@/assets/icons/clock-circular-outline.png')" alt="">
               {{ date }}
            </span>
          </div>
          <div class="event_body">
            <p>
              {{message}}
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
name: "v-account-activity-event",
  props:["title", "ip", "date","message"]
}
</script>

<style scoped>
  .account-activity-event{

  }
  .account-activity-event img{
    width: 26px;
    height: auto;
    display: block;
    margin: 0 auto;
    opacity: .5;
  }
  .message_block{
    padding-left: 0;
    padding-right: 0;
    border: 1px solid #cad2d2;
  }
  .message_block:after{
    content: '';
    top: 0;
    position: absolute; /* Абсолютное позиционирование */
    left: -17px; top: 5px; /* Положение треугольника */
    border: 5px solid transparent; /* Прозрачные границы */
    border-right: 10px solid #d4dbdb;
    width: 2px;
    height: 2px;
  }
  .event_header{
    background-color: #f6f6f6;
    padding: 5px;
    font-size: 11px;
    width: 100%;
  }
  .event_header > span{
    color: #033d6b;
    font-weight: bold;
  }
  .event_header > span:nth-child(1){
    background-color: #42a5a5;
    color: #fff;
    font-weight: bold;
    padding: 2px;
    margin-right: 10px;
  }
  .event_header > span:nth-child(3){
    color: #8e9898;
  }
  .date_time {
    float: right;
    margin-right: 5px;
    display: flex;
    align-items: center;
  }
  .date_time>img{
    float: left;
    width: 11px;
    height: auto;
    margin-right: 5px;
    opacity: .5;

  }

  .event_body > p{
    padding: 5px;
    padding-bottom: 1px;
    font-size: 11px;
    font-style: italic;
    color: #807e7e;
    font-weight: bold;
  }
</style>