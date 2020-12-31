<template>
  <div class="window_modal"
       v-bind:class="this.fadeShow ? 'fadeShow' : ''">
    <div class="modal_message_block">
      <div class="modal_header">
        <h4>Buy BTC with USD</h4>
        <span class="close_btn"
        @click="fadeSwitch">
          X
        </span>
      </div>
      <div class="content">
        <form action="">
          <div class="input_block">
            <input type="number" class="form-control">
            <v-select :price-tag="['BTC', 'LTC']"/>
          </div>
          <div class="input_block">
            <input type="number" class="form-control">
            <v-select :price-tag="['USD', 'EUR']"/>
          </div>
          <button class="btn btn_blue">Buy Now</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VSelect from "@/components/_general/currency-select";
export default {
  name: "v-modal-window",
  components: {
    VSelect
  },
  data(){
    return{
      fadeShow: false
    }
  },
  methods:{
    fadeSwitch: function (){
      this.fadeShow = !this.fadeShow;
    }
  },
  beforeMount(){
    setTimeout( () => this.fadeSwitch(), 4500)
  }
}
</script>

<style scoped>
  .window_modal{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(187, 187, 187, .4);
    display: flex;
    align-items: center;
    z-index: 999;
    transition: .5s;
    opacity: 0;
    visibility: hidden;
  }
  .fadeShow{
    visibility: visible;
    opacity: 1;
    transition: opacity 0.4s linear;
  }
  .modal_message_block{
    margin: 0 auto;
    width: 400px;
    background-color: #fff;
  }
  .modal_header{
    background-color: #42a5a5;
    padding: 10px;
    line-height: 3;
    text-align: center;
    color: #faf8f8;
    position: relative;
  }
  .modal_header > .close_btn{
    position: absolute;
    right: 20px;
    top: 2px;
    color: #f3f3f3;
    font-weight: bold;
    cursor: pointer;
  }
  .content{
    padding: 30px;
    background-color: #f7f7f7;
  }
  .input_block{
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;
    row-gap: 10px;
    margin-top: 10px;
    margin-bottom: 30px;
    position: relative;
  }
  .input_block:before{
    content: 'Pay:';
    position: absolute;
    width: 30px;
    height: 30px;
    bottom: 50%;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    line-height: 2;
    font-size: 15px;
    opacity: .5;
  }
  .input_block:first-child:before{
    content: "Get:";
  }
  .input_block:last-child:before{
    content: "Pay:";
  }
  .input_block > *{
    height: 40px;
    line-height: 1;
    font-size: 20px;
    font-style: italic;
    color: #5d706b;
  }
  .input_block > input{
    padding-left: 45px;
    text-align: right;
  }
  form > button{
    width: 100%;
    border-radius: 3px;
  }

</style>