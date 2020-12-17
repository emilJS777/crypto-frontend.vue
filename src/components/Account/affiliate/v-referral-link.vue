<template>
  <div class="referral_link">
    <h5 class="heading_lightBlue text-center">Invite users to K7.Crypto and earn 30% of the fee on their exchange transactions!</h5>
    <div class="referral_link_block mt-5">
      <h6 class="heading_darkBlue">Your personal referral link:</h6>
      <div class="input_block">
        <input type="text" disabled="disabled" value="https://k7.crypto/r/0/up133935344/0/">
        <button class="btn btn_blue">COPY</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-referral-link"
}
</script>

<style scoped>
  .referral_link_block{
    text-align: center;
    background-color: #f5f4f4;
    padding: 25px;
  }
  .input_block{
    border: 1px solid #ccc;
    padding: 5px;
    width: 350px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 1em;
  }
  .input_block > input{
    background-color: initial;
    border: 0;
    font-size: 14px;
  }
  .input_block > button{
    border-radius: 0;
  }
</style>