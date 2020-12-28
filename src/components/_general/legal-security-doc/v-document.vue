<template>
  <div class="document container">
    <div class="heading_block">
      <h4>{{ title }}</h4>
      <p class="text_normal text_greey">{{data}}</p>
    </div>
    <div class="descs_block">
      <div class="sub_desc" v-for="(item, index) in subdescription" :key="index">
        <h4 class="heading_darkBlue">{{item.title}}</h4>
        <p v-for="(text, i) in item.descriptions" :key="i">
          {{text}}
        </p>
      </div>
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
.heading_block{
  background-color: #42a5a5;
  padding: 15px 12px;
  text-align: center;
  margin-top: 20px;
}
.heading_block > h4{
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  color: #fff;
  font-weight: bold;
}
.heading_block > p{
  color: #fff;
  font-style: italic;
  margin: 0;
  text-align: right;
}
.descs_block{
  background-color: #f5f5f5;
  padding: 15px;
}
.sub_desc{
  margin-top: 30px;
}
.sub_desc p{
  color: #555;
  font-style: italic;
  font-size: 20px;
}
</style>