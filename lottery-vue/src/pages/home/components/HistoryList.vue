<template>
    <div>
      <history-item v-for="history in data"
                    :key="history.code"
                    :history="history"
                    @click.native="goToDetail('/detail?code='+history.code)">

      </history-item>
    </div>
</template>
<script>
    import HistoryItem from "./HistoryItem"
    export default {
         name: "history-list",
         props:['data'],
         components:{
          HistoryItem
        },
      methods:{
        goToDetail(path){
          this.$router.push(path);
        }
      }
    }
</script>

<style scoped>

</style>
