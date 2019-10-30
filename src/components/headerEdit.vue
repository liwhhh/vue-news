<template>
  <div class="header" @click="send">
    <span class="iconfont iconjiantou2"></span>
    <div class="text">{{label}}</div>
  </div>
</template>

<script>
export default {
  props:['label'],
  methods:{
    send(){
      this.$emit('inpBtn')
    }
  }
}
</script>

<style lang="less" scoped>
 .header{
   padding: 20px;
   display: flex;
   justify-content: space-between;
    .text{
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
 }
</style>