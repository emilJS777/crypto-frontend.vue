<template>
  <div class="legal_and_security_documents pb-5 mt-5">
    <h1 class="heading_darkBlue">Legal and Security Documents</h1>
    <div class="container">
      <div class="row mt-5">
        <div class="col-4 mt-4">
          <div class="block">
            <router-link to="/terms" class="text_big">
              <img :src="require('@/assets/icons/iconfinder_1-Document_2674100.png')" alt="">
              <p>Term of Use</p>
            </router-link>
          </div>
        </div>
        <div class="col-4 mt-4">
          <div class="block">
            <router-link to="/privacy" class="text_big">
              <img :src="require('@/assets/icons/iconfinder_document-content-article-letter-paper_3209352.png')" alt="">
              <p>Anty-Fraud Policy</p>
            </router-link>
          </div>
        </div>
        <div class="col-4 mt-4">
          <div class="block">
            <router-link to="/aml-kyc" class="text_big">
              <img :src="require('@/assets/icons/iconfinder_certificate-guarantee-award-document-assurance_3209368.png')" alt="">
              <p>AML/KYC Policy</p>
            </router-link>
          </div>
        </div>
        <div class="col-4 mt-4">
          <div class="block">
            <router-link to="/anti-fraud-policy" class="text_big">
              <img :src="require('@/assets/icons/iconfinder_shield-secured-anti-safe-protection_3209241.png')" alt="">
              <p>Anti-Fruad Policy</p>
            </router-link>
          </div>
        </div>
        <div class="col-4 mt-4">
          <div class="block">
            <router-link to="/refund-policy" class="text_big">
              <img :src="require('@/assets/icons/iconfinder_fast_money_refunding_4104744.png')" alt="">
              <p>Refund Policy</p>
            </router-link>
          </div>
        </div>
        <div class="col-4 mt-4">
          <div class="block">
            <router-link to="/payment-policy" class="text_big">
              <img :src="require('@/assets/icons/iconfinder_08.Credit-Card_290142.png')" alt="">
              <p>Payment Policy & Procedure</p>
            </router-link>
          </div>
        </div>
        <div class="col-4 mt-4">
          <div class="block">
            <router-link to="/risk-warning" class="text_big">
              <img :src="require('@/assets/icons/iconfinder_ic_attention_5803959.png')" alt="">
              <p>Risk Warning</p>
            </router-link>
          </div>
        </div>
        <div class="col-4 mt-4">
          <div class="block">
            <router-link to="/limits-commissions" class="text_big">
              <img :src="require('@/assets/icons/offer.png')" alt="">
              <p>Limits and Commissions</p>
            </router-link>
          </div>
        </div>
        <div class="col-4 mt-4">
          <div class="block">
            <router-link to="/cardholders-agreement" class="text_big">
              <img :src="require('@/assets/icons/credential.png')" alt="">
              <p>Agreement on the Storage of the Cardholder's Credentials</p>
            </router-link>
          </div>
        </div>
        <div class="col-4 mt-4">
          <div class="block">
            <router-link to="/listing-policy" class="text_big">
              <img :src="require('@/assets/icons/iconfinder_Cryptocurrency_Bitcoin_BTC_3287282.png')" alt="">
              <p>Listing Policy</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-legal-and-security-documents"
}
</script>

<style scoped>
  .legal_and_security_documents{
    padding-top: 95px;
    background-color: #f5f7fa;
  }
  h1{
    text-align: center;
  }
  .block{
    background-color: #fff;
    border-radius: 8px;
    height: 180px;
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
    width: 48px;
    height: auto;

  }
  .block > a > p{
    line-height: 1.5;
    font-size: 20px;
    position: absolute;
    bottom: 10px;
  }
</style>