<template>
  <div class="row item">
    <div class="col-xs-11 div-right">
      <!--开奖日期-->
      <div class="row" style="margin-left: 25px">
        <span style="font-size: 15px;">第{{history.code}}期</span>
        <span style="margin-left: 10px;">{{history.data}}</span>
      </div>
      <!--开奖号码-->
      <div class="row" style="margin-left: 35px">
        <div >
          <div class="ball-item ball-red" v-for="red in history.red.split(',')">{{red}}</div>
          <div class="ball-item ball-blue">{{history.blue}}</div>
        </div>
      </div>
      </div>
     <div class="col-xs-1 div-right">
      <span class="glyphicon glyphicon-chevron-right"></span>
     </div>
    </div>
</template>
<script>
    export default {
        name: "history-item",
        props:['history']
    }
</script>

<style scoped>
 .item{
    border: 1px solid gainsboro;height: 80px;padding-top: 5px;margin-bottom: 10px;}
 .div-right{
    padding-left: 0px;padding-top:20px;
 }
</style>
