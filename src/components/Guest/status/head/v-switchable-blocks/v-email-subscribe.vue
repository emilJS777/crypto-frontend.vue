<template>
  <div class="email_subscribe">
    <div class="desc_block">
      <p class="text_small">
        Get email notifications whenever K7 Crypto creates, updates or resolves an incident.
      </p>
    </div>
    <form action="">
      <input type="text" class="form-control" placeholder="Email Address">
      <button class="btn btn_blue form-control">SUBSCRIBE VIA EMAIL</button>
    </form>
    <p class="text_small text_greey mt-3">
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy">Privacy Policy</a>
      and
      <a href="https://policies.google.com/terms">Terms of Service</a>
      apply.
    </p>
  </div>
</template>

<script>
export default {
  name: "v-email-subscribe"
}
</script>

<style scoped>
form{
  margin-top: 10px;
}
input{
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>