<template>
  <div>
    <div @click="sendProfile">个人中心</div>
    <h1>首页</h1>
  </div>
</template>

<script>
export default {
   methods:{
     sendProfile(){
       this.$router.push({
         name:'profilePage'
       })
     }
   }
}
</script>

<style>

</style>