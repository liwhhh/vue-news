<template>
  <div class="wrapper">
        <div class="left" @click="sendPro">
          <span class="iconfont iconjiantou2"></span>
          <span class="iconfont iconnew"></span>
        </div>
       <div class="follow" v-if="!post.has_follow" @click="follow">关注</div>
      <div class="unfollow" v-else-if="post.has_follow" @click="unfollow">已关注</div>
  </div>
</template>

<script>
  export default {
    props:['post'],
    data() {
      return {
        
      }
    },
    methods:{
      sendPro(){
        this.$emit('sendpro')
      },
      follow(){
         this.$axios({
           url:"/user_follows/"+this.post.user.id, //通过用户id关注
           method:'get'
         }).then(res=>{
           const {message}=res.data;
           console.log('关注',message)
           if(message == '关注成功'){
             this.post.has_follow=true;
           }
         })
      },
      unfollow(){//点击取消关注
        this.$axios({
          url:'/user_unfollow/'+this.post.user.id,
          method:'get'
        }).then(res=>{
          console.log('取消',res.data)
          const {message}=res.data;
          if(message == '取消关注成功'){
            this.post.has_follow=false;
          }
        })

      }
    }
  };
</script>

<style lang="less" scoped>
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.778vw;
    .left{
       display: flex;
       justify-content: center;
       align-items: center;
      .iconnew{
        font-size: 12.5vw;
      }
    }
    .follow{
      padding: 4px 10px;
      color: white;
      background: red;
      border-radius: 14px;
      }
    .unfollow{
      padding: 4px 10px;
      border: 1px solid #888;
      border-radius: 15px;

    }
  }
    

</style>