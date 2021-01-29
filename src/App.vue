<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {
    }
  }
</script>

<style>

   *{
     margin: 0;
     padding: 0;
     text-decoration: none !important;
   }
   .btn{
     border: 0;
     cursor: pointer;
     transition: .3s;
     color: #fff !important;
   }
   .btn_blue{
     background-color: #42a5a5 !important;
   }
   .btn_darkBlue{
     background-color: #053e6c !important;
   }
   .text_big{
     font-size: 20px;
   }
   .text_normal{
     font-size: 15px;
   }
   .text_small{
     font-size: 12px;
   }
   .text_greey{
     color: #acaaaa;
   }
   .hidden{
     display: none;
   }
   .heading_lightBlue{
     color: #42a5a5;
     font-weight: bold;
   }
   .heading_darkBlue{
     color: #063565;
     font-weight: bold;
   }
   .box_shadow{
     -webkit-box-shadow: 0px 2px 13px 4px rgba(0,0,0,0.10);
     box-shadow: 0px 2px 13px 4px rgba(0,0,0,0.10);
   }
   .box_shadow_bottom{
     -webkit-box-shadow: 0px 10px 13px -7px rgba(0,0,0,0.20);;
     box-shadow: 0px 10px 33px -7px rgba(0,0,0,0.20);
   }
   .box_shadow_hover:hover{
     -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
     box-shadow: 0px 10px 13px -10px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
     transition: .3s;
   }

   img{
     width: 100%;
     height: 100%;
   }
   ul{
     cursor: default;
   }
   li{
     list-style: none;
     cursor: pointer;
   }
   /*VUE CAROUSEL*/
   .VueCarousel-navigation{
     position: absolute;
     width: 100%;
     top: -40px;
   }
   .VueCarousel-navigation-button{
     color: #42a5a5 !important;
     font-size: 30px;
   }
   .VueCarousel-navigation-next{
     margin-right: 80px;
   }
   .VueCarousel-navigation-prev{
     margin-left: 80px;
   }
   .VueCarousel-pagination{
     height: 50px !important;
   }
   .VueCarousel-dot{
     width: 20px !important;
     height: 20px !important;
   }
   .VueCarousel-dot[aria-selected=true]{
     background-color: #42a5a5 !important;
   }
/*  style with datepicker */
   .datepicker_block input{
     font-size: 14px !important;
     color: #445f5f;
     font-style: italic;
     border: 0 !important;
     line-height: 2 !important;
     padding: 1px !important;
     background-color: initial;
     height: 100% !important;
     cursor: pointer;
   }
   .datepicker_block span{
     display: none;
   }
   .datepicker_block span::after,
   .datepicker_block span::before{
     background-color: #42a5a5 !important;
   }
   .datepicker_block span::before{
     display: none;
   }
   .datepicker_block .start-date > .calendar-cell__content,
   .datepicker_block .end-date > .calendar-cell__content{
     background-color: #42a5a5 !important;
   }
   .datepicker_block label{
     color: #a7a6a6 !important;
     font-size: 12px !important;
     top: -8px !important;
   }
   .datepicker_block .mdrp-root,
   .datepicker_block .mdrp__activator,
   .datepicker_block .activator-wrapper{
     height: 100%;
   }
   select:focus{
     outline: 0;
   }
</style>
