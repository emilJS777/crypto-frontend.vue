<template>
  <div class="container content mt-5 pt-5">
    <div class="row">
      <div class="col-3">
        <v-verification-info-block
          stage="STAGE ONE"
          name="Identity"
          img="https://cdn.identance.com/static/media/identity.f58a1372.jpg"
          smallDescription="Deposits up to $3,000/day and withdrawals up to $10,000"
          description="It's basic level of account verification on K7Crypto. To apply for it, fill out a short form and submit copies of your identity document. It’ll take up to 5 minutes of your time. Identity verification allows you to:"
          :unlock="true"
          :validDescription="['Instantly buy crypto using your debit/credit card;','Make unlimited card deposits and withdrawals of up to $10,000 daily;','Make unlimited deposits and withdrawals']"
          />
      </div>
      <div class="col-3">
        <v-verification-info-block
            stage="STAGE TWO"
            name="Address"
            img="https://cdn.identance.com/static/media/address.b591b232.jpg"
            smallDescription="Withdrawals up to $50,000 daily, bank transfers available"
            description="Address verification is a complete account verification level on CEX.IO. To apply for it, fill out a short application and provide a document confirming your residential address. It’ll take up to 5 minutes of your time.Address verification enables:"
            :unlock="false"
            :validDescription="['Multiple payment methods: apart from debit/credit cards and cryptocurrencies, you’ll be able to use domestic and international bank transfers;','Increased account limits: deposits of up to $10,000 daily and withdrawals of up to $50,000 daily.']"
            />
      </div>
      <div class="col-3">
        <v-verification-info-block
            stage="STAGE THREE"
            name="Enhanced"
            img="https://cdn.identance.com/static/media/enhanced.4b89dcf4.jpg"
            smallDescription="Unlimited deposits and withdrawals, custom trading conditions"
            description="Enhanced verification is only required if you need higher payment limits. Address verification is enough to access all trading tools and payment methods on CEX.IO. We may also ask you to pass Enhanced verification to meet KYC/AML requirements. To do so, you’ll need to provide documents confirming your source of income.Enhanced verification enables:"
            :unlock="false"
            :validDescription="['Multiple payment options: debit/credit card, bank transfer, cryptocurrency;','Unlimited deposits and withdrawals;','Custom trading conditions, including increased API request limits;','Priority support.']"
            />
      </div>
      <div class="col-3">
        <v-verification-info-block
            stage="STAGE FOUR"
            name="Corporate"
            img="https://cdn.identance.com/static/media/corporate.e1b00da4.jpg"
            smallDescription="Unlimited deposits and withdrawals, corporate account"
            description="This type of account is for corporations that use virtual currencies for their business. To apply for corporate verification, you’ll need to fill out the application form and attach the documents about your company. Corporate verification enables:"
            :unlock="false"
            :validDescription="['Multiple payment options: debit/credit cards, domestic and international bank transfers, cryptocurrencies;','Multiple payment options: debit/credit cards, domestic and international bank transfers, cryptocurrencies;']"
            />
      </div>
    </div>
  </div>
</template>

<script>
import VVerificationInfoBlock from "./v-verification-info-block";
export default {
name: "v-content",
  components: {VVerificationInfoBlock}
}
</script>

<style scoped>

</style>