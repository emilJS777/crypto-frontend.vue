<template>
  <div class="lag_switcher_block">
    <div class="head_block" @click="isVisible = !isVisible" >
      <img :src="langs[activeLang].img" alt="">
      <span class="text_normal">{{langs[activeLang].name}}</span>
    </div>
    <div class="toggle_block" v-if="isVisible">
      <div class="lang_block" v-for="(lang, index) in langs"  :key="index" @click="toggleLang(index)">
        <img :src="lang.img" alt="">
        <span class="text_normal" >{{lang.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "index",

  data() {
    return {
      isVisible: false,
      activeLang: 1,
      langs: [
        {
          name: 'EN',
          img: require('@/assets/img/flags/flag_bt.png'),
          code: 'Us',
        },
        {
          name: 'RU',
          img: require('@/assets/img/flags/russia.png'),
          code: 'Ru',
        },
        {
          name: 'FR',
          img: require('@/assets/img/flags/france.png'),
          code: 'ES',
        }
      ]
    };
  },
  methods:{
    toggleLang:function(index){
      this.activeLang = index;
      this.isVisible = !this.isVisible;
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.lag_switcher_block{
  align-items: center;
  height: 100%;
  width: 70px;
  position: relative;
  padding: 3px;
  display: inline-block;
  float: right;
}
.head_block{
  display: flex;
  padding: 5px;
  align-items: center;
  cursor: pointer;
  border: 1px solid #eeeeee;
  height: 100%;
  position: relative;
  line-height: 1;
  background-color: #efefef;
}
.head_block > span{
  font-size: 12px;
}
.head_block:hover{
  background-color: #f6f6f6;
}
.head_block:after{
  content: '\27A4';
  position: absolute;
  right: 8px;
  width: 5px;
  height: auto;
  font-size: 8px;
  transform: rotate(90deg);
  margin-left: 5px;
}
.toggle_block{
  position: absolute;
  width: 100%;
  top: 95%;
  left: 0;
  padding: 0 3px;
  z-index: 10;
}
.lang_block{
  background-color: #eaeaea;
  text-align: center;
  padding: 5px 0;
  width: 100%;
  margin-top: 1px;
  cursor: pointer;
  
}
.lang_block > span{
  font-size: 12px;
}
.lang_block:hover{
  background-color: #fff;
}
span{
  margin-left: 3px;
}
   img{
    width: 16px;
    height: auto;
  }
</style>