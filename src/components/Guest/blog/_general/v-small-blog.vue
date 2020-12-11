<template>
  <div class="small_blog mt-2">
    <router-link to="/blog/certain-blog">
      <div class="blog_img">
        <img src="https://blog.cex.io/wp-content/uploads/2019/05/Digest-B-1080x675.jpg" alt="">
      </div>
      <div class="heading_block mt-3">
        <h3 class="heading_darkBlue">Media about us — October, 2020</h3>
        <span>by Nadya, K7Crypto Product Team | Nov 10, 2020</span>
      </div>
    </router-link>
    <div class="description_block">
      <p class="text_big">
        October has been busy with all sorts of events: the
        main cryptocurrency tested the support levels all the time,
        Defi gained wide popularity among various market participants,
        US Presidential elections took the headlines and impacted
        the markets. And this all has been...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-small-blog"
}
</script>

<style scoped>
  .small_blog{
    padding: 30px;
  }
  .blog_img{
    width: 100%;
    height: 500px;
  }
  .blog_img > img{
    width: 100%;
    height: 100%;
  }
  .heading_block > span{
    color: #a1a2a1;
  }
  .description_block{
    margin-top: 20px;
  }
  .description_block > p{
    color: #3f4140;
  }
</style>