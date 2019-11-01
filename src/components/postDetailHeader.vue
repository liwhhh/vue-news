<template>
  <div class="wrapper">

    <div class="follow" v-if="!isShow">
      <div class="left" >
        <span class="iconfont iconjiantou2"></span>
        <span class="iconfont iconnew"></span>
      </div>
      <div class="right">关注</div>
    </div>

    <div class="unfollow"  v-if="isShow">
      <div class="left">
        <span class="iconfont iconjiantou2"></span>
        <span class="iconfont iconnew"></span>
      </div>
      <div class="right">已关注</div>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: true
      };
    }
  };
</script>

<style lang="less" scoped>
  .unfollow {
    padding: 2.778vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      .iconnew {
        font-size: 12.5vw;
        padding-left: 1.667vw;
      }
    }
    .right {
      width: 17.222vw;
      font-size: 13px;
      text-align: center;
      padding: 5px 0;
      border-radius: 13px;
      border: 0.278vw solid #888;
      color: #333;
    }
  }
  .follow {
    padding: 2.778vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      .iconnew {
        font-size: 12.5vw;
        padding-left: 1.667vw;
      }
    }
    .right {
      width: 17.222vw;
      font-size: 13px;
      text-align: center;
      padding: 5px 0;
      border-radius: 4.167vw;
      background-color: red;
      border: 0.278vw solid red;
      color: #fff;
    }
  }
</style>