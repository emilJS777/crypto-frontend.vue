<template>
  <div class="row mt-5">
    <div class="col-4 mt-4"
    v-for="(edition, index) in editions" :key="index">
      <a :href=edition.urlHref>
        <div class="redaction_block">
          <div class="title_img">
            <img :src=edition.imgTitleUrl alt="">
          </div>
          <span class="date text_small">
            {{edition.date}}
          </span>
          <p class="desc heading_darkBlue">
            {{edition.description}}
          </p>
          <span>Read Now</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-edition",
  props: ['editions']
}
</script>

<style scoped>
.redaction_block{
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
}
.title_img{
  width: 70%;
  height: 50px;
  display: block;
  margin: 0 auto;
  margin-bottom: 30px;
}
.title_img > img{
  width: 100%;
  height: 100%;
}
.date{
  color: #7faeae;
}
.desc{
  height: 60px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.redaction_block > span:last-child{
  color: #42a5a5;
  font-size: 14px;
  position: relative;
}
.redaction_block > span:last-child:before{
  content: '\27A4';
  position: absolute;
  right: -15px;
  background-color: #fff;
  top: -2px;
  vertical-align: bottom;
}
.redaction_block:hover > p{
  color: #42a5a5;
  transition: .3s;
}
</style>