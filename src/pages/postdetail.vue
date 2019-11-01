<template>
  <div>
    <postDetailHeader/>

   <postDetailFooter/>
  </div>
</template>

<script>
import postDetailHeader from '../components/postDetailHeader.vue';
import postDetailFooter from '../components/postDeatilFooter.vue';
export default {
  components:{
    postDetailHeader,
    postDetailFooter
  },
     data(){
       return{
         //得到主页的动态 路由 
         postId:this.$route.params.id,
       }
     }
}
</script>

<style>

</style>