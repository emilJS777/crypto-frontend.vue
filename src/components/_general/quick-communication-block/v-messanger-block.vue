<template>
  <form action="">
    <div class="board">
      <p class="text_greey" @click="$emit('changePage')">⟵</p>
      <div class="message_block">
        <div class="img_block">
          <img src="https://rnug.ru/wp-content/uploads/2020/11/emptyuserphoto.png" alt="">
        </div>
        <div class="info_block">
          <p class="">Zakaryan Robert</p>
          <span class="text_small text_greey">1 days ago</span>
          <p>
            hello how are you
            hello how are you
            hello how are you
            hello how are you
          </p>
        </div>
      </div>
      <div class="message_block">
        <div class="img_block">
          <img src="https://rnug.ru/wp-content/uploads/2020/11/emptyuserphoto.png" alt="">
        </div>
        <div class="info_block">
          <p class="">Zakaryan Robert</p>
          <span class="text_small text_greey">1 days ago</span>
          <p>
            hello how are you
            hello how are you
            hello how are you
            hello how are you
          </p>
        </div>
      </div>
      <div class="message_block">
        <div class="img_block">
          <img src="https://rnug.ru/wp-content/uploads/2020/11/emptyuserphoto.png" alt="">
        </div>
        <div class="info_block">
          <p class="">Zakaryan Robert</p>
          <span class="text_small text_greey">1 days ago</span>
          <p>
            hello how are you
            hello how are you
            hello how are you
            hello how are you
          </p>
        </div>
      </div>
    </div>
    <div class="write_send_block">
      <input type="text" class="form-control" placeholder="Your message...">
      <button class="">
        <img src="https://cdn4.iconfinder.com/data/icons/flat-circle-content/800/circle-content-send-64.png" alt="">
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "v-messanger-block",
}
</script>

<style scoped>
form{
  height: 100%;
  position: relative;
}
.board{
  height: 86%;
  padding: 15px;
  padding-top: 35px;
  overflow-y: auto;
}
.board::-webkit-scrollbar {
  width: 8px;
}

.board::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.board::-webkit-scrollbar-thumb {
  background-color: #97c2c2;
}
.board > p{
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  padding-left: 15px;
  cursor: pointer;
  z-index: 99;
  display: block;
  width: 95%;
  font-size: 20px;
  font-weight: bold;
  background-color: #fff;
}

.message_block{
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-gap: 8px;
  margin-top: 10px;
}
.message_block img{
  border-radius: 50%;
  width: 40px;
  height: 40px;
}
.info_block{
  background-color: #dfe7e7;
  padding: 10px;
  position: relative;
}
.info_block::after{
  content: '🔼';
  position: absolute;
  top: 5px;
  left: -12px;
  font-size: 20px;
  transform: rotate(-90deg);
  color: #dfe7e7;
}
.info_block p{
  font-size: 13px;
  margin: 0;
  font-style: italic;
}
.write_send_block{
  position: absolute;
  bottom: 0;
  display: grid;
  padding: 10px;
  grid-template-columns: 8fr 1fr;
  grid-gap: 5px;
}
.write_send_block button{
  display: block;
  width: 100%;
  border: 0;
  background-color: #4db6ac;
  border-radius: 4px;
}
.write_send_block button:focus{
  outline: 0;
}
.write_send_block button img{
  width: 32px;
  height: auto;
}
</style>