<template>
  <div class="opening_block">
    <div class="head" @click="show">
      <h6 v-bind:class="switchElem ? 'minus': 'plus'">{{ title }}</h6>
      <span class="text_small text_green">Operational</span>
    </div>
    <div class="content" v-if="switchElem">
      <p v-for="(item, index) in methods" :key="index">
        {{ item.name }}
        <span class="text_small"
              v-bind:class="item.status === 'Operational' ? 'text_green' : 'text_blue'">
          {{ item.status }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import {switchFunction} from "../../../../_mixins/switch";

export default {
name: "v-opening-block",
  props: ['title', 'methods'],
  mixins:[switchFunction]
}
</script>

<style scoped>
.opening_block{
  border-bottom: 1px solid #a9a8a8;
}
.opening_block:last-child{
  border-bottom: 0;
}
.head{
  cursor: pointer;
  padding: 10px 20px;
}
.head >*, .content >p > *{
  display: inline-block;
}
.head > h6{
  font-weight: bold;
}
.head > h6::before{
  margin-right: 10px;
  font-weight: bold;
}
.head > h6.plus::before{
  content: '+';
}
.head > h6.minus::before{
  content: '-';
}

span{
  float: right;
  line-height: 2;
}
span.text_green{
  color: green;
}
span.text_blue{
  color: #0a0a6d;
}
.content > p{
  padding: 3px 25px;
}
</style>