<template>
  <div class="service_board mt-4">
    <div class="head">
      <router-link to="/status/incident">
        <h6>LTC withdrawals are under maintenance</h6>
      </router-link>
      <router-link to="/">
        Subscribe
      </router-link>
    </div>
    <div class="content">
      <div class="desc">
        <p>
          <b>Update</b> - We are continuing to investigate this issue.
        </p>
        <span class="data text_normal text_greey">
            Dec 16, 18:44 UTC
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-service-board"
}
</script>

<style scoped>
  .head{
    background-color: #42a5a5;
    padding-bottom: 10px;
    padding-top: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .head > button{
    float: right;
  }
  .head a{
    color: #fff;
    display: inline-block;
  }
  .head a:last-child{
    text-align: right;
    float: right;
  }
  .content{
    border: 1px solid#42a5a5;
    padding: 10px 10px;
  }
  .desc{
    padding: 10px;
  }
  .desc > p{
    margin: 0;
  }
</style>