<template>
  <div class="collections mt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <router-link to="/account/support/collections" v-for="(item, index) in collections" :key="index">
            <div>
              <div>
                <img :src=item.icon :title=item.title>
              </div>
              <div>
                <h5 class="heading_lightBlue">{{ item.title }}</h5>
                <div class="img_info_block">
                  <div class="img_icons">
                    <img v-for="(redactorImgs, i) in item.redactorsImgIcon" :key="i" :src=redactorImgs alt="">
                  </div>
                  <div class="info">
                    <span>{{ item.descLengthCollections }}</span>
                    <span>{{ item.descRedactorsNames }}</span>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-collections",
  props:['collections']
}
</script>

<style scoped>
a > div{
  width: 100%;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 6fr;
  height: 100px;
  color: initial;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
}
a > div > div:first-child{
  display: flex;
  align-items: center;
}
a > div > div:first-child > img{
  width: 40px;
  height: auto;
  margin: 0 auto;
  opacity: .5;
}
a > div > div > h5{
  margin-top: 15px;
  margin-bottom: 5px;
  font-weight: initial;
}
.img_info_block > *{
  display: inline-block;
  height: 100%;
}
.img_info_block > .img_icons{
  float: left;
}
.img_info_block > .img_icons > img{
  width: 34px;
  height: auto;
  border-radius: 50%;
  border: 2px solid#fff;
  margin-right: -8px;
}
.img_info_block p{
  line-height: 1;
  font-size: 12px;
}
.info > span{
  display: block;
  margin-left: 15px;
  line-height: 1.4;
  font-size: 12px;
  color: #4a4b4b;
  font-style: italic;
}
</style>