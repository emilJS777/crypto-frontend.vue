<template>
  <div class="event_block">
    <h6 class="heading_lightBlue"><router-link to="/status/incident">XRP withdrawals are under maintenance</router-link></h6>
    <p>
      This incident has been resolved.
    </p>
    <span class="text_small text_greey">
        Sep 27, 04:35 - 08:38 UTC
      </span>
  </div>
</template>

<script>
export default {
name: "v-event"
}
</script>

<style scoped>

.event_block{
  margin-top: 20px;
  height: 80px;
}
a{
  color: inherit;
}
p{
  margin: 0;
}
</style>