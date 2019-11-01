<template>
  <div>
    <postDetailHeader :post="post"/>
    <div class="mellice">
      <h2>{{post.title}}</h2>
      <div class="card">
        <div class="nick" v-if="post.user">
          {{post.user.nickname}}  2019-10-23
          </div>
      </div>
      <!-- 内容不是视频 -->
      <div class="content" v-html="post.content" v-if="post.type!=2"></div>

      <!-- 是视频 -->
      <video class="video" 
      controls="controls"
      :poster="post.cover[0].url"
      src="https://video.pearvideo.com/mp4/adshort/20191031/cont-1617802-14542116_adpkg-ad_hd.mp4" 
      v-if="post.type==2"
      > 
      </video>

      <div class="btn">
        <div class="left" @click="like">
          <span class="iconfont icondianzan"></span>
          <span class="like">
            {{post.like_length}}
          </span>
        </div>
        <div class="wechat">
          <span class="iconfont iconweixin"></span>
          <a href="https://developers.weixin.qq.com/doc/offiaccount/Getting_Started/Explanation_of_interface_privileges.html">
          微信
          </a>
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
        postId: this.$route.params.id,
        post:{}
      }
    },
    mounted(){
      this.$axios({
        url:"/post/"+this.postId,
        method:'get'
      }).then(res=>{
        console.log('文章详情',res.data)
        const {data}=res.data;
        this.post=data;
      })
    },
    methods:{
      like(){//点赞
        this.$axios({
          url:"/post_like/"+this.post.user.id,
          method:'get'
        }).then(res=>{
          console.log('点赞',res.data)
          const {message} =res.data;
          if(message== '点赞成功'){
            this.post.has_like=true;
            this.post.like_length+=1;
          }else{ //取消成功
            this.post.has_like=false;
            this.post.like_length-=1;
          }
        })
      }
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
    .content{
      /deep/ img {
        max-width: 100%;
        padding: 5px 0;
       }
    }
     .video{
       width: 100%;
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
      margin-bottom: 13.889vw;
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
      .wechat{
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