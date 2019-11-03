<template>
    <div class="commentWarpper">
      <div class="meta">
        <img class="avatar" src="/static/images/hu.png" alt="">
        <div class="info">
         <div class="name">或取消函数</div>
         <div class="tiem">2小时前</div>
        </div>
        <div class="btnReply">回复</div>
      </div>
        <div class="commentContent">
        {{commentItem.content}}
        </div>
    </div>
</template>

<script>
import headerEdit from '../components/headerEdit';
export default {
  components:{
    headerEdit
  },
   props:['commentItem']
}
</script>

<style lang="less" scoped>

.commentWarpper{
  border-bottom: 1px solid #eee;
  padding: 20px 10px;
  .meta{
    display: flex;
    justify-content: space-between;
    .avatar{
      width: 15.278vw;
      height: 15.278vw;
      border-radius: 50%;
    }
    .info{
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      flex: 1;
      align-items: left;
      padding-left: 10px;
      .tiem{
       color: #888;
       font-size: 14px;
      }
    }
  }
  .commentContent{
    padding-top: 20px;
  }
}

</style>