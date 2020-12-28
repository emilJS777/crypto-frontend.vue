<template>
  <div class="quick_communication_block">
    <div>
      <div class="quick_communication_content box_shadow" v-bind:class="switchElem ? 'show' : ''">
        <div class="content">
          <v-home @changeToMessange="nextTab(1)"
                  @changeToAnswers="nextTab(2)"
                  v-bind:class="tabElem === 0 ? 'home_show' : ''"
                  class="home_page"/>
          <v-messanger @changePage="nextTab(0)"
                       v-bind:class="tabElem === 1 ? 'messenger_show' : ''"
                       class="messenger_page"/>
          <v-ready-answers @changePage="nextTab(0)"
                           v-bind:class="tabElem === 2 ? 'ready_answers_show' : ''"
                           class="ready_answers"/>
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
import VHome from "./v-home";
import VMessanger from "./v-messanger";
import VReadyAnswers from "./v-ready-answers";
export default {
name: "index",
  mixins:[switchFunction, tabsFunction],
  components:{
    VReadyAnswers,
    VMessanger,
    VHome
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
  height: 0;
  width: 50px;
  visibility: hidden;
  min-height: 100%;
  bottom: 130%;
  right: 0px;
  border-radius: 8px;
  opacity: 0;
  transition: .2s;
  overflow: hidden;
}
.show{
  opacity: 1;
  height: 400px;
  width: 300px;
  visibility: visible;
}
.content{
  height: 100%;
}
.messenger_page,
.home_page,
.ready_answers{
  opacity: 0;
  width: 0;
  visibility: hidden;
  transition: .3s;
  float: right;
  min-height: 100%;
}
.home_page{
  float: left;
}
.messenger_show,
.home_show,
.ready_answers_show{
  opacity: 1;
  width: 100%;
  visibility: visible;
}

</style>