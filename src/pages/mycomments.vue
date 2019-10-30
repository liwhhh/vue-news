<template>
  <div>
      <headerEdit label="我的跟帖" ></headerEdit>
      <div class="item" v-for="item in commentList" :key='item.id' >
        <div class="data">2019-10-10 10:25</div>
        <div class="parent">
           <div class="name"  v-if="item.parent">
             回复: {{item.parent.user.nickname}}
             </div>
           <div class="parentContent">
            {{item.parent.content}}
           </div>
        </div>
        <div class="mainContent">
          {{item.content}}
        </div>
        <div class="origin">
          <div class="postOrigin">
         原文:{{item.post.title}}
         <div>aa</div>
        </div>
        <span class="iconfont iconjiantou1">
        </span>
        </div>
      </div>
  </div>
</template>

<script>
import headerEdit from '../components/headerEdit.vue';
export default {
   components:{
     headerEdit:headerEdit
   },
   data(){
     return{
       commentList:[]
     }
   },
   mounted(){
     this.$axios({
       url:"/user_comments",
       method:"get"
     }).then(res=>{
       console.log(res.data);
      //  这里我们拿到了评论数据
       this.commentList=res.data.data
     })
   }
}
</script>

<style lang="less" scoped>
.item{
  padding: 5.556vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 border-bottom: 1px solid #eee;
  .data{
    color: #888;
  }
  .parent{
    margin: 4.444vw 0;
    background: #eee;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #888;
  }
  .name{
    height: 7.778vw;
  }
  .parentContent{
    flex: 1;
  }

  .origin{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .iconfont{
      padding-left: 5.556vw;
    }
  }
  .postOrigin{
    margin-top: 2.778vw;
     color: #888;
     display: -webkit-box;
    -webkit-box-orient: vertical;
    // 使用了变量 @hang
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}

</style>