<template>
  <div id="account_header">
    <nav>
      <ul class="menu">
        <li class="active"><a href="#">CHANGES</a></li>
        <li><a href="#">TRADES</a></li>
        <li><a href="#">FINANCE</a></li>
        <li><a href="#">MAPS</a></li>
        <li><a href="#">AFFILIATE</a></li>
        <li><a href="#">MARGIN TRADING</a></li>
        <li><a href="#">STAKING</a></li>
      </ul>
      <ul class="right_menu">
        <li>
          <a href="#">SUPPORT</a>
        </li>
        <li>
          UP12355932
          <div>
            <ul>
              <li>
                <a href="#">Profil</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Social</a>
              </li>
              <li>
                <a href="#">Setting</a>
              </li>
              <li>
                <a href="#">Exit</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
name: "v-header"
}
</script>

<style scoped>
  #account_header{
    background-color: #06283c;
    padding: 15px;
  }
  .menu{
    margin: 0;
  }
  ul > li{
    display: inline-block;
    margin-right: 6px;
    margin-left: 6px;
    color: #f5f5f5;
    font-size: 11px;
    font-weight: bold;
    padding: 3px;
  }
  .menu > li:hover{
    color: #ccc;
  }
  .menu > li.active{
    color: #42a5a5;
  }
  ul > li > a{
    color: inherit;
  }
  ul{
    display: inline-block;
  }
  ul.right_menu{
    float: right;
  }
  ul.right_menu > li{
    border: 1px solid #888;
    padding: 5px 20px;
    border-radius: 4px;
    position: relative;
  }
  ul.right_menu > li:hover{
    background-color: #42a5a5;
    border: 1px solid #42a5a5;
    transition: .2s;
  }
  ul.right_menu > li > div{
    position: absolute;
    left: 0;
    top: 103%;
    border-radius: 6px;
    padding-top: 6px;
    opacity: 0;
    visibility: hidden;
    z-index: 999;
  }
  ul.right_menu > li:hover > div{
    opacity: 1;
    visibility: visible;
    transition: opacity .2s linear;
  }
  ul.right_menu > li > div > ul{
    padding: 0;
    background-color: #f1f1f1;
    width: 100%;
  }
  ul.right_menu > li > div > ul:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    width: 0;
    height: 0;
    transform: translateX(-50%);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #f1f1f1;
  }
  ul.right_menu > li > div > ul > li{
    color: #0b364f;
    font-size: 13px;
    width: 100%;
    margin: 0;
    padding: 5px 10px;
  }
  ul.right_menu > li > div > ul > li:last-child{
    border-top: 2px solid #fff;
  }
  ul.right_menu > li > div > ul > li:first-child{
    margin-top: 3px;
  }
  ul.right_menu > li > div > ul > li:hover{
    color: #fff;
    background-color: #42a5a5;
  }
</style>