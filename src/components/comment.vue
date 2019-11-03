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
      :floorItem="commentItem.parent"
      :parentLength="parentLength"></commentFloor>
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
   props:['commentItem'],
  //  1.统计出一个回帖所有的 parent 深度 ,2.传给递归里层自己调用自己
   data(){
     return{
       parentLength:this.countParnet(0,this.commentItem)
     }
   },
   methods:{
     countParnet(num,obj){
       if(obj.parent){
         return this.countParnet(num+1,obj.parent);
       }else{
         console.log(num)
         return num;
       }
     }
   }
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