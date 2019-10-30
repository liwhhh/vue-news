<template>
  <div>
      <headerEdit label="我的跟帖" ></headerEdit>
      <div class="item">
        <div class="data">2019-10-10 10:25</div>
        <div class="parent">
           <div class="name">回复: 火星彩票员</div>
           <div class="parentContent">
            阿信是张信哲吗?是不是它的弟弟?
           </div>
        </div>
        <div class="mainContent">
          不是
        </div>
        <div class="origin">
          <div class="postOrigin">
         原文:阿信分享《说好不哭》幕后故事：执行是不是该哈根爱韩庚爱韩庚..
        </div>
        <span class="iconfont iconjiantou1">
        </span>
        </div>
      </div>
  </div>
</template>

<script>
import headerEdit from '../components/headerEdit.vue';
export default {
   components:{
     headerEdit:headerEdit
   }
}
</script>

<style lang="less" scoped>
.item{
  padding: 5.556vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
 border-bottom: 1px solid #eee;
  .data{
    color: #888;
  }
  .parent{
    margin: 4.444vw 0;
    background: #eee;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #888;
  }
  .name{
    height: 7.778vw;
  }
  .parentContent{
    flex: 1;
  }

  .origin{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .iconfont{
      padding-left: 5.556vw;
    }
  }
  .postOrigin{
    margin-top: 2.778vw;
     color: #888;
     display: -webkit-box;
    -webkit-box-orient: vertical;
    // 使用了变量 @hang
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}

</style>