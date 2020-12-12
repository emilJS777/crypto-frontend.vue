<template>
  <div class="to_started_verification mt-5">
    <div class="heading">
      <h6>Verify your identity to use this payment method</h6>
      <p>Your account limits will be also increased after successful verification.</p>
    </div>
    <div class="desc_block">
      <div>
        <h6>Secure</h6>
        <span>
          All provided information
          is encrypted and securely
          stored
        </span>
      </div>
      <div>
        <h6>Simple</h6>
        <span>
          All provided information
          is encrypted and securely
          stored
        </span>
      </div>
      <div>
        <h6>Compliant</h6>
        <span>
          All provided information
          is encrypted and securely
          stored
        </span>
      </div>
    </div>
    <router-link to="/account/verification" class="btn btn_blue mt-4">Start Verification</router-link>
  </div>
</template>

<script>
export default {
  name: "v-to-started-verification"
}
</script>

<style scoped>
.to_started_verification{
  background-color: #e0e0e0;
  padding: 30px 50px;
}
.to_started_verification > .heading >*{
  text-align: center;
  font-weight: bold;
}
.heading > h6{
  color: #808080;
}
.heading > p{
  color: #a5a5a5;
}

.desc_block{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
}

.desc_block h6{
  color: #42a5a5;
}
.desc_block span{
  color: #5d706b;
  font-size: 13px;
  line-height: 1;
}
.to_started_verification a{
  padding: 10px 40px;
  font-size: 20px;
  display: table;
  border-radius: 0;
  margin: 0 auto;
}
</style>