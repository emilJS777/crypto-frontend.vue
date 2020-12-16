<template>
  <div class="staking_information row">
    <div class="col-6 left_block">
      <h3 class="heading_darkBlue">
        Staking Information
      </h3>
    </div>
    <div class="col-6 right_block">
      <div>
        <div class="img_block">
          <img src="https://cdn1.iconfinder.com/data/icons/financial-45/23/coin-64.png" alt="">
        </div>
        <div class="info_block">
          <h6 class="heading_darkBlue">Total balance:</h6>
          <span class="text_big">$0</span>
        </div>
      </div>

      <div>
        <div class="img_block">
          <img src="https://cdn0.iconfinder.com/data/icons/education-340/100/Tilda_Icons_1ed_calendar-64.png" alt="">
        </div>
        <div class="info_block">
          <h6 class="heading_darkBlue">Next reward settlement:</h6>
          <span class="text_big">02 January 2021</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-staking-information"
}
</script>

<style scoped>
.left_block{
  display: flex;
  align-items: center;
}
.img_block{
  display: flex;
  background-color: #f3f3f3;
  align-items: center;
  border-radius: 6px;
}
.img_block > img{
  width: 60%;
  height: auto;
  display: block;
  margin: 0 auto;
}
.right_block{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
}
.right_block > div{
  display: grid;
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1em;
}
span{
  font-weight: bold;
}
</style>