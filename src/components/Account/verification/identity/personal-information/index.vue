<template>
  <div class="personal_information">
    <v-header/>
    <v-personal-information/>
  </div>
</template>

<script>
import VHeader from "../../v-header";
import VPersonalInformation from "./v-personal-information";
export default {
name: "index",
  components: {VHeader,VPersonalInformation}
}
</script>

<style scoped>
.personal_information{
  background-color: #f1f1f1;
  min-height: 100vh;
}
</style>