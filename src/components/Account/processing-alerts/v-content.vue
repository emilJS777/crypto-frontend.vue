<template>
  <div class="content">
    <h3 class="heading_darkBlue mt-4 text-center">Notification Center</h3>
    <img src="https://cex.io/img/icons/all-done.svg" alt="">
    <h5 class="heading_darkBlue text-center">
      All done here! Currently, you don't have any active verification requests.
    </h5>
    <p class="text_big text_greey text-center">
      You can buy <router-link to="/account/buysell">cryptocurrencies</router-link>
      or <router-link to="/account/deposit-withdraw">Withdraw</router-link>
      your funds.
    </p>
  </div>
</template>

<script>
export default {
name: "v-content"
}
</script>

<style scoped>
  img{
    width: 200px;
    height: auto;
    display: block;
    margin: 40px auto;
  }
  a{
    color: #42a5a5;
    font-weight: bold;
  }
</style>