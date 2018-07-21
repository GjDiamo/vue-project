import Vue from 'vue';
import Vuex from 'vuex'
//import test from './test.js'
//import user from './user.js'
import cart from './cart.js'
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    //test,
    //user,
    cart
  }
});
