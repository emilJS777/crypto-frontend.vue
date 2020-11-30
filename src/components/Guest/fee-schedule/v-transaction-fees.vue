<template>
  <div class="transaction_tab col-12 mt-3 mb-5">
    <h3 class="heading_darkBlue">Maker-Taker Fee Schedule</h3>
    <p class="text_greey">Transaction fee is based on your 30-day trade volume for all pairs, which is recalculated at 00:00 (GMT) each day and includes current day`s trades.</p>
    <table class="mt-5">
      <tr>
        <th>Trade Volume 30d, BTC	</th>
        <th>Taker</th>
        <th>Maker</th>
      </tr>
      <tr>
        <td>≤ 5	</td>
        <td>0.25%</td>
        <td>0.16%</td>
      </tr>
      <tr>
        <td>≤ 30</td>
        <td>0.23%</td>
        <td>0.15%</td>
      </tr>
      <tr>
        <td>≤ 30</td>
        <td>0.23%</td>
        <td>0.15%</td>
      </tr>
      <tr>
        <td>≤ 30</td>
        <td>0.23%</td>
        <td>0.15%</td>
      </tr>
      <tr>
        <td>≤ 30</td>
        <td>0.23%</td>
        <td>0.15%</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "v-transaction-fees"
}
</script>

<style scoped>
  table{
    width: 500px;
    margin: 0 auto;
  }
  h3{
    text-align: center;
  }
  p{
    width: 50%;
    text-align: center;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  table > tr:first-child{
    border-bottom: 1px solid #d5d9d9;
  }
  table > tr > th:last-child,
  table > tr > td:last-child{
    border-left: 1px solid #d5d9d9;
    text-align: center;
  }
  tr td,
  tr th{
    padding: 2px 10px;
    line-height: 1.8;
  }
  th, td{
    font-size: 15px;
  }
  td{
    color: #9c9f9f;
  }
  tr:hover{
    background-color: #e2e9e9;
  }
</style>