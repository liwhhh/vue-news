<template>
  <div>
    <!-- 1~2张会显示 -->
    <div class="singleIngPost" v-if="item.cover.length > 0 && item.cover.length < 3">
      <div class="left">
        <div class="title">{{item.title}}</div>
        <div class="info">{{item.user.nickname}} {{item.comment_length}}跟帖</div>
      </div>
      <img :src="item.cover[0].url" alt class="imgRight" />
    </div>

    <!-- 3张图片的话 -->
    <div class="multipImgPost" v-if="item.cover.length >= 3">
      <div class="title">{{item.title}}</div>
      <div class="meilles">
        <img :src="item.cover[0].url" alt class="coverImg" />
        <img :src="item.cover[1].url" alt class="coverImg" />
        <img :src="item.cover[2].url" alt class="coverImg" />
      </div>
      <div class="infos">{{item.user.nickname}} {{item.comment_length}}跟帖</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["item"]
  };
</script>

<style lang="less" scoped>
  .singleIngPost {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.778vw;
    border: 1px solid #eee;
    .left {
      flex: 1;
      height: 20.833vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-right: 2.778vw;
    }
    .title {
      //两行就...
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .info {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      color: #888;
    }
    .imgRight {
      object-fit: cover; //自动截取中间部分内容,不变形
      width: 33.611vw;
      height: 20.833vw;
    }
  }

  //3张
  .multipImgPost {
    padding: 2.778vw;
    border: 1px solid #eee;
    .title {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .meilles {
      display: flex;
      padding: 2.778vw;
      justify-content: space-around;
      .coverImg {
        width: 33%;
        height: 20.556vw;
        object-fit: cover;
      }
    }
    .infos {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      font-size: 14px;
      color: #888;
    }
  }
</style>