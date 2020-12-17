<template>
  <div class="orders_table_block">
    <p>Buy Orders <span class="text_greey"> Total USD available: 106954.27</span></p>
    <div class="orders_table">
      <table class="table">
        <thead class="">
        <tr>
          <th scope="col">Price per BCH	</th>
          <th scope="col">BCH Amount	</th>
          <th scope="col">Total: (USD)</th>
        </tr>
        </thead>
        <tbody v-for="(item, index) in ordersTable" :key="index">
          <tr >
            <td>{{item.pricePerBCH}}</td>
            <td>{{item.amountBCH}}</td>
            <td>{{item.totalUSD}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-orders-table",
  props: ["ordersTable"]
}
</script>

<style scoped>
  .orders_table_block > p{
    color: #033d6b;
    margin: 5px;
    background-color: #fff;
  }
  .orders_table_block > p > span  {
    float: right;
    font-size: 11px;
    line-height: 2.5;
  }

  .orders_table{
    height: 350px;
    overflow-y: auto;
    position: relative;
  }
  .orders_table::-webkit-scrollbar {
    width: 8px;
  }

  .orders_table::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  .orders_table::-webkit-scrollbar-thumb {
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