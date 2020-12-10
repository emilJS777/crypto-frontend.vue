<template>
  <div class="sub_collections_block  mt-5 container">
    <div class="row pt-3 justify-content-center">
      <div class="col-10 collections_content">
<!--        collections header-->
        <div class="collections_header">
          <div class="icon">
            <img :src="require('@/assets/icons/iconfinder_mobile-phone-smartphone-handphone-gadget_3643758.png')" alt="">
          </div>
          <div class="info">
            <h4>Trading</h4>
            <div class="info_img_block">
              <div class="img_block">
                <img src='https://static.intercomassets.com/avatars/4359217/square_128/photo_2020-09-14_14.39.39-1600083590.jpeg?1600083590' alt="">
                <img src='https://static.intercomassets.com/avatars/4359217/square_128/photo_2020-09-14_14.39.39-1600083590.jpeg?1600083590' alt="">
              </div>
              <div class="span_block">
                <span>injvor desc ueli miban</span>
                <span>jessica albanaci</span>
              </div>
            </div>
          </div>
        </div>
<!--        sub collections-->
        <v-sub-collection/>
        <v-sub-collection/>
      </div>
    </div>
  </div>
</template>

<script>
import VSubCollection from "./v-collection-editor";
export default {
name: "v-sub-collections",
  components: {VSubCollection}
}
</script>

<style scoped>
  .collections_content{
    background-color: #e4e4e4;
    padding: 30px;
    border-radius: 8px;
  }
  .collections_header{
    display: grid;
    grid-template-columns: 1fr 5fr;
  }
  .collections_header > div{
    height: 100px;
  }
  .collections_header > .icon{
    display: flex;
    align-items: center;
    opacity: .5;
  }
  .collections_header > .icon > img{
    width: 50px;
    height: auto;
    display: block;
    margin: 0 auto;
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
  .info > h4{
    color: #3da78d;
  }

</style>