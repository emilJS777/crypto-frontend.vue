<template>
  <div class="upload container-fluid">
    <h6 class="heading_lightBlue mt-3">Security</h6>
    <div class="row">
        <div class="block">
          <div>
              <div>
                <div>
<!--                  icon-->
                </div>
                <p>Set Alternative Email</p>
                <p>+ 20 %</p>
              </div>
          </div>
          <div>
              <div>
                <p>Current security score:</p>
                <span class="text_big">45 %</span>
                <div class="progress_block">
                  <div class="progress"></div>
                </div>
              </div>
          </div>
          <div>
            <div>
              <div>
<!--                icon-->
              </div>
              <p>Enable 2FA</p>
              <p>+ 35 %</p>
            </div>
          </div>
        </div>
    </div>
    <h6 class="heading_lightBlue mt-5">Two-Factor Authentication</h6>
    <div class="row">
      <div class="two_factor">
        <div class="info_block">
          <div class="info">
            <h6 class="heading_darkBlue">Warning!</h6>
            <p class="text_normal">
              Your account is not secure, hence it can be easily hacked. We highly recommend you to activate Two-Factor Authentication, which will provide maximum protection to your financial assets!
            </p>
          </div>
          <img :src="require('@/assets/img/main.png')" alt="">
        </div>
        <div class="info_block">
          <div class="info">
            <h6 class="heading_darkBlue">Two-Factor Authentication (2FA)</h6>
            <p class="text_normal">
              is the most advanced security system, which adds an extra protection to your account, preventing unauthorized access.
            </p>
          </div>
          <img :src="require('@/assets/img/main.png')" alt="">

          <a href="#" class="btn btn_blue">Enable 2FA</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "v-security"
}
</script>

<style scoped>
h6{
  font-weight: initial;
  letter-spacing: 2px;
}
.block{
  padding: 30px;
  border: 1px solid #d2d8d8;
  border-radius: 6px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3em;
}
.block > div > div{
  text-align: center;
}
.block > div > div p{
  line-height: 1;
  margin-top: 15px;
  color: #656969;
  font-size: 25px;
}
.block > div > div > div{
  width: 30px;
  height: 30px;
  background-color: #42a5a5;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
}
.block > div:nth-child(2) > div > span:nth-child(2){
  background-color: #9c9f9f;
  color: #f6f6f6;
  font-weight: bold;
  padding: 5px;
  font-size: 30px;
  border-radius: 8px;
}
.block > div > div > .progress_block{
  width: 100%;
  height: 20px;
  border-radius: 8px;
  margin-top: 10px;
  overflow: hidden;
  background-color: #f6f6f6;
  border: 1px solid#9c9f9f;
}
.block > div > div > .progress_block > .progress{
  width: 45%;
  height: 100%;
  background-color: #42a5a5;
}

/*two factor*/
.two_factor{
  width: 100%;
  position: relative;
}
.two_factor > .info_block a{
  position: absolute;
  font-size: 25px;
  top: -25px;
  left: 50%;
  right: 50%;
  width: 200px;
  transform: translateX(-50%);
}
.two_factor > .info_block{
  display: block;
  height: 400px;
  width: 100%;
  position: relative;
  background-color: #dedddd;
}
.two_factor > .info_block .info{
  width: 300px;
  text-align: center;
  padding-top: 50px;
  padding-left: 50px;
  color: #535252;
}
.two_factor > .info_block:first-child{
  border-bottom: 2px solid #f6f6f6;
}
.two_factor > .info_block:last-child > .info{
  width: 100%;
}
.two_factor > .info_block img{
  width: 50%;
  height: auto;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%,-50%);
}

</style>