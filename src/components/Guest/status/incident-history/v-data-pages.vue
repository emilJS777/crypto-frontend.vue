<template>
  <div class="data-pages-block mt-5">
    <button class="btn btn_blue prev"><i>▶</i></button>
    <span class="text_greey">
      July 2020 to September 2020
    </span>
    <button class="btn btn_blue next"><i>▶</i></button>
  </div>
</template>

<script>
export default {
name: "v-data-pages"
}
</script>

<style scoped>
.data-pages-block{
  width: 70%;
  display: block;
  margin: 0 auto;
}
.prev >i{
  display: table;
  transform: rotate(-180deg);
  line-height: 0;
}
.next > i{
  display: table;
  line-height: 0;
}
.data-pages-block > span{
  padding: 20px;
  font-weight: bold;
}
</style>