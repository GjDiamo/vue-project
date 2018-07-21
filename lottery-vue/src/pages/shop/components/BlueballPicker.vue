<template>
   <div>
     <div class="col-xs-ball" v-for="ball in balls" @click="handleBlueClick(ball)">
       <div class="ball-item ball-blue" :class="{'ball-blue-selected':ball.selected}">{{ball.number}}</div>
     </div>
   </div>
</template>

<script>
  export default {
    name: "blue-ball-picker",
    data(){
      return{
        balls:[],
        selectedBlueBall:[]
      }
    },
    methods:{
      handleBlueClick(ball){
        //点击后取非
        ball.selected=!ball.selected;
        //点击已经选择的界面
        if(this.selectedBlueBall){
          this.selectedBlueBall.selected=false;
        }
        //如果是被确定的
          if(ball.selected){
            this.selectedBlueBall=ball;
            this.$emit('on-buleball-change',ball.number)
          }else{
            this.selectedBlueBall=null;
            this.$emit('on-buleball-change',null)
          }
      }
    },
    mounted(){
      for (let i = 1; i <= 16; i++) {
        let n1 = i;
        if (i < 10) {
          n1= "0"+i;
        }
        this.balls.push({number:n1,selected:false})
      }
    }
   }

</script>

<style scoped>

</style>
