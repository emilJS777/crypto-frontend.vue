<template>
  <div class="licanses_sertificates mt-5 pt-5 pb-5">
    <h1 class="heading_darkBlue">Licenses and Certificates</h1>
    <div class="container">
      <div class="row mt-5">
        <div class="col-4 mt-4">
          <div class="block">
            <router-link to="/" class="text_big">
              <img src="https://static.cex.io/landings/media/incorporation-certificate.png" alt="">
              <p>Term of Use</p>
            </router-link>
          </div>
        </div>
        <div class="col-4 mt-4">
          <div class="block">
            <router-link to="/" class="text_big">
              <img src="https://static.cex.io/landings/media/incorporation-certificate.png" alt="">
              <p>Term of Use</p>
            </router-link>
          </div>
        </div>
        <div class="col-4 mt-4">
          <div class="block">
            <router-link to="/" class="text_big">
              <img src="https://static.cex.io/landings/media/incorporation-certificate.png" alt="">
              <p>Term of Use</p>
            </router-link>
          </div>
        </div>
        <div class="col-4 mt-4">
          <div class="block">
            <router-link to="/" class="text_big">
              <img src="https://static.cex.io/landings/media/incorporation-certificate.png" alt="">
              <p>Term of Use</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-licenses-and-certificates"
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .block{
    background-color: #fff;
    border-radius: 8px;
    height: 220px;
    display: flex;
    align-items: center;
    border: 1px solid #95bcbc;
  }
  .block > a{
    width: 100%;
    height: 100%;
    padding: 20px;
    color: #033d6b;
    position: relative;
  }
  .block > a:hover{
    color: #42a5a5;
    transition: .2s;
  }
  .block > a > img{
    width: 100px;
    height: auto;

  }
  .block > a > p{
    line-height: 1.5;
    font-size: 20px;
    position: absolute;
    bottom: 10px;
  }
</style>