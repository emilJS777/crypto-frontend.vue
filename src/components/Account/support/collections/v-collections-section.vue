<template>
  <div class="collections mt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <h6 class="text_greey">
            <router-link to="/account/support" class="text_greey"> Back</router-link>
          </h6>
          <section>
            <div>
              <div>
                <img :src="require('@/assets/icons/iconfinder_icons_user_1564534.png')" title>
              </div>
              <div>
                <h5 class="heading_lightBlue">Account</h5>
                <div class="img_info_block">
                  <div class="img_icons">
                    <img src="https://static.intercomassets.com/avatars/4338725/square_128/photo_2020-08-27_10-53-51-1598514885.jpg?1598514885" alt="">
                  </div>
                  <div class="info">
                    <span>25 articles in this collection</span>
                    <span>Written by Yurii V. and Rick Alexsson</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="collection box_shadow">
              <router-link to="/account/support/info" class="">
                <div class="collection_block">
                  <h6 class="heading_light_blue">The following countries are currently not supported by K7</h6>
                  <div class="img_info_block">
                    <div class="img_icons">
                      <img src="https://static.intercomassets.com/avatars/4338725/square_128/photo_2020-08-27_10-53-51-1598514885.jpg?1598514885" alt="">
                    </div>
                    <div class="info">
                      <span>25 articles in this collection</span>
                      <span>Written by Yurii V. and Rick Alexsson</span>
                    </div>
                  </div>
                </div>
              </router-link>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-collections-section",
  props:["collections"]
}
</script>

<style scoped>
section{
  background-color: #42a5a5;
  padding-bottom: 30px;
}
section > div{
  width: 100%;
  background-color: #42a5a5;
  display: grid;
  grid-template-columns: 1fr 6fr;
  color: initial;
  border-radius: 8px;
  margin-top: 20px;
  padding: 40px;
}
section > div > div:first-child, a> div > div:first-child{
  display: flex;
  align-items: center;
}
section > div > div:first-child > img,a > div > div:first-child > img{
  width: 40px;
  height: auto;
  margin: 0 auto;
  opacity: .5;
}
section> div > div > h5{
  margin-top: 15px;
  margin-bottom: 5px;
  font-weight: initial;
  color: #ffff;
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
  border: 2px solid #e9e9e9;
  margin-right: -8px;
}
.img_info_block p{
  line-height: 1;
  font-size: 14px;
  color: #fff;
}
.info > span{
  display: block;
  margin-left: 15px;
  line-height: 1.4;
  font-size: 12px;
  font-style: italic;
  color: #fff;
}
/*collection*/
.collection_block > h6{
  display: block;
  color: #4a4b4b;
  font-weight: bold;
}
.collection{
  display: block;
  background-color: #efeeee;
  color: initial;
  width: 80%;
  border-radius: 0;
  margin: 10px auto;
  padding: 30px;

}
.collection_block {
  height: inherit;
}
.collection_block span{
  color: #1d345d;
}
</style>