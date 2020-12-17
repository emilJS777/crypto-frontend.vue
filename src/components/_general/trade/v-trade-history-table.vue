<template>
  <div class="trade_history_table_block mt-5 mb-2">
    <p>Trade History</p>
    <div class="trade_history_table">
      <table class="table">
        <thead class="">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Type</th>
            <th scope="col">Amount BTC</th>
            <th scope="col">Price</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in tradeHistory" :key="index">
            <td>{{ item.date }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.amountBTC }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-trade-history",
  props: ["tradeHistory"]
}
</script>

<style scoped>
.trade_history_table_block > p{
  color: #033d6b;
  margin: 5px;
  background-color: #fff;
  text-align: center;
  font-size: 18px;
}
.trade_history_table_block > p > span  {
  float: right;
  font-size: 11px;
  line-height: 2.5;
}

.trade_history_table{
  height: 350px;
  overflow-y: auto;
  position: relative;
}
.trade_history_table::-webkit-scrollbar {
  width: 8px;
}

.trade_history_table::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.trade_history_table::-webkit-scrollbar-thumb {
  background-color: #97c2c2;
}
table{
  text-align: left;
  font-size: 15px;

}
thead{
  color: #fff;
}
thead th{
  background-color: #43a6a6;
  position: sticky;
  top: -1px;
}
tbody{
  font-size: 14px;
  color: #4a4b4b;
  font-style: italic;
}
td{
  border-left: 1px solid #e2dede;
  padding: 6px;
}
td:first-child{
  border-left:0;
}
</style>