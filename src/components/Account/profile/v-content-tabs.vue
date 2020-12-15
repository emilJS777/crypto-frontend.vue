<template>
  <div class="switch_content container mt-5">
    <div class="row">
      <div class="col-12">
        <h4 class="heading_darkBlue mb-5">Account Settins</h4>
        <div class="buttons_block">
          <button
              v-bind:class="tabElem === 0 ? 'active':''"
              @click="nextTab(0)">
            Profile
          </button>
          <button
              v-bind:class="tabElem === 1 ? 'active':''"
              @click="nextTab(1)">
            Upload
          </button>
          <button
              v-bind:class="tabElem === 2 ? 'active':''"
              @click="nextTab(2)">
            Security
          </button>
          <button
              v-bind:class="tabElem === 3 ? 'active':''"
              @click="nextTab(3)">
            Api
          </button>
          <button
              v-bind:class="tabElem === 4 ? 'active':''"
              @click="nextTab(4)">
            Mobile K7 Crypto
          </button>
        </div>
      </div>
      <div class="col-12 pt-5 content">
        <v-profile v-if="tabElem === 0"/>
        <v-upload v-if="tabElem === 1"/>
        <v-security v-if="tabElem === 2"/>
        <v-api v-if="tabElem === 3 "/>
        <v-mobile v-if="tabElem === 4 "/>
      </div>
    </div>
  </div>
</template>

<script>
import {tabsFunction} from '../../_mixins/tabs';
import VProfile from "./switchable-tabs/v-profile";
import VUpload from "./switchable-tabs/v-upload";
import VSecurity from "./switchable-tabs/v-security";
import VApi from "./switchable-tabs/v-api";
import VMobile from "./switchable-tabs/v-mobile";
export default {
name: "v-content-tabs",
  components: {VMobile, VApi, VSecurity, VUpload, VProfile},
  mixins: [tabsFunction]
}
</script>

<style scoped>
.buttons_block{
  display: table;
}
.buttons_block > button{
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px 15px;
  background-color: #eae9e9;
  border: 1px solid #eae9e9;
  color: #75797c;
  font-weight: bold;
  border-radius: 1px;
  padding-top: 5px;
  transition: .3s;
  font-size: 15px;
  letter-spacing: 1px;
}
.buttons_block > button:first-child{
  margin: 0;
}
.buttons_block > button:focus{
  outline: 0;
}
.buttons_block > button.active{
  color: #0b364f;
  background-color: #f6f6f6;
  border-top: 1px solid #1d345d;
}
.buttons_block > button:hover{
  background-color: #f6f6f6;
}
.content{
  background-color: #f6f6f6;
  margin-top: -8px;
  padding: 40px;
  min-height: 500px;
}
.switch_content > div > div:first-child{
  padding-left: 0;
}
.buttons_block > button > a{
  color: inherit;
}
</style>