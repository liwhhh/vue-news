<template>
  <div>
    <div class="singleIngPost">
        <div class="left">
           <div class="title">{{item.title}}</div>
           <div class="info">{{item.user.nickname}} {{item.comment_length}}跟帖</div>
        </div>
        <img :src="item.cover[0].url" alt="" class="imgRight" />
    </div>
  </div>
</template>

<script>
export default {
  props:['item']
}
</script>

<style lang="less" scoped>
.singleIngPost{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.778vw;
  border: 1px solid #eee;
  .left{
    flex: 1;
    height: 20.833vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right:2.778vw;
  }
  .title{ //两行就...
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    }
    .info{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    color: #888;
    }
  .imgRight{
    object-fit: cover;//自动截取中间部分内容,不变形
    width: 33.611vw;
    height: 20.833vw;
  }
}
</style>