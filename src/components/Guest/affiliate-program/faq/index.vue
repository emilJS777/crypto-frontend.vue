<template>
  <div class="faq content">
    <v-header/>
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-8 offset-2">
          <v-faq
              question="How does the CEX.IO Affiliate Program work?"
              answer="CEX.IO rewards you for inviting new customers to our platform.
You can share your personal referral link by simply copying it. You can also use the landing page you want to direct users to and place banners on your website or blog. Once someone registers on CEX.IO using your referral link and makes a trade, you’ll get 30% of their commissions. This reward will automatically be added to your USD balance in 30 days; the reward amount will be calculated in USD equivalent at the moment the qualifying transaction is completed."
          />
          <v-faq
              question="How can I sign up for the CEX.IO Affiliate Program?"
              answer="To participate in our Affiliate Program, you just need to be a CEX.IO customer. Once you open an account, you can generate and share your personal referral link."
          />
          <v-faq
              question="How can I qualify for this program?"
              answer="All CEX.IO customers, bloggers, influencers, publishers, and content creators with a qualifying website or mobile app can participate in the CEX.IO Affiliate Program."
          />
          <v-faq
              question="How does the CEX.IO Affiliate Program work?"
              answer="CEX.IO rewards you for inviting new customers to our platform.
You can share your personal referral link by simply copying it. You can also use the landing page you want to direct users to and place banners on your website or blog. Once someone registers on CEX.IO using your referral link and makes a trade, you’ll get 30% of their commissions. This reward will automatically be added to your USD balance in 30 days; the reward amount will be calculated in USD equivalent at the moment the qualifying transaction is completed."
          />
          <v-faq
              question="How can I sign up for the CEX.IO Affiliate Program?"
              answer="To participate in our Affiliate Program, you just need to be a CEX.IO customer. Once you open an account, you can generate and share your personal referral link."
          />
          <v-faq
              question="How can I qualify for this program?"
              answer="All CEX.IO customers, bloggers, influencers, publishers, and content creators with a qualifying website or mobile app can participate in the CEX.IO Affiliate Program."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VHeader from "../../_general/v-header";
import VFaq from "../../../_general/staking/v-faq";
export default {
name: "index",
  components: {VFaq,VHeader}
}
</script>

<style scoped>
.content{
  background-color: #f3f3f3;
  min-height: 100vh;
}
.faq{

  border-bottom: 1px solid #d6d6d6;
}
</style>