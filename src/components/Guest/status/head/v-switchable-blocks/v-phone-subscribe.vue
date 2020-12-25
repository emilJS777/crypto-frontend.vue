<template>
  <div class="phone_subscribe">
    <div class="desc_block">
      <p class="text_small">
        Get text message notifications whenever K7Crypto creates or resolves an incident.
      </p>
    </div>
    <form action="">
      <select name="phone" class="form-control custom-select">
        <option value="">United Kingdom (+44)</option>
        <option value="">United Kingdom (+44)</option>
      </select>
      <input type="text" class="form-control" placeholder="ex. 6505551234">
      <button class="btn btn_blue form-control">SUBSCRIBE VIA TEXT MESSAGE</button>
    </form>
    <p class="text_small text_greey mt-3">
      Message and data rates may apply. By subscribing Atlassian
      <a href="https://www.atlassian.com/legal/cloud-terms-of-service">Cloud Terms of Service</a>.
      This site is protected by reCAPTCHA and the Google
      <a href="https://policies.google.com/privacy">Privacy Policy </a>
      and
      <a href="https://policies.google.com/terms">Terms of Service</a>
      apply.
    </p>
  </div>
</template>

<script>
export default {
name: "v-phone-subscribe"
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