<template>
  <div class="preBtn">
    <div class="btn" @click="btnLogin">{{text}}</div>
  </div>
</template>

<script>
export default {
   props:['text'],
   methods:{
     btnLogin(){
       this.$emit('login',this.text)
     }
   }
}
</script>

<style lang="less" scoped>
.btn{
  background: #cc3300;
  color: white;
  height: 13.333vw;
  font-size: 5.556vw;
  border-radius: 6.667vw;
  text-align: center;
  line-height: 13.333vw;
  margin-top: 11.111vw;
}
</style>