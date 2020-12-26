<template>
  <div class="incident container pt-5">
    <h4 class="heading_lightBlue text-center">XRP withdrawals are under the maintenance</h4>
    <h5 class="sub_head text_greey text-center">Incident Report for K7.CRYPTO</h5>
    <div class="events_block">
      <div class="event">
        <div class="event_name">
        <span>
          Resolved
        </span>
        </div>
        <div class="event_desc_data">
          <p>
            This incident has been resolved.
          </p>
          <span class="text_greey text_small">
          Posted 2 days ago. Dec 24, 2020 - 09:06 UTC
        </span>
        </div>
      </div>
      <div class="event">
        <div class="event_name">
        <span>
          Investigating
        </span>
        </div>
        <div class="event_desc_data">
          <p>
            We are currently investigating this issue.
          </p>
          <span class="text_greey text_small">
          Posted 3 days ago. Dec 23, 2020 - 17:58 UTC
        </span>
        </div>
      </div>
      <input type="text" value="This incident affected: Crypto Withdrawals (XRP)." disabled="disabled" class="form-control mt-4">
    </div>
    <div class="mt-3">
      <hr/>
      <router-link to="/status" class="heading_lightBlue"> ⟵ Current Status</router-link>
    </div>
  </div>
</template>

<script>
export default {
name: "index"
}
</script>

<style scoped>
.incident{
  width: 550px;
}
.event{
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.event > div{
  display: inline-block;
  vertical-align: middle;
}
.event_name{
  font-weight: bold;
  margin-right: 40px;
}
.event_desc_data{
  float: right;
}
.event_desc_data > span{

}
.event p{
  margin: 0;
}

</style>