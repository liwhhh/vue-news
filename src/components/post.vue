<template>
  <div>
     
      <!-- 添加一个视频的模板 -->
        <div class="videoPost" v-if="item.type == 2">
            <div class="title">{{item.title}}</div>
            <div class="cover">
                <img :src="item.cover[0].url" alt="" class="coverImg">
                <div class="btnWrapper">
                    <div class="iconfont iconshipin"></div>
                </div>
            </div>
            <div class="info">{{item.user.nickname}} {{item.comment_length}}跟帖</div>
        </div>



    <!-- 1~2张会显示 -->
    <div class="singleIngPost" v-else-if="item.cover.length > 0 && item.cover.length < 3">
      <div class="left">
        <div class="title">{{item.title}}</div>
        <div class="info">{{item.user.nickname}} {{item.comment_length}}跟帖</div>
      </div>
      <img :src="item.cover[0].url" alt class="imgRight" />
    </div>

    <!-- 3张图片的话 -->
    <div class="multipImgPost" v-else-if="item.cover.length >= 3">
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
    border-bottom: 1px solid #eee;
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

  //3张图片
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
  //视频样式
  .videoPost{
    padding: 2.778vw;
    border-bottom: 1px solid #eee;
    .title{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
    .info{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      font-size: 14px;
      color: #888;
    }
    .cover{
      margin: 2.778vw 0;
      position: relative;
      .coverImg{
        width: 100%;
        height: 47.222vw;
        object-fit: cover;//截取中间部分
      }
      .btnWrapper{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .iconfont{
          width: 12.778vw;
          height: 12.778vw;
          text-align: center;
          line-height: 12.778vw;
          background: #ccc;
          color:#fff;
          font-size: 12.778vw;
          border-radius: 6.667vw;
        }
      }
    }
  }
</style>