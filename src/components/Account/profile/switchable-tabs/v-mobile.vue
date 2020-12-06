<template>
  <div class="mobile container-fluid">
    <h6 class="heading_lightBlue mt-3">Mobile K7.Crypto</h6>
    <div class="row">
      <div class="col-8">
        <p class="text_greey text_normal">Generate activation key to connect a new mobile device or manage already linked devices.</p>
      </div>
      <div class="col-4">
        <button class="btn btn_blue">Generate Activation Key</button>
      </div>
    </div>
    <div class="row mt-5">
      <table class="table mt-4">
        <thead class="">
        <tr>
          <th scope="col">Device status		</th>
          <th scope="col"> User ID		</th>
          <th scope="col">API key	</th>
          <th scope="col">API secret	</th>
          <th scope="col">Action</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>You have no connected devices yet</td>
<!--          <td>12uizEiQHQozm7XTM16bqZgFA3w</td>-->
<!--          <td>IGleOtetmfAqyjvB9G27cNrdQFA</td>-->
<!--          <td>IGleOtetmfAqyjvB9G27cNrdQFA</td>-->
<!--          <td>IGleOtetmfAqyjvB9G27cNrdQFA</td>-->
        </tr>
        </tbody>
      </table>
    </div>
    <div class="row mobile_info_block mt-5">
      <p class="text_normal text_greey">If you lost your phone, deactivate the app key.</p>
      <div class="col-12">
        <div class="download_app_block mt-5">
            <h4 class="heading_darkBlue">Download CEX.IO app for free!</h4>
          <div class="img_src_block mt-5">
            <a href="#">
              <img :src="require('@/assets/img/download-ios.svg')" alt="">
            </a>
            <a href="#">
              <img :src="require('@/assets/img/download-android.svg')" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "v-mobile"
}
</script>

<style scoped>
h6{
  font-weight: initial;
  letter-spacing: 2px;
}
button{
  float: right;
  border-radius: 0;
}

/*table*/
table th{
  color: #797777;
  font-size: 14px;
}
table tbody{
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

.mobile_info_block  > p{
  padding: 8px;
  border-left: 4px solid #8fa5a5;
  background-color: #fefefe;
  width: 100%;
}
.mobile_info_block > p{
  line-height: 1;
  margin: 10px;
}
.download_app_block{
  display: table;
  margin: 0 auto;
  text-align: center;
}
.download_app_block h4{
  font-weight: initial;
}
.img_src_block > a{
  display: inline-block;
  margin-right: 15px;
}
.img_src_block > a > img{
  width: 200px;
  height: auto;
}
</style>