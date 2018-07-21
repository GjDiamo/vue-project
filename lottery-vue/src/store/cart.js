//定义保存数据的地方
const state={
  carts:[]
}
//对外提供访问数据的方法
const getters= {
   cartSize:(state)=>state.carts.length,
   getCarts:(state)=>state.carts,
   totalMoney:(state)=>{
     let count=0;
     state.carts.forEach((item)=>{
       count+=item.count;
     });
     return count*2;
   }
}
//对外提供获取数据的方法
const actions={
    addToCart(context,data){
      console.log("actions中addToCart被调用");
      console.log("action提交数据给mutations去修改");
      console.log(data.redBalls);
      let redBalls = data.redBalls;
      let red = "";
      redBalls.forEach((item)=>{
        red +=","+item;
      });
      red = red.substr(1);
      //console.log(red);
      let cartItem = {red:red,blue:data.blueBall,count:data.count};
      console.log(data.blueBall+"我的blue球")
      context.commit('mAddToCart',cartItem);
    },
    clearCarts(context){
      context.commit('mClearCarts');
    },
    deleteOne(context,cartItem){
      context.commit('mDeleteOne',cartItem);
    }
}
//跟踪数据变化的,vue需要的, 真正修改数据
const mutations = {
  mAddToCart(state,cartItem){
    state.carts.push(cartItem);
    console.log("mutations方法被调用")
  },
  mClearCarts(state){
    state.carts=[];
  },
  mDeleteOne(state,cartItem){
    let index=state.carts.indexOf(cartItem);
    state.carts.splice(index,1);
  }
}
//导出文件的所有内容
export default {
  state,getters,actions,mutations
}
