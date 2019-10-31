<template>
  <div>
    <HeaderEdit label="我的收藏" @inpBtn="collecToProfile"></HeaderEdit>
    <post :item="post" v-for="(post,index) in collectionList" :key="index"></post>
  </div>
</template>

<script>
import HeaderEdit from '../components/headerEdit.vue';
import post from '../components/post.vue';
export default {
   components:{
     HeaderEdit,
     post
   },
   data(){
     return{
       collectionList:[]
     }
   },
   methods:{
      collecToProfile(){
        this.$router.push({
          name:'profilePage'
        })
      }
   },
   mounted(){
     this.$axios({
       url:"/user_star",
       method:"get"
     }).then(res=>{
       console.log(res.data.data);
       this.collectionList=res.data.data;

       this.collectionList.forEach(element=>{
        //  comments.length里面放的图片
         element.comment_length=element.comments.length;
        if(element.cover){
          //如果有cover
          element.cover.forEach(element=>{
            // 没有找到url 的http 才加上http<ip地址>
             if(element.url.indexOf('http')<0){
           element.url = this.$axios.defaults.baseURL + element.url
          }
          })
        }
       })
     })
   }
   
}
</script>

<style>

</style>