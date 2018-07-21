<template>
  <div class="row">
    <div class="col-xs-ball ball-div" v-for="ball in balls" @click="handeleRedClick(ball)">
      <div class="ball-item ball-red ":class="{'ball-red-selected':ball.selected}">{{ball.number}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "red-ball-picker",
    data() {
      return {
        balls: [],
        selectedRedBalls:[]
      }
    },
    methods:{
      handeleRedClick(ball){
        //先判断有没有被选中；
        //1. 若选中；
        if(ball.selected){
          ball.selected=false;
          //使用splice方法进行删除；
          //1.找到删除的支点；
          let index=this.selectedRedBalls.indexOf(ball.number);
          //2.使用相应的Api删除；
          this.selectedRedBalls.splice(index,1)
        }else{
          //2.未选中；
          if(this.selectedRedBalls.length<6){
            ball.selected=true;
            this.selectedRedBalls.push(ball.number)
          }else{
            alert('最多只能选择6个球')
          }
        }
        //通知父组件
        this.$emit('on-redballs-change',this.selectedRedBalls)
      }
    },
    mounted() {
      for (let i = 1; i <= 33; i++) {
        let n = i;
        if (i < 10) {
          n= "0"+i;
        }
        this.balls.push({number:n.toString(),selected:false});
      }
    }
  }
</script>

<style scoped>
  .ball-div {
    float: left;
  }
</style>

