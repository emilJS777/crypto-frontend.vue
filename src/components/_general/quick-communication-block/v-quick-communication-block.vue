<template>
  <div class="quick_communication_block">
    <div>
      <div class="quick_communication_content box_shadow" v-bind:class="switchElem ? 'show' : ''">
        <div class="content">
          <v-top-description  v-if="tabElem === 0"/>
          <v-main v-if="tabElem === 0" @changePage="nextTab(1)"/>
          <v-messanger-block @changePage="nextTab(0)" v-if="tabElem === 1"/>
        </div>
      </div>
      <div  @click="show" class="icon_block">
        <img :src="require('@/assets/icons/message-24.png')" alt="" v-if="!switchElem">
        <span v-if="switchElem">⬇</span>
      </div>
    </div>
  </div>
</template>

<script>
import {switchFunction} from "../../_mixins/switch";
import {tabsFunction} from "../../_mixins/tabs";
import VMain from "./v-main";
import VTopDescription from "./v-top-description";
import VMessangerBlock from "./v-messanger-block";
export default {
name: "v-quick-communication-block",
  mixins:[switchFunction, tabsFunction],
  components:{
    VMessangerBlock,
    VTopDescription,
    VMain
  },
  methods:{
    tabMessaPage(index){
      this.tabElem = index;
    }
  }
}
</script>

<style scoped>
.quick_communication_block{
  background-color: #42a5a5;
  position: fixed;
  bottom: 20px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quick_communication_block > div{
  width: 100%;
  height: 100%;
  position: relative;
}
.quick_communication_block > div > .icon_block{
  cursor: pointer;
  padding: 13px 10px 10px 10px;
}
.quick_communication_block > div > .icon_block > img{
  width: 24px;
  height: auto;
  display: table;
  margin: 2px auto;
}
.quick_communication_block > div > .icon_block > span{
  color: #fff;
  display: table;
  font-size: 30px;
  margin: -10px auto;
}
.quick_communication_content{
  position: absolute;
  background-color: #fff;
  height: 80px;
  width: 150px;
  visibility: hidden;
  min-height: 100%;
  bottom: 150%;
  right: 0;
  border-radius: 8px;
  opacity: 0;
  transition: .3s;
  overflow: hidden;
}
.show{
  opacity: 1;
  height: 400px;
  width: 300px;
  visibility: visible;
}
.quick_communication_content::after{
  content: '🔼';
  position: absolute;
  bottom: -34px;
  right: 10px;
  font-size: 35px;
  color: #fff;
  transform: rotate(180deg);
}
.content{
  height: 100%;
}

</style>