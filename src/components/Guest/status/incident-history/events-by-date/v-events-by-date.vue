<template>
  <div class="events-by-date container">
    <h4 class="heading_darkBlue pb-3">September 2020</h4>
    <div class="events" v-bind:class="this.show ? '' : 'hidden_all'">
        <v-event/>
        <v-event/>
        <v-event/>
        <v-event/>
        <v-event/>
        <v-event/>
        <v-event/>
    </div>
    <button class="btn btn_blue" @click="this.toggle_all">Show all</button>
  </div>
</template>

<script>
import VEvent from "./v-event";
export default {
  name: "v-events-by-date",
  data(){
    return{
      show: false
    }
  },
  methods:{
    toggle_all: function(){
      this.show = !this.show;
    }
  },
  components: {VEvent}
}
</script>

<style scoped>
  .events-by-date{
    width: 75%;
    margin-top: 30px;
  }
  h4{
    border-bottom: 1px solid #cecece;
  }
  .hidden_all{
    max-height: 300px;
    overflow-y: hidden;
  }

  button{
    margin-top: 20px;
    padding: 3px 20px;
    width: 100%;
  }
</style>