<template>
  <form action="">
    <div class="board">
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
      <button class="btn btn_blue">
        Send
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: "v-messanger-block"
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

.write_send_block{
  position: absolute;
  bottom: 0;
  display: grid;
  padding: 10px;
  grid-template-columns: 4fr 1fr;
  grid-gap: 5px;
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
</style>