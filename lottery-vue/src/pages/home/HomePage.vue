
<template>
  <div>
    <!--标题栏-->
    <title-bar :title="title"></title-bar>
    <!--轮播图-->
    <carousel></carousel>
    <history-list :data= "historyList" ></history-list>
    <div style="margin-top: 60px;"></div>
    <menu-bar></menu-bar>
  </div>
</template>
<script>
  import TitleBar from '@/pages/common/TitleBar';
  import Carousel from "@/pages/common/Carousel";
  import HistoryList from "@/pages/home/components/HistoryList"
  import MenuBar  from "@/pages/common/MenuBar";
  import axios from 'axios';
    export default {
        name: "home-page",
        components:{
          TitleBar,
          Carousel,
          HistoryList,
          MenuBar
        },
        data(){
          return{
            title:'博彩项目',
            historyList:[]
          }
        },
      //发起请求,当数据请求回来的时候,我要将数据渲染到页面上 axios
      mounted(){
          console.log("数据怎么没有？")
        axios.get('/static/index').then(resp=>{
          this.historyList=resp.data.data
          console.log(resp)
        })
      }
    }
</script>

<style scoped>

</style>
