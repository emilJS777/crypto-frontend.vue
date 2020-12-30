<template>
  <div class="banner_block mt-5">
    <div class="img_section">
      <div v-bind:class="this.selectSize">
        <img :src=img alt="">
      </div>
    </div>
    <div class="setting_section">
      <div class="control_block">
        <span class="text_small">Choose banner size:</span>
        <select class="custom-select" @change="sizeChange($event)">
          <option value="w300h225">300x225</option>
          <option value="w200h200">200x200</option>
          <option value="w160h600">160x600</option>
        </select>
      </div>
      <div class="control_block">
        <span class="text_small">Choose type:</span>
        <div class="btns_block">
          <button class="active">HTML</button>
          <button>BBC</button>
        </div>
      </div>
      <div class="code_block">
        <textarea name="code copy" rows="8" cols="2" readonly>
          <a href="https://cex.io/r/0/up133935344/0/" target="_blank"><img src="https://cex.io/rb/CEX-1-300x250.png" alt="BuyBitcoinswithCreditCard" width="300" height="250" border="0"></a>
        </textarea>
        <button class="copy_btn btn btn_blue">Copy</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-banner-block",
  props:['img'],
  data(){
    return{
      selectSize: 'w300h225',
    }
  },
  methods:{
    sizeChange:function(event){
        this.selectSize = event.target.value;
    }
  }
}
</script>

<style scoped>
  .banner_block{
    border: 1px solid#ccc;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
  .img_section{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .banner_block > div{
    padding: 30px;
  }
  .setting_section{
    border-left: 1px solid #ccc;
    background-color: #f6f6f6;
  }
  .setting_section > div{
    display: block;
  }
  .setting_section > div{
    display: grid;
    grid-template-columns: 2fr 3fr;
    margin-bottom: 20px;
  }
  .setting_section > div > span{
    line-height: 3;
  }
  .setting_section > div > .btns_block{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px;
  }
  .setting_section > div > .btns_block > button{
    border: 1px solid grey;
    background-color: #fff;
  }
  .setting_section > div > .btns_block > button:focus{
    outline: 0;
  }
  .setting_section > div > .btns_block > button.active{
    background-color: #42a5a5;
    color: #fff;
  }
  .code_block{
    position: relative;
    display: block;
  }
  .code_block > *{
    display: block;
  }
  .code_block  textarea{
    resize: none;
    width: 300px;
    display: table;
    margin: 0 auto;
    padding: 10px;
    font-size: 12px;
  }
  .code_block > button{
    position: absolute;
    bottom: 5px;
    right: 5px;
  }

  .img_section > div{
    background-color: #42a5a5;
  }
  .img_section > div > img{
    width: 100%;
    height: 100%;
  }
  .w200h200{
        width: 200px;
        height: 200px;
  }
  .w160h600{
    width: 160px;
    height: 600px;
  }
  .w300h225{
    width: 300px;
    height: 225px;
  }
</style>