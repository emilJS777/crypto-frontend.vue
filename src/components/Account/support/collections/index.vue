<template>
  <div id="collections">
    <v-header/>
    <v-collections-section :collections="collections"/>
  </div>
</template>

<script>
import VHeader from "../_general/v-header";
import VCollectionsSection from "./v-collections-section";
export default {
name: "index",
  components: {VCollectionsSection, VHeader},
  data(){
    return{
      collections:[
        {
          title: "Account", descLengthCollections: '4 articles in this colllection',
          descRedactorsNames: 'Written in the by jessica & msagorc sako',
          icon: require('@/assets/icons/iconfinder_icons_user_1564534.png'),
          redactorsImgIcon: ['https://static.intercomassets.com/avatars/4359217/square_128/photo_2020-09-14_14.39.39-1600083590.jpeg?1600083590','https://static.intercomassets.com/avatars/4380557/square_128/photo_2020-09-22_13.42.48-1600771389.jpeg?1600771389', 'https://static.intercomassets.com/avatars/4337689/square_128/Screenshot_2020-10-22_at_15.31.35-1603369912.png?1603369912']
        },
        {
          title: "Buy Crypto with card", descLengthCollections: '4 articles in this colllection',
          descRedactorsNames: 'Written in the by jessica & msagorc sako',
          icon: require('@/assets/icons/iconfinder_currency_2318459.png'),
          redactorsImgIcon: ['https://static.intercomassets.com/avatars/4359217/square_128/photo_2020-09-14_14.39.39-1600083590.jpeg?1600083590','https://static.intercomassets.com/avatars/4380557/square_128/photo_2020-09-22_13.42.48-1600771389.jpeg?1600771389']
        },
        {
          title: "Finance", descLengthCollections: '4 articles in this colllection',
          descRedactorsNames: 'Written in the by jessica & msagorc sako',
          icon: require('@/assets/icons/iconfinder_dollar_coins_6137575.png'),
          redactorsImgIcon: ['https://static.intercomassets.com/avatars/4359217/square_128/photo_2020-09-14_14.39.39-1600083590.jpeg?1600083590','https://static.intercomassets.com/avatars/4380557/square_128/photo_2020-09-22_13.42.48-1600771389.jpeg?1600771389']
        },
        {
          title: "Glossary", descLengthCollections: '4 articles in this colllection',
          descRedactorsNames: 'Written in the by jessica & msagorc sako',
          icon: require('@/assets/icons/iconfinder_11.Notebook_290139.png'),
          redactorsImgIcon: ['https://static.intercomassets.com/avatars/4359217/square_128/photo_2020-09-14_14.39.39-1600083590.jpeg?1600083590','https://static.intercomassets.com/avatars/4380557/square_128/photo_2020-09-22_13.42.48-1600771389.jpeg?1600771389']
        },
        {
          title: "Mobile App", descLengthCollections: '4 articles in this colllection',
          descRedactorsNames: 'Written in the by jessica & msagorc sako',
          icon: require('@/assets/icons/iconfinder_mobile-phone-smartphone-handphone-gadget_3643758.png'),
          redactorsImgIcon: ['https://static.intercomassets.com/avatars/4359217/square_128/photo_2020-09-14_14.39.39-1600083590.jpeg?1600083590','https://static.intercomassets.com/avatars/4380557/square_128/photo_2020-09-22_13.42.48-1600771389.jpeg?1600771389']
        },
        {
          title: "Trading", descLengthCollections: '4 articles in this colllection',
          descRedactorsNames: 'Written in the by jessica & msagorc sako',
          icon: require('@/assets/icons/iconfinder_forex_trade_chart_stock_diagram_graph-_48_7217723.png'),
          redactorsImgIcon: ['https://static.intercomassets.com/avatars/4359217/square_128/photo_2020-09-14_14.39.39-1600083590.jpeg?1600083590','https://static.intercomassets.com/avatars/4380557/square_128/photo_2020-09-22_13.42.48-1600771389.jpeg?1600771389']
        }
      ]
    }
  }
}
</script>

<style scoped>
#collections{
  background-color: #f3f3f3;
  padding-bottom: 40px;
}
</style>