<template>
  <div class="wrapper">
     
     <div class="unActive" v-if="!isFocus">
       <input type="text" class="text" placeholder="写跟帖" @focus="showArea">
       <div class="people">
         <div class="iconfont iconpinglun-"></div>
         <div class="number">1020</div>
       </div>
       <div class="iconfont iconshoucang"></div>
       <div class="iconfont iconfenxiang"></div>
     </div>

     <div class="Active" v-if="isFocus">
       <textarea class="textarea" name="" id="" cols="30" rows="10"
        @blur="isFocus=false"
        ref="commentArea"></textarea>
       <div class="forward">发送</div>
     </div>

  </div>
</template>

<script>
export default {
    data(){
      return{
        isFocus:false
      }
    },
    methods:{
      showArea(){
        this.isFocus=true;
        this.$nextTick(()=>{
          this.$refs.commentArea.focus();
        })
      }

      
    }
}
</script>


<style lang="less" scoped>
.unActive{
  position: fixed;
  width: 100%;
  bottom: 0;
  display: flex;
  // justify-content: space-between;
  justify-content: flex-start;
  align-items: center;
  padding: 2.778vw;
  .text{
    width:47.222vw;
    height: 8.889vw;
    border: none;
    outline: none;
    background: #d7d7d7;
    padding-left: 2.778vw;
    border-radius: 4.444vw;
  }
  .people{
    position: relative;
    .number{
      position: absolute;
      top: -8px;
      left: 10vw;
      font-size: 10px;
      background: red;
      color: white;
      padding:2px 6px;
      line-height: 3.889vw;
      border-radius: 7px;

    }
  }
  .iconfont{
    font-size: 6.111vw;
    margin-left: 8.333vw;
  }
}

.Active{
   position: fixed;
   width: 100%;
   bottom: 0;
   display: flex;
   align-items: flex-end;
   padding: 10px;
   .textarea{
     width: 72.222vw;
     height: 25vw;
     background: #d7d7d7;
     border: none;
     resize:none;
     border-radius: 10px;
     padding: 10px;
     box-sizing: border-box;
   }
   .forward{
     padding: 8px 20px;
     background: red;
     color: white;
     text-align: center;
     border-radius:4.444vw;
     margin-left: 2.778vw;
     font-size: 3.889vw;
   }
}
  
</style>