<template>
  <postDetailHeader/>

</template>

<script>
import postDetailHeader from '../components/postDetailHeader.vue';
export default {
  components:{
    postDetailHeader
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