<template>
  <div>
    <!--title bar-->
    <title-bar :title="title" :needback="needback"></title-bar>
    <!--本期的奖池信息-->
    <lottery-info></lottery-info>

    <div style="color:darkgray">请选择6个红球,1个蓝球</div>
    <!--拆出红球组件-->
    <red-ball-picker @on-redballs-change="handleRedballsChange"></red-ball-picker>
    <!--清除浮动-->
    <div class="clearfix"></div>
    <!--蓝球组件-->
    <blue-ball-picker @on-buleball-change="handleBlueballsChange"></blue-ball-picker>
    <!--按钮-->
    <!--清除浮动-->
    <div class="clearfix"></div>
    <!--添加的按钮-->
    <div style="margin-top: 10px;" @click="handleAdd">
      <input type="button" value="添加" class="btn btn-default pull-right" />
    </div>
    <!--清除浮动-->
    <div class="clearfix"></div>
    <!--机选幸运号的按钮-->
    <div style="margin-top: 10px;">
      <input type="button" value="机选幸运号" id="btn_random"  class="btn btn-default pull-right" />
      <select id="selectId" class="form-control pull-right" style="width: 60px;display: inline-block;">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <!--主要是解决页面显示不完整-->
    <div style="margin-bottom: 58px;height: 58px;"></div>
    <!--5.底部菜单栏-->
    <div class="menu">
      <div class="col-xs-6 menu-item"@click="goToCart">
        <span class="glyphicon glyphicon-shopping-cart"></span>
        <span class="badge">{{cartSize}}</span>
        <p>购物车</p>
      </div>
      <div class="col-xs-6 menu-item">
        <span class="glyphicon glyphicon-save"></span>
        <p>立即投注</p>
      </div>
    </div>

  </div>
</template>
<script>
  //js 逻辑
  import TitleBar from '@/pages/common/TitleBar';
  import BlueBallPicker from './components/BlueballPicker';
  import RedBallPicker from './components/RedballPicker';
  import LotteryInfo from './components/LotteryInfo';
  //导入vuex提供的辅助函数；
  import {mapActions,mapGetters} from 'vuex';
    export default {
        name: "select-page",
      components:{
         TitleBar,
         BlueBallPicker,
         RedBallPicker,
         LotteryInfo
      },
      data(){
          return{
            title:"选号",
            needback:true,
            selectedRedBalls:null,
            redBalls:null,
            blueBall:null,
          }
      },
      methods:{
        ...mapActions(['addToCart']),
        handleRedballsChange(selectedRedBalls){
          this.redBalls=selectedRedBalls;
          console.log(this.redBalls)
        },
        handleBlueballsChange(blueBall){
          this.blueBall=blueBall;
          console.log("blueBall" + blueBall)
        },
        handleAdd(){
          let item={redBalls:this.redBalls,blueBall:this.blueBall,count:1};
          console.log(this.redBalls)
          this.addToCart(item)
        },
        goToCart(){
          this.$router.push('/cart')
        }
      },
      computed:{
        ...mapGetters(['cartSize'])
      }
    }
</script>

<style scoped>

</style>
