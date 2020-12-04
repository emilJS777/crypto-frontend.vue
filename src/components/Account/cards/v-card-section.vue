<template>
  <div class="card_section container-fluid mt-4">
    <div class="row justify-content-center">
      <div class="card">
        <div class="icons">
          <img :src="require('@/assets/img/Visa.png')">
          <img :src="require('@/assets/img/mastercard.png')">
        </div>
        <div class="form">
          <label for="card_number">Card Number</label>
          <input type="number" class="form-control" id="card_number" placeholder="xxxx_xxxx_xxxx_xxxx">
          <span>Please, enter your payment card number</span>
          <div class="mt-4">
            <label for="expiry_date">Expiry Date</label>
            <input type="number" class="form-control" id="expiry_date" placeholder="_/__">
            <span>Please provide the expiry</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="desc">
        <p class="text_greey text_normal">You must be over 18 years old to use payment cards on K7.Clan</p>
      </div>
    </div>
    <div class="row justify-content-center mt-2">
      <div class="proceed">
        <button class="btn">Proceed</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-card-section"
}
</script>

<style scoped>
  .card{
    width: 440px;
    padding: 25px;
    border-radius: 10px;
    padding-bottom: 35px;
  }
  .card .icons > img{
    width: 40px;
    height: auto;
    margin-left: 15px;
  }
  .card > .icons{
    text-align: right;
  }
  .card .form label{
    font-size: 13px;
    font-weight: bold;
  }
  .card .form span{
    font-size: 8px;
    color: #8d0808;
    margin-left: 2px;
  }
  .card .form > div{
    width: 100px;
    float: right;
  }

  .proceed > button{
    background-color: #cfcece;
    font-size: 30px;
    padding: 8px 50px;
  }
</style>