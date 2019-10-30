<template>
  <div>
    <headerEdit label="我的关注"></headerEdit>
    <div class="item">
      <img src="/static/images/hu.png" alt="">
      <div class="itemMiddle">
        <div class="name">火星新闻播报</div>
        <div class="time">2019-10-10</div>
      </div>
      <div class="btnCancel">取消关注</div>
    </div>
  </div>
</template>

<script>
import headerEdit from '../components/headerEdit.vue';
export default {
   components:{
     headerEdit:headerEdit
   }
}
</script>

<style lang="less" scoped>
 .item{
   display: flex;
   justify-content: space-between;//主轴对齐
   align-items: center;//侧轴对象
   padding: 5.556vw;
   .itemMiddle{
     flex: 1;
     padding-left: 10px;
     text-align: left;
     .name{
       font-size: 5.556vw;
     }
     .time{
       font-size: 4.444vw;
       color: #888;
     }
   }
   img{
     width: 11.111vw;
     height: 11.111vw;
     border-radius: 50%;
   }
   .btnCancel{
     font-size: 4.167vw;
     background: #ddd;
     padding:6px 10px;
     border-radius: 9.722vw;
   }
 }
</style>