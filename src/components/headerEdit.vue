<template>
  <div class="header">
    <span class="iconfont iconjiantou2"></span>
    <div class="text">{{label}}</div>
  </div>
</template>

<script>
export default {
  props:['label']
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