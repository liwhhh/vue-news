<template>
   <div class="wrapper">
    <span class="iconfont iconicon-test"></span>
    <div class="middle">
       <span class="iconfont iconnew"></span>
    </div>
    <sonInput type="text" placeholder="用户名/手机号"
    rule="^\d{4,16}$"
    err_message="请输入正确的用户名"
   @input="setUserName"
    ></sonInput>

    <sonInput type="text" placeholder="昵称"
    rule="^\w{3,16}$"
    err_message="请输入正确的昵称"
   @input="setNickname"
    ></sonInput>

    <sonInput type="password" placeholder="密码"
    rule="^\d{3,16}$"
    err_message="请输入正确的密码"
   @input="setUserPwd"
    ></sonInput>

    <div>
      <sonBtn text="注 册" @login="setRegister"></sonBtn>
    </div>
  </div>
</template>

<script>
import sonInput from '../components/sonInput';
import sonBtn from '../components/sonBtn';
export default {
   components:{
     sonInput:sonInput,
     sonBtn:sonBtn
   },
   data(){
     return{
       username:"",
       nickname:"",
       password:""
     }
   },
   methods:{
     setUserName(name){
       this.username=name;
     },
      setNickname(nick){
        this.nickname=nick;
      },
      setUserPwd(pwd){
        this.password=pwd;
      },
      setRegister(name){
       this.$axios({
         url:"/register",
         method:"post",
         data:{
           username:this.username,
           password:this.password,
           nickname:this.nickname
         }
       }).then(res=>{
         if(!res.data.statusCode){
           this.$toast.success(res.data.message);
           this.$router.push({
             name:'loginPage'
           })
         }
       })
      } 
   }
}
</script>

<style lang="less" scoped>
 .wrapper{
    padding: 5.556vw;
  }
  .iconicon-test{
    font-size: 7.5vw;
  }
  .middle{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .iconnew{
    font-size: 35vw;
    align-items: center;
    color: #d81e06;
  }
</style>