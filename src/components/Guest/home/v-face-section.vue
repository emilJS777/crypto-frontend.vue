<template>
  <div class="face_section">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <h1 class="heading_lightBlue">A trusted and secure bitcoin exchange</h1>
          <p class="text_greey text_big">Your guide to the world of an open financial system. Get started with the easiest and most secure platform to buy and trade cryptocurrency.</p>
          <router-link to="register" class="btn btn-lg btn_blue">Get Started</router-link>
        </div>
        <div class="col-6">
          <img :src="require('@/assets/img/main.png')" alt="">
        </div>
        <div class="col-12 bottom_section">
          <div class="row">
            <div class="col-3"
              v-for="(info, index) in cardsInfo" :key="index">
              <div class="box_shadow">
                <h5 class="heading_darkBlue">{{ info.title }}</h5>
                <p class="text_greey">{{ info.description }}</p>
                <router-link to="/buysell" href="#">buy now</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-face_section",
  data(){
    return{
      cardsInfo:[
        {title: 'Buy crypto witch a card', description: '12Own Crypto in minutes using your card'},
        {title: 'Buy crypto witch a card', description: '3Own Crypto in minutes using your card'},
        {title: 'Buy crypto witch a card', description: 'Own Crypto in minutes using your card'},
        {title: 'Buy crypto witch a card', description: 'Own Crypto in minutes using your card'}
      ]
    }
  },
  components: {}
}
</script>

<style scoped>
  .face_section{
    margin-top: 20px;
    background-color: #f5f7fa;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .bottom_section{
    padding-top: 120px;
  }
  .bottom_section > div > div > div{
    background-color: #fff;
    padding: 10px;
    cursor: default;
    border-radius: 8px;
    transition: .3s;
    height: 100%;
    position: relative;
  }
  .bottom_section > div > div > div:hover{
    margin-top: -10px;
  }
  .bottom_section > div > div > div > h5{
    font-weight: bold;
    font-size: 18px;
  }
  .bottom_section > div > div > div > p{}
  .bottom_section > div > div > div > a{
    font-size: 15px;
    cursor: pointer;
    font-weight: bold;
    color: #5d706b;
  }
  .bottom_section > div > div > div > a::after{
    content: "\27A4";
    margin-left: 2px;
    transition: .2s;
  }
  .bottom_section > div > div > div > a:hover{
    color: #42a5a5;
  }
  .bottom_section > div > div > div > a:hover::after{
    margin-left: 5px;
  }
  .bottom_section > div > div > div::before{
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    bottom: 0;
    right: 0;
    background-image: url('~@/assets/img/creditcards.png');
    background-repeat: no-repeat;
    background-size: 90px 90px;
    opacity: .8;
  }

</style>