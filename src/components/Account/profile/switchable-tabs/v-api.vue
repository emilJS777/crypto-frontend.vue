<template>
  <div class="api container-fluid">
    <h6 class="heading_lightBlue mt-3">API Access</h6>
    <div class="row">
      <form action="">
        <div class="form_block">
          <label class="text_greey text_normal">IP Address Filter:</label>
          <input type="text" class="form-control">
          <label class="text_greey text_small">Only allow requests made from specified IP address.</label>
          <br/>
          <label class="text_greey mt-4">PERMISSIONS:</label>
          <div class="checkbox_block">
            <div class="checkbox">
              <input type="checkbox">
              <label class="text_small text_greey">Account balance</label>
            </div>
            <div class="checkbox">
              <input type="checkbox">
              <label class="text_small text_greey">Place order</label>
            </div>
            <div class="checkbox">
              <input type="checkbox">
              <label class="text_small text_greey">Open orders</label>
            </div>
            <div class="checkbox">
              <input type="checkbox">
              <label class="text_small text_greey">Cancel order</label>
            </div>
            <div class="checkbox">
              <input type="checkbox">
              <label class="text_small text_greey">Open positions</label>
            </div>
          </div>
        </div>
        <div class="form_block">
          <p class="text_normal text_greey">Trade API Developer guide can be found <a href="#">here</a></p>
        </div>
        <div class="btn_block">
          <button class="btn btn_blue">Generate Key</button>
        </div>

      </form>
    </div>
    <div class="row mt-5">
      <table class="table mt-4">
        <thead class="">
        <tr>
          <th scope="col">User ID		</th>
          <th scope="col"> Key	</th>
          <th scope="col">Secret</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>up133935344</td>
          <td>12uizEiQHQozm7XTM16bqZgFA3w</td>
          <td>IGleOtetmfAqyjvB9G27cNrdQFA</td>
          <td>
            <button class="btn btn_blue">active</button>
            <button class="btn btn_darkBlue">delete</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
name: "v-api"
}
</script>

<style scoped>
h6{
  font-weight: initial;
  letter-spacing: 2px;
}
form{
  padding: 30px;
  border: 1px solid #d2d8d8;
  border-radius: 6px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3em;
}
form input, form select{
  height: 35px;
  line-height: 1;
  background-color: #f3f3f3;
  border: 1px solid #b7b8b8;
}
form .btn_block {
  width: 100%;
  display: block;
  border-top: 1px solid #d2d8d8;
  padding-top: 20px;
}
.form_block span{
  font-size: 14px;
  color: #7a7878;
}
.form_block > p{
  text-align: right;
}
.form_block > p > a{
  color: #42a5a5;
}
form .btn_block button{
  font-weight: bold;
  background-color: #d9d8d8;
  border-radius: 2px;
  font-size: 14px;
  padding: 8px 40px;
}
.checkbox_block{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.checkbox >*{
  height: 15px;
  display: inline-block;
  margin-right: 5px;
  line-height: 2;
  vertical-align: middle;
}
/*table*/
table th{
  color: #797777;
  font-size: 14px;
}
table tbody{
  height: 50px;
  overflow: hidden;
}
table tbody td button{
  padding: 0 4px;
  font-size: 13px;
  margin-left: 5px;
}
table td{
  color: #4a4b4b;
  font-size: 13px;
  font-weight: bold;
  font-style: italic;
}
table tr:first-child {
  border: 0 !important;
}
</style>