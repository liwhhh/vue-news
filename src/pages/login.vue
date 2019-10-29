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
    <sonInput type="password" placeholder="密码"
    rule="^\d{3,16}$"
    err_message="请输入正确的密码"
   @input="setUserPwd"
    ></sonInput>

    <div>
      <sonBtn text="登 录" @login="setLogin"></sonBtn>
    </div>
  </div>
</template>

<script>
import sonInput from '../components/sonInput.vue';
import sonBtn from '../components/sonBtn.vue';
export default {
  components:{
    sonInput:sonInput,
    sonBtn:sonBtn
  },
  data(){
    return{
      username:"",
      password:""
    }
  },
  methods:{
    setUserName(name){
     this.username=name;
    },
    setUserPwd(pwd){
      this.password=pwd;
    },
    setLogin(name){
       console.log('登录是:'+name)
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