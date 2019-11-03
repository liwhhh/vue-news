<template>
  <div>
    <HeaderEdit label="更多跟帖" @inpBtn="$router.back()"></HeaderEdit>
    <comment 
      :commentItem="item"
      v-for="(item,index) in commentList" :key="index"
    ></comment>
  </div>
</template>

<script>
import HeaderEdit from '../components/headerEdit';
import comment from '../components/comment';
export default {
  components:{
    HeaderEdit,
    comment
  },
    data(){
      return{
        //动态获取路由id
        postId:this.$route.params.id,
        commentList:[]
      }
    },
    mounted(){
      this.$axios({
        url:"/post_comment/"+this.postId,
        method:'get'
      }).then(res=>{
        const {data}=res.data;
        console.log('精彩跟帖要的数据',data)
        this.commentList=data;
      })
    }
}
</script>


<style lang="less" scoped>


</style>