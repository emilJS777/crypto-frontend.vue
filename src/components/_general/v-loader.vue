<template>
  <div class="loader" v-if="show">
    <div class="logo">
      <h1 id="loaderText">
        <span>K7</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
name: "v-loader",
  data(){
   return{
    show: true
   }
  },
  mounted() {
    setTimeout(() => this.show = false, 2500)
  }
}
</script>

<style scoped>
.loader{
  background-color: #e9e8e8;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
  font-style: italic;
}
.logo span{
  background-color: #42a5a5;
  color: #fff;
  padding: 2px;
  border-radius: 50%;
  margin-right: -2px;
  font-weight: bold;
  position: absolute;
  left: 50%;
  top: 50%;
  bottom: 50%;
  right: 50%;
  transform: translate(-50%,-50%);
  display: table;
  text-align: center;

  animation-name: white-circle;
  animation-duration: 1.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes white-circle {
  0%{
    background-color: #0b364f;
    border-top-right-radius: 8px 2px;
    border-bottom-left-radius: 8px 2px;
  }
  50%{
    border-radius: 10px;
    background-color: #42a5a5;
    padding: 20px;
    border-top-right-radius: 10px 15px;
    border-bottom-left-radius: 10px 15px;
  }
  100%{
    border-radius: 50%;
    background-color: #0b364f;
    border-top-right-radius: 8px 2px;
    border-bottom-left-radius: 8px 2px;

  }
}
</style>