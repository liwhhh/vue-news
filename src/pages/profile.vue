<template>
  <div class="wrapper">
    <div class="profile">
      <img class="avatar" src="/static/images/hu.png" alt="" />
    <div class="pro_meddle">
      <div class="mellie">
        <span class="iconfont iconxingbienan"></span>
        <span class="wangyou">火星网页</span>
      </div>
      <div class="tiem">2019-10-10</div>
    </div>
    <div class="pro_right">
      <span class="iconfont iconjiantou1"></span>
    </div>
  </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="less" scoped>
.wrapper{
  border-bottom:5px solid #eee; 
}
  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 5.556vw;
  }
    .avatar {
      width: 19.444vw;
      height: 19.444vw;
      border-radius: 9.722vw;
    }
  .pro_meddle {
    flex: 1;
    padding-left: 2.778vw;
    font-size: 16px;

    display: flex; //伸缩盒子
    flex-direction: column; //改变主轴方向
    justify-content: space-between; //两端
    height: 12.5vw;
    .tiem {
     font-size: 14px;
      color: #888;
    }
  }
  .iconjiantou1 {
    font-size: 5vw;
  }
</style>