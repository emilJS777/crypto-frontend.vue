<template>
    <div class="faq mt-5">
      <h3 class="heading_darkBlue question"
          @click="show"
          v-bind:class="switchElem ? 'minus' : ''">
        {{ question }}
      </h3>
      <p class="text_greey text_big answer"
         v-if="switchElem">
        {{ answer }}
      </p>
    </div>
</template>

<script>
  import {switchFunction} from "@/components/_mixins/switch";

  export default {
  name: "v-faq",
    mixins: [switchFunction],
    props:['question', 'answer']
}
</script>

<style scoped>


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