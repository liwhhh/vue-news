<template>
  <div class="warpper"> 
    <abx v-if="floorItem.parent" :floorItem="floorItem.parent"></abx>
    <div class="floorWrapper">
       <div class="meta">
          <div class="info">
            {{floorItem.user.nickname}}
            <span class="time">2小时前</span>
          </div>
          <div class="btnReply">回复</div>
       </div>
       <div class="floorConent">
         {{floorItem.content}}
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'abx',
    props:[
      'floorItem'
    ]
}
</script>

<style lang="less" scoped>
.warpper{
   margin-top: 5.556vw;
}
.floorWrapper{
  display: flex;
  flex-direction: column;
  height: 16.667vw;
  justify-content: space-between;
  border: 1px solid #eee;
  padding: 5.556vw;
  .meta{
    display: flex;
    justify-content: space-between;
    .time{
      color: #888;
      padding-left: 10px;
      font-size: 3.889vw;
    }
    .btnReply{
      color: #888;
    }
  }
}
</style>