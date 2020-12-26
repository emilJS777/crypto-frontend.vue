<template>
  <div class="past-incidents-content container mt-5">
    <h4 class="heading_darkBlue">Past Incidents</h4>
    <v-info-block
        data="Dec 26, 2020"
        headName="ZIL withdrawals are under maintenance"
        :events="[
            {name: 'Resolved', desc: 'This incident has been resolved.', data: 'Dec 25, 12:14 UTC'},
            {name: 'Update', desc: 'This incident has been resolved.', data: 'Dec 25, 12:14 UTC'}
        ]"
    />
    <v-info-block
        data="Dec 26, 2020"
        headName="ZIL withdrawals are under maintenance"
        :events="[
            {name: 'Resolved', desc: 'This incident has been resolved.', data: 'Dec 25, 12:14 UTC'},
            {name: 'Resolved', desc: 'This incident has been resolved.', data: 'Dec 25, 12:14 UTC'}
        ]"
    />
    <v-info-block
        data="Dec 26, 2020"
    />
  </div>
</template>

<script>
import VInfoBlock from "./v-info-block";
export default {
name: "v-past-incidents-content",
  components: {VInfoBlock}
}
</script>

<style scoped>
.past-incidents-content{
  width: 80%;
}
</style>