<template>
  <div>
    <headerEdit label="我的关注" @inpBtn="toProfile"></headerEdit>
    <div class="item" v-for="item in myfollows" :key="item.id">
      <img :src="item.head_img" alt="">
      <div class="itemMiddle">
        <div class="name">{{item.nickname}}</div>
        <div class="time">2019-10-10</div>
      </div>
      <!--取消关注哪一个用户,就将当前的用户id 传进去 -->
      <div class="btnCancel" @click="cancelFollow(item.id)">取消关注</div>
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
       myfollows:[]
     }
   },
   methods:{
     loadPage(){
       this.$axios({
       url:'/user_follows/',
       method:'get'
     }).then(res=>{
       console.log(res.data.data)
       this.myfollows=res.data.data;
       //不确定所有数据都有头像,
       this.myfollows.forEach(element=>{
         if(!element.head_img){//没有头像,就给一个默认地址,
           element.head_img = "/static/imgs/avatar.jpg"
         }else {
            element.head_img = this.$axios.defaults.baseURL + element.head_img
         }
       })
     })
  
     },
    toProfile(){
      this.$router.push({
        name:'profilePage'
      })
    },
    cancelFollow(id){
      //收集数据 发送ajax 请求
      this.$axios({
        url:"/user_unfollow/"+id,
        method:'get'
      }).then(res=>{
        this.loadPage();
      })
    }
   },
   mounted(){
     this.loadPage()
   }
}
</script>

<style lang="less" scoped>
 .item{
   display: flex;
   justify-content: space-between;//主轴对齐
   align-items: center;//侧轴对象
   padding: 5.556vw;
   border-bottom:1px solid #ccc; 
   .itemMiddle{
     flex: 1;
     padding-left: 10px;
     text-align: left;
     .name{
       font-size: 5.556vw;
     }
     .time{
       font-size: 4.444vw;
       color: #888;
     }
   }
   img{
     width: 11.111vw;
     height: 11.111vw;
     border-radius: 50%;
   }
   .btnCancel{
     font-size: 4.167vw;
     background: #ddd;
     padding:6px 10px;
     border-radius: 9.722vw;
   }
 }
</style>