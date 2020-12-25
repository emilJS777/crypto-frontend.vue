<template>
  <div class="head_block container">
    <div class="sub_head_block">
      <v-logo/>
      <div class="menu_block">
        <button class="btn btn_blue" @click="show()">SUBSTRIBE TO UPDATES</button>
        <div class="opening_block" v-if="switchElem">
            <v-tabs-block/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VLogo from "../../../_general/v-logo";
import {switchFunction} from "../../../_mixins/switch";
import VTabsBlock from "./v-tabs-block";

export default {
name: "v-head",
  components: {VTabsBlock, VLogo},
  mixins:[switchFunction]
}
</script>

<style scoped>
.head_block{
  height: 100px;
  width: 80%;
  position: relative;
}
.sub_head_block{
  width: 100%;
  padding: 15px;
  background-color: #e2e2e2;
  border-radius: 0 0 6px 6px;
}
.sub_head_block >*{
  display: inline-block;
  vertical-align: bottom;
}
.sub_head_block > h3{
  color: #ccc;
}
.sub_head_block > .menu_block{
  float: right !important;

}
.menu_block{
  position: relative;
}
.opening_block{
  position: absolute;
  top: 110%;
  right: 0;
  background-color: #fff;
  border: 1px solid#ccc;
  display: table;
}
</style>