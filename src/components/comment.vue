<template>
    <div class="commentWarpper">
      <div class="meta">
        <img class="avatar" :src="$axios.defaults.baseURL +commentItem.user.head_img" alt="">
        <div class="info">
         <div class="name">{{commentItem.user.nickname}}</div>
         <div class="tiem">2小时前</div>
        </div>
        <div class="btnReply">回复</div>
      </div>
      <!-- 楼层组件 -->
      <!-- 如果有parent楼层组件.就把parent组件传给楼层组件 -->
      <commentFloor v-if="commentItem.parent" 
      :floorItem="commentItem.parent"></commentFloor>
        <div class="commentContent">
        {{commentItem.content}}
        </div>
    </div>
</template>

<script>
import commentFloor from '../components/commentFloor';
export default {
  components:{
    commentFloor //楼层组件
  },
   props:['commentItem']
}
</script>

<style lang="less" scoped>

.commentWarpper{
  border-bottom: 1px solid #eee;
  padding: 30px 20px;
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