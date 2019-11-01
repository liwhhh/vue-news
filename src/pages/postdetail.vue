<template>
  <div>
    <postDetailHeader />
    <div class="mellice">
      <h2>车主注意啦,哈狗一回国一啊哈哈够吃几哈阿后方拍黄瓜</h2>
      <div class="card">
        <div class="nick">火星时报</div>
        <div class="tiem">2019-10-10</div>
      </div>
      <div class="conent">低价股很反感好多个以安徽鬼爱过后2年代胡歌佛庵121伙伴加工费哈嘿爱过后阿惠伟蛤ugh2发UI更换还闬4能打覅回归4回复大家观看发布</div>
      <div class="btn">
        <div class="left">
          <span class="iconfont icondianzan"></span>
          <span class="like">112</span>
        </div>
        <div class="right">
          <span class="iconfont iconweixin"></span>
          <span>微信</span>
        </div>
      </div>
    </div>

    <postDetailFooter />
  </div>
</template>

<script>
  import postDetailHeader from "../components/postDetailHeader.vue";
  import postDetailFooter from "../components/postDeatilFooter.vue";
  export default {
    components: {
      postDetailHeader,
      postDetailFooter
    },
    data() {
      return {
        //得到主页的动态 路由
        postId: this.$route.params.id
      };
    }
  };
</script>

<style lang="less">
  .mellice {
    padding: 2.778vw;
    h2 {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .card {
      display: flex;
      padding: 2.778vw 0 5.556vw 0;
      color: #888;
      .nick {
        padding-right: 2.778vw;
      }
    }
    .btn{
      display: flex;
      justify-content: space-evenly;
      padding-top:11.111vw;
      .left{
        width: 20.833vw;
        border: 1px solid #888;
        height: 8.333vw;
        line-height: 8.056vw;
        text-align: center;
        font-size: 3.889vw;
        border-radius: 4.444vw;
        .iconfont{
         font-size: 4.444vw;
        }
      }
      .right{
        width: 20.833vw;
        border: 1px solid #888;
        height: 8.333vw;
        line-height: 8.056vw;
        text-align: center;
        font-size: 3.889vw;
        border-radius: 4.444vw;
        .iconfont{
         font-size: 4.444vw;
         color: #00c800;
        }
      }
    }
  }
</style>