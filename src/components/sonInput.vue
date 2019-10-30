<template>
  <div>
    <input class="input" :class="{error:!isOk}" :type="type" 
    :placeholder="placeholder"
      @input="datange"
      @blur="showTips">
  </div>
</template>

<script>
export default {
   props:['type','placeholder','rule','err_message'],
   data(){
     return{
       isOk:true
     }
   },
   methods:{
     showTips(){ //鼠标失去焦点时有误
        if(!this.isOk){
          this.$toast.fail(this.err_message);
        }
       },
     datange($event){
       //如果没有触发这个目标
       if(!$event.target.value){
         this.isOk=true;
       }else{
         //有触发就验证表单式
         var regex=new RegExp(this.rule);
         //随着表达式正确与否改变下边框颜色
         this.isOk=regex.test($event.target.value);
       }
        this.$emit('input',$event.target.value);//把目标给父元素
       },
       
   }
    
}
</script>

<style lang="less" scoped>
 .input{
   margin-top:5.556vw;
   width: 100%;
   border:none;
   outline:none;
   font-size:5.556vw;
   border-bottom:1px solid #757575;
   padding: 10px 0;
 }
 .error{
   border-bottom:1px solid red;
 }
</style>