<template>
  <div class="sub_collection mt-3 box_shadow">
    <router-link to="/account/support/edition" class="info">
      <h6>Wuetify cl ea num is not </h6>
      <div class="info_img_block">
        <div class="img_block">
          <img src='https://static.intercomassets.com/avatars/4359217/square_128/photo_2020-09-14_14.39.39-1600083590.jpeg?1600083590' alt="">
        </div>
        <div class="span_block">
          <span>injvor desc ueli miban</span>
          <span>jessica albanaci</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
name: "v-sub-collection",
}
</script>

<style scoped>
.sub_collection{
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  cursor: pointer;
  transition: .3s;
}
.sub_collection:hover{
  background-color: #f8f6f6;
}
.sub_collection h6{
  color: #3da78d;
}

.sub_collection .info{
}
.info_img_block > *{
  display: inline-block;
}
.info_img_block > .span_block{
  margin-left: 15px;
}
.info_img_block > .span_block > span{
  display: block;
  line-height: 1;
  color: #7e8181;
}
.img_block{
  vertical-align: bottom;
}
.img_block > *{
  display: inline-block;
  width: 35px;
  height: 35px;
  border: 2px solid #fff;
  border-radius: 50%;
  margin-right: -8px;
}
</style>