<template>
  <div class="currency_select_block custom-select" @click="show" >
    <div class="selected">
      <i v-bind:class="'cf cf-'+selected.toLowerCase()"></i>
      <span>{{selected}}</span>
    </div>
    <div class="dropdown_menu" v-if="switchElem">
      <div class="currency_block" v-for="(item, index) in priceTag" :key="index">
        <div v-if="item !== selected" @click="selected = item">
          <i v-bind:class="'cf cf-'+item.toLowerCase()"></i>
          <span>{{item}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {switchFunction} from "../../_mixins/switch";

export default {
  props: ["priceTag", "border"],
  name: "index",
  mixins:[switchFunction],
  data(){
    return{
      selected: this.priceTag[0]
    }
  }
}
</script>

<style scoped>
  .currency_select_block{
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ced4da;
    cursor: pointer;
    position: relative;
    height: 60px;
    background-color: #fff;
  }
  .dropdown_menu{
    position: absolute;
    top: 104%;
    z-index: 9;
    width: 100%;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
  }
  .selected{
    
  }
  .currency_block > div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    border-radius: 4px;
    margin-top: 3px;
    border: 1px solid #ced4da;
    background-color: #f8f8f8;
    transition: .3s;
  }
  .currency_block > div:hover{
    background-color: #fff;
  }
  i, span{
    margin-left: 5px;
    margin-right: 5px;
    font-weight: bold;
    color: #087777;
  }
  i.cf-eur:before{
    content: '€';
    font-weight: bold;
    font-size: 30px;
    line-height: .3;
  }
  i.cf-usd:before{
    content: '$';
    font-weight: bold;
    font-size: 30px;
    line-height: .3;
  }
  i.cf-rur:before{
    content: '₽';
    font-weight: bold;
    font-size: 30px;
    line-height: .3;
  }
  .borderNone{
    border: 0;
  }
  .borderNone:focus{

    box-shadow: none;
  }
</style>