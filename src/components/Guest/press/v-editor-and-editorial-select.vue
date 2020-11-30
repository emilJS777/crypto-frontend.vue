<template>
  <div class="editions_block mt-5">
    <div class="container mt-5">
      <div class="row">
<!--        redactor info & select block-->
        <div class="col-6 editor_block">
          <div class="img_block">
            <img src="https://static.cex.io/landings/media/2x-author.png" alt="">
          </div>
          <div class="info_block">
              <span class="text_greey text_small">For inquiries:</span>
              <p class="heading_darkBlue">Alona Dobshynska</p>
              <a href="#">a.dobshynska@k7.clan</a>
          </div>
        </div>
        <div class="col-4 offset-2 select_block">
          <select class="custom-select">
            <option value="1">All Editions</option>
          </select>
        </div>
      </div>
<!--      editions block-->
        <v-edition :editions="editions"/>
    </div>
  </div>
</template>

<script>
import VEdition from "@/components/Guest/press/v-edition";
export default {
  name: "v-editions",
  components: {VEdition},
  data(){
    return{
      editions:[
        {
          imgTitleUrl: "https://static.cex.io/landings/media/amb-crypto.png",
          date: "September 25,2020",
          description: "CEX.IO to Provide One-Click DeFi Access, Lists New Tokens, and Offers Instant 0% Fee Visa Deposit",
          urlHref: "/"
        },
        {
          imgTitleUrl: "https://static.cex.io/landings/media/be-in-crypto.svg",
          date: "September 25,2020",
          description: "CEX.IO to Provide One-Click DeFi Access, Lists New Tokens, and Offers Instant 0% Fee Visa Deposit",
          urlHref: "/"
        },
        {
          imgTitleUrl: "https://static.cex.io/landings/media/bit-crypto-news.svg",
          date: "September 25,2020",
          description: "CEX.IO to Provide One-Click DeFi Access, Lists New Tokens, and Offers Instant 0% Fee Visa Deposit",
          urlHref: "/"
        },
        {
          imgTitleUrl: "https://static.cex.io/landings/media/bitcoin-com.svg",
          date: "September 25,2020",
          description: "CEX.IO Cryptoexchange Makes CryptoCompare Top 10",
          urlHref: "/"
        }
      ]
    }
  }
}
</script>

<style scoped>
  .editor_block > div{
    display: inline-block;
    margin-right: 20px;
  }
  .img_block{
    width: 75px;
    height: 75px;
    border-radius: 50%;
    overflow: hidden;
  }
  .img_block > img{
    width: 100%;
    height: 100%;
  }
  .editor_block > .info_block > *{
    line-height: 2;
    margin: 0;
  }
  .editor_block > .info_block > p{
    font-size: 18px;
  }
  .editor_block > .info_block > a{
    text-decoration: underline !important;
    color: #42a5a5;
  }
  .select_block{
    display: flex;
    align-items: center;
  }
  .select_block > select{
    font-size: 20px;
    color: #033d6b;
  }

</style>