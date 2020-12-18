<template>
  <div class="document container">
    <h4 class="heading_darkBlue mt-3">{{ title }}</h4>
    <span class="text_normal text_greey">{{data}}</span>
    <div class="sub_desc" v-for="(item, index) in subdescription" :key="index">
      <h6 class="heading_darkBlue">{{item.title}}</h6>
      <p v-for="(text, i) in item.descriptions" :key="i">
        {{text}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-document",
  props: ['title', 'data', 'subdescription']
}
</script>

<style scoped>
.document{
  padding-top: 80px;
}
h4{
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}
.sub_desc{
  margin-top: 30px;
}
.sub_desc p{
  color: #555;
}
</style>