<template>
  <div>
    <headerEdit label="编辑资料"></headerEdit>
    <div class="avatar">
      <img src="/static/images/hu.png" alt="">
    </div>
    <sonCell label="昵称" desc="火星网友" @inptBtn="setNickName"></sonCell>
    <sonCell label="密码" desc="****" @inptBtn="setPassWord"></sonCell>
    <sonCell label="性别" desc="男" @inptBtn="setGender"></sonCell>
  </div>
</template>

<script>
import headerEdit from '../components/headerEdit.vue';
import sonCell from '../components/soncell.vue';
export default {
    components:{
      headerEdit:headerEdit,
      sonCell:sonCell
    },
    methods:{
      setNickName(){//设置昵称
        alert('加油')
      },
      setPassWord(){
        alert('加油')

      },
      setGender(){
        alert('加油')

      }
    }
}
</script>

<style lang="less" scoped>
 .avatar{
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   img{
     margin:13.889vw 0;
     width: 19.444vw;
     height: 19.444vw;
     border-radius: 50%;
   }
 }
</style>