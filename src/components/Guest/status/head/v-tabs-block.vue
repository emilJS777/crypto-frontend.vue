<template>
  <div class="content">
    <div class="head_menu">
      <button v-bind:class="tabElem === 0 ? 'active' : ''" @click="nextTab(0)">
        <img src="https://cdn3.iconfinder.com/data/icons/essential-pack-2/48/8-Email-64.png" alt="">
      </button>
      <button v-bind:class="tabElem === 1 ? 'active' : ''" @click="nextTab(1)">
        <img src="https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_phone-64.png" alt="">
      </button>
      <button v-bind:class="tabElem === 2 ? 'active' : ''" @click="nextTab(2)">
        <img src="https://cdn1.iconfinder.com/data/icons/random-crafticons/48/misc-_message-64.png" alt="">
      </button>
      <button v-bind:class="tabElem === 3 ? 'active' : ''" @click="nextTab(3)">
        <img src="https://cdn4.iconfinder.com/data/icons/strokeicon-volume-30-social-free/96/social-28-64.png" alt="">
      </button>
    </div>
    <div class="switchable_content">
        <v-email-subscribe v-if="tabElem === 0"/>
        <v-phone-subscribe v-if="tabElem === 1"/>
        <v-visit-our-support-site v-if="tabElem === 2"/>
        <v-update-atom v-if="tabElem === 3"/>
    </div>
  </div>
</template>

<script>
import VEmailSubscribe from "./v-switchable-blocks/v-email-subscribe";
import {tabsFunction} from "../../../_mixins/tabs";
import VPhoneSubscribe from "./v-switchable-blocks/v-phone-subscribe";
import VVisitOurSupportSite from "./v-switchable-blocks/v-visit-our-support-site";
import VUpdateAtom from "./v-switchable-blocks/v-update-atom";

export default {
name: "v-tabs-block",
  components: {VUpdateAtom, VVisitOurSupportSite, VPhoneSubscribe, VEmailSubscribe},
  mixins:[tabsFunction]
}
</script>

<style scoped>
.head_menu{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.head_menu > button{
  border: 0;
  border-bottom: 1px solid #c1c1c1;
  border-left: 1px solid #c1c1c1;
  padding: 5px;
}
button:hover{
  background-color: #c1c1c1;
}
button.active{
  background-color: #42a5a5;
}
.head_menu > button:first-child{
  border-left: 0;
}
button > img{
  width: 24px;
  height: auto;
}
button > span{
  font-weight: bold;
  color: grey;
}
.head_menu > button:focus{
  outline: 0;
}
.switchable_content{
  background-color: #f1f1f1;
  padding: 20px;
  width: 300px;
}
</style>