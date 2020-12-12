<template>
  <div class="deposit_payment_method">
    <div class="icon_block" tabindex="1">
      <img :src=this.imgLink alt="">
    </div>
    <span>
      {{this.name}}
    </span>
  </div>
</template>

<script>
export default {
  name: "v-deposit-payment-method",
  props: ["imgLink", "name"]
}
</script>

<style scoped>
  .deposit_payment_method{
    padding: 10px;
    text-align: center;
    height: 90px;
    color: #5d706b;
  }
  .deposit_payment_method:hover{
    color: #0b364f;
  }
  .icon_block{
    border: 1px solid #b7b7b7;
    padding: 15px 20px;
    border-radius: 5px;
    height: 100%;
    cursor: pointer;
  }
  .icon_block:hover{
    border: 1px solid#42a5a5;
  }
  .icon_block:focus{
    outline: 0;
    background-color: #e7e7e7;
  }
  .icon_block > img{
    width: auto;
    height: 100%;
    display: block;
    margin: 0 auto;
  }
</style>