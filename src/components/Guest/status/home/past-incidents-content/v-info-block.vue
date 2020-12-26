<template>
  <div class="info_block mt-4">
    <h5 class="data">{{ data }}</h5>
    <h6 class="heading_lightBlue"><router-link to="/status/incident">{{headName}}</router-link></h6>
    <span v-if="!events" class="text_greey">No incidents reported.</span>
    <div class="event" v-for="(item, index) in events" :key="index">
      <p><b>{{ item.name }}</b> - {{ item.desc }}</p>
      <span class="data text_greey text_small">{{ item.data }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-info-block",
  props: ['data', 'headName', 'events']
}
</script>

<style scoped>
h5{
  border-bottom: 1px solid #b5b5b5;
  padding-bottom: 6px;
}
h6 > a{
  color: inherit;
}
.event > p{
  margin-bottom: 0;
  margin-top: 8px;
}
</style>