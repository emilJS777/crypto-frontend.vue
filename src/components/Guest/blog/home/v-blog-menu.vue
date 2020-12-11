<template>
  <div class="blog_menu col-4 mt-2 mb-4">
    <router-link to="/blog/certain-blog" class="box_shadow">
      <div class="img_head">
        <img src="https://blog.cex.io/wp-content/uploads/2020/11/blog-400x250.png" alt="">
        <div class="subheader">
          <h4>Annouccement Trading upcomming cash Hard cash</h4>
          <div class="info_date">
            <span>buy, naya PRODUCT Team Nov, 09 2020 News market product</span>
          </div>
        </div>
      </div>
      <div class="description">
        <p>
          The Bitcoin Cash (BCH) network is to have a hard fork on November 15. We expect the hard
          fork that may result in the current BCH network split and the creation of an additional
          token. If that happens, K7
          will support it and credit a new coin to customers’ balance at a 1:1 ratio.
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
name: "v-blog-menu"
}
</script>

<style scoped>
  .blog_menu{

  }
  .img_head > img{
    width: 100%;
    height: 220px;
  }
  a{
    background-color: #fefefe;
    color: initial;
    display: table;
    padding: 10px;
  }
  .subheader{
    color: #0b364f;
    margin-top: 10px;
  }
  .info_date{
    font-size: 13px;
    color: #5d706b;
    font-style: italic;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .description{
    font-size: 17px;
    color: #393939;
  }
</style>