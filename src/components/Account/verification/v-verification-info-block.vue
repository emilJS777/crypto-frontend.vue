<template>
  <div class="verification-info-block box_shadow">
      <div class="get_info"
      @click="toggleDescription()">
        <span>
          get info
        </span>
      </div>
    <div class="img_info">
      <div class="info_heading">
        <p>{{ stage }}</p>
        <h3>{{ name }}</h3>
        <p>verification</p>
      </div>
      <img :src=img alt="">
    </div>
    <div class="bottom_info">
      <div>
        <span class="">
          {{ smallDescription }}
        </span>
      </div>
      <div>
        <router-link to="/account/verification/identity" class="btn btn_darkBlue"
        v-if="unlock">
          Start
        </router-link>
        <img :src="require('@/assets/icons/iconfinder_lock_1814107.png')"
             v-if="!unlock">
      </div>
    </div>
    <div class="description "
    v-bind:class="!this.descShow ? ' hidden' : ''">
      <p class="text_small">
        {{ description }}
      </p>
      <p class="text_small valid"
      v-for="(item, index) in validDescription" :key="index">
        {{item}}
      </p>
    </div>
  </div>
</template>

<script>
import {switchFunction} from "../../_mixins/switch";

export default {
name: "v-verification-info-block",
  mixins: [switchFunction],
  props:['stage','name','smallDescription','description','validDescription','unlock','img'],
  data(){
    return{
      descShow: false
    }
  },
  methods:{
    toggleDescription:function (){
        this.descShow = !this.descShow;
    }
  }
}
</script>

<style scoped>
.verification-info-block{
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: auto;
  margin-bottom: 30px;
}
.get_info{
  width: 100px;
  border-radius: 50%;
  text-align: center;
  padding-top: 22px;
  padding-bottom: 8px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  right: 50%;
  top: -26px;
  transform: translateX(-50%);
  cursor: pointer;
  z-index: 1;
  transition: .2s;
  font-size: 20px;
}
.get_info:hover{
  background-color: #42a5a5;
}
.get_info span{
  font-weight: bold;
  color: #033d6b;
  font-size: 16px;
}
.get_info:hover span{
  color: #fff;
}
.img_info{
  height: 250px;
  position: relative;
  z-index: 0;
}
.img_info > .info_heading{
  position: absolute;
  color: #fff;
  font-weight: bold;
  line-height: 1;
  top: 50%;
  bottom: 50%;
  left: 20px;
  height: 100px;
  transform: translateY(-50%);
}
.img_info > img{
  height: 100%;
  width: 100%;
}
.bottom_info{
  display: grid;
  grid-template-columns: 5fr 2fr;
  height: 100px;
  font-size: 15px;
  font-style: italic;
  color: #033d6b;
  background-color: #f5f5f5;
}
.bottom_info > div{
  padding: 5px;
}
.bottom_info > div:last-child{
  display: flex;
  align-items: center;
}
.bottom_info > div:last-child > img{
  width: 50px;
  height: 50px;
  opacity: .5;
}
.bottom_info > div > a:hover{
  background-color: #ccc !important;
}
.description{
  border-top: 1px dashed #ccc;
  padding: 5px;
  max-height: 200px;
  overflow-y: auto;
}
div.hidden{
  display: none;
}
.description > .valid{
  padding-left: 20px;
  position: relative;
}
.description > .valid:before{
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background-image: url('../../../assets/icons/iconfinder_11_-_Valid_1815560.png');
  background-size: 15px 20px;
  background-repeat: no-repeat;
  left: 0;
}
.description::-webkit-scrollbar {
  width: 6px;
}

.description::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.description::-webkit-scrollbar-thumb {
  background-color: #869eb1;
}
</style>