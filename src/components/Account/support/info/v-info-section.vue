<template>
  <div class="info_section container">

    <div class="info_block mt-5">
      <h6 class="text_greey">
        <router-link to="/account/support/collections" class="text_greey"> Back</router-link>
      </h6>
      <h2 class="heading_lightBlue mt-3 mb-4">The following countries are currently not supported by K7</h2>
      <div class="img_info_block">
        <div class="img_icon">
          <img src="https://static.intercomassets.com/avatars/4338725/square_128/photo_2020-08-27_10-53-51-1598514885.jpg?1598514885" alt="">
        </div>
        <div class="info">
          <span>Written by Rick Alexsson</span>
          <span>Updated over a week ago</span>
        </div>
      </div>
      <div class="subheader_desc">
        <p class="text_big text_greey">
          welcomes clients from all over the world, with some exceptions due to international and local regulations
        </p>
        <p class="text_big text_greey">
          Here is the list of countries and regions, which K& currently doesn’t support:
        </p>
      </div>
      <ul>
        <li>Sri Lanka</li>
        <li>Iraq</li>
        <li>Afganistan</li>
        <li>Cuba</li>
        <li>Asia</li>
        <li>Sri Lanka</li>
        <li>Iraq</li>
        <li>Afganistan</li>
        <li>Cuba</li>
        <li>Asia</li>
        <li>Sri Lanka</li>
        <li>Iraq</li>
        <li>Afganistan</li>
        <li>Cuba</li>
        <li>Asia</li>
      </ul>
      <div class="footer_info">
        <p class="text_greey">
          serves US residents in 47 states and Washington DC. However, CEX.IO Staking is currently not available to US customers.
        </p>
        <p class="text_greey">
          serves US residents in 47 states and Washington DC. However, CEX.IO Staking is currently not available to US customers.
        </p>
      </div>
      <div class="smails_block">
        <h6 class="heading_lightBlue">Did this answer your question?</h6>
        <div class="smails">
          <a href="#">
            <img :src="require('@/assets/icons/iconfinder_happy_2299783.png')" alt="">
          </a>
          <a href="#">
            <img :src="require('@/assets/icons/iconfinder_angry_2299777.png')" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-info-section"
}
</script>

<style scoped>
.info_section{

}
.info_block{
  padding:60px;
  display: block;
  width: 80%;
  margin: 0 auto;
  background-color: #fff;
}
.img_info_block{
  display: grid;
  grid-template-columns: 1fr 5fr;
  width: 200px;
}
.img_info_block img{
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
}
.img_info_block span{
  display: block;
  font-size: 13px;
  line-height: 1.3;
  color: #4a4b4b;
}
.subheader_desc{
  color: #4a4b4b;
  line-height: 1.6;
  margin-top: 35px;
}
ul{
  padding-left: 20px;
}
ul li{
  list-style: initial;
  color: #656d6d;
  font-weight: bold;
  margin-top: 20px;
  font-style: italic;
  cursor: initial;
}
.footer_info p{
  font-size: 19px;
}
.smails_block {
  background-color: #eeefef;
}
.smails_block > h6 {
  text-align: center;
  padding: 10px;
}
.smails{
  display: table;
  margin: 0 auto;
  padding-bottom: 20px;
}
.smails a:hover img{
  background-color: #f8f8f8;

}
.smails img{
  transition: .3s;
  width: 50px;
  height: 50px;
  display: inline-block;
  margin-right: 10px;
  padding: 10px;
}
</style>