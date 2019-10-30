<template>
    <div class="wrapper" @click="sendpro">
       <div class="proflieBar">
       <div class="concern">{{label}}</div>
       <div class="Usefoll">{{desc}}</div>
       <span class="iconfont iconjiantou1"></span>
    </div>
    </div>
</template>

<script>
export default {
   props:['label','desc'],
   methods:{
     sendpro(){
       this.$emit('inptBtn');
     }
   }
}
</script>

<style lang="less" scoped>
 .proflieBar{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid #eee;
    font-size: 17px;
    .Usefoll{
      flex: 1;
      text-align: right;
      color: #888;
    }
    .iconfont{
      font-size: 17px;
      padding-left: 6px;
    }
 }
 
</style>