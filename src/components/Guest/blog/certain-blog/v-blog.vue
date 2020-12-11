<template>
  <div class="blog mt-2">
      <div class="blog_img">
        <img src="https://crystalwebtechs.com/wp-content/uploads/2016/12/blog-img-2.jpg" alt="">
      </div>
      <div class="heading_block mt-3">
        <h3 class="heading_darkBlue">Media about us — October, 2020</h3>
        <span>by Nadya, K7Crypto Product Team | Nov 10, 2020</span>
      </div>
    <router-link class="btn btn_blue" to="/login">Visit K7 Crypto</router-link>
    <div class="description_block">
      <h2 class="subheading">What problem does Golem solve?</h2>
      <p class="text_big">
        October has been busy with all sorts of events: the
        main cryptocurrency tested the support levels all the time,
        Defi gained wide popularity among various market participants,
        US Presidential elections took the headlines and impacted
        the markets. And this all has beenOctober has been busy with all sorts of events: the
        main cryptocurrency tested the support levels all the time,
        Defi gained wide popularity among various market participants,
        US Presidential elections took the headlines and impacted
        the markets. And this all has been
      </p>
    </div>
    <div class="description_block">
      <h2 class="subheading">What problem does Golem solve?</h2>
      <p class="text_big">
        October has been busy with all sorts of events: the
        main cryptocurrency tested the support levels all the time,
        Defi gained wide popularity among various market participants,
        US Presidential elections took the headlines and impacted
        the markets. And this all has beenOctober has been busy with all sorts of events: the
        main cryptocurrency tested the support levels all the time,
        Defi gained wide popularity among various market participants,
        US Presidential elections took the headlines and impacted
        the markets. And this all has been
      </p>
    </div>
    <div class="nav">
      <h6>Join our official Telegram groups:</h6>
      <ul>
        <li>English: <a href="#">https://localhost:8080</a></li>
        <li>Russian: <a href="#">https://localhost:8080</a></li>
      </ul>
    </div>
    <div class="social_block">
      <a href="#">
        <img :src="require('@/assets/icons/social/iconfinder_twitter-social-media_765208.png')" alt="">
      </a>
      <a href="#">
        <img :src="require('@/assets/icons/social/iconfinder_facebook-social-media_765252.png')" alt="">
      </a>
      <a href="#">
        <img :src="require('@/assets/icons/social/iconfinder_linkedin-social-media_765228.png')" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-blog"
}
</script>

<style scoped>
.blog{
  padding: 30px;
}
.blog_img{
  width: 100%;
  height: 500px;
}
.blog > a{
  display: table;
  margin: 40px auto;
  font-size: 26px;
}
.blog_img > img{
  width: 100%;
  height: 100%;
}
.heading_block > span{
  color: #a1a2a1;
}
.description_block{
  margin-top: 40px;
}
.description_block > p{
  color: #3f4140;
}
.subheading{
  position: relative;
  color: #666464;
}
.subheading:before{
  content: '📌';
  font-size: 30px;
  margin-right: 10px;
}
.nav{
  margin-top: 30px;
}
.nav > h6{
  font-weight: bold;
  display: block;
  width: 100%;
}
.nav > ul{
  padding-left: 20px;
}
.nav > ul > li{
  list-style: initial;
  cursor: initial;
  font-size: 17px;
}
.nav > ul > li > a{
  color: #42a5a5;
}
.social_block{
  display: table;
  margin: 50px;
  float: right;
  height: 40px;
}
.social_block > a{
  border: 1px solid #c2c3c3;
  border-radius: 50%;
  margin: 10px;
  display: inline-block;
}
.social_block > a:hover{
  background-color: #e3e3e3;
}
.social_block img{
  width: 40px;
  height: auto;
}
</style>