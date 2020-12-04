<template>
  <div class="switch_content container mt-5">
    <div class="row">
      <div class="col-12">
        <h4 class="heading_darkBlue mb-5">Account Settins</h4>
        <div class="buttons_block">
          <button
              v-bind:class="switchElem === 0 ? 'active':''"
              @click="show(0)">
            Profile
          </button>
          <button
              v-bind:class="switchElem === 1 ? 'active':''"
              @click="show(1)">
            Upload
          </button>
        </div>
      </div>
      <div class="col-12 pt-5 content">
        <v-profile v-if="switchElem === 0"/>
      </div>
    </div>
  </div>
</template>

<script>
import {switchFunction} from "@/components/_mixins/switch";
import VProfile from "./switchable-tabs/v-profile";
export default {
name: "v-content-tabs",
  components: {VProfile},
  mixins: [switchFunction]
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