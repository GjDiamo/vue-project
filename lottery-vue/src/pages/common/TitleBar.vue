<template>
  <div row>
     <div class="col-xs-12 title">
         <div class="div-back" v-if="needback" @click="go">&lt;返回</div>
         {{title}}
     </div>
  </div>
</template>

<script>
    export default {
        name: "title-bar",
        props: {
          title: {
            type: String
          },
          needback: {
            type: Boolean,
            default:false
          }
        },
        methods:{
              go() {
                this.$router.go(-1);
              }
        }
    }
</script>

<style scoped>
   .div-back{
     position: absolute;
   }
</style>
