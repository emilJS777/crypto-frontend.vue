<template>
  <div class="container" id="faq">
    <div class="row justify-content-center">
      <div class="col-12 mt-5">
        <h1 class="heading_darkBlue">FAQ</h1>
        <div class="faq mt-5" v-for="(item, index) in faq" :key="index">
          <h3 class="heading_darkBlue question"
              @click="show(index)"
              v-bind:class="switchElem === index ? 'minus' : ''">
            {{item.question}}
          </h3>
          <p class="text_greey text_big answer "
          v-if="switchElem === index">
            {{item.answer}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {switchFunction} from "@/components/_mixins/switch";

  export default {
  name: "v-faq",
  data(){
    return{
      faq: [
        {question: "What is staking coins?", answer: "Put simply, staking is holding funds in a cryptocurrency wallet to maintain a"},
        {question: "What is staking coins?", answer: "Put simply, staking is holding funds in a cryptocurrency wallet to maintain a"},
        {question: "What is staking coins?", answer: "Put simply, staking is holding funds in a cryptocurrency wallet to maintain a"}
      ]
    }
  },
    mixins: [switchFunction]
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .faq{
    width: 60%;
    padding: 5px;
    border-bottom: 1px solid #d7d3d3;
    display: block;
    margin: 0 auto;
  }

  .faq > h3{
    cursor: pointer;
    position: relative;
  }
  .faq > h3:hover{
    color: #42a5a5;
  }
  .faq > h3::before{
    content: "+";
    position: absolute;
    right: 0;
    top: 0;
    font-size: 27px;
  }
  .faq > h3.minus::before{
    content: "-";
    position: absolute;
    right: 0;
    top: 0;
    font-size: 27px;
  }

</style>