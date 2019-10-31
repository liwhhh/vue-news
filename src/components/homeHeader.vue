<template>
  <div class="home_header">
    <div class="wrapper">
      <span class="iconfont iconnew"></span>

        <div class="meddlie">
         <span class="iconfont iconsearch"></span>
         <span class="content">{{label}}</span>
      </div>
      <div class="right"  @click="IndexToProfile">
        <span class="iconfont iconwode"></span>
     </div>
    </div>
  </div>
</template>

<script>
export default {
   props:['label'],
   methods:{
     IndexToProfile(){
       this.$router.push({
         name:"profilePage"
       })
     }
   }
}
</script>

<style lang="less" scoped>
.home_header{
  padding: 2.778vw;
  background: red;
}
.wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}
.iconnew{
  height: 12.5vw;
  font-size: 12.5vw;
}

.meddlie{
      flex: 1;
      background: rgba(255, 255, 255, .4);
      text-align: center;
      align-items: center;
      margin: 0 5.556vw;
      border-radius: 7.778vw;
      padding: 2.222vw 0;
    span{
      font-size:4.444vw; 
      color: #fff;
    }
}
.iconwode{
  font-size: 7.778vw;
  opacity: 0.6;
}
</style>