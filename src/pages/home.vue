<template>
  <div>
    <homeHeader label="新闻搜索"></homeHeader>
   <van-tabs v-model="activeTab">
    <van-tab
    v-for="(tabItem,index) in tabCategoryList" :key="index"
     :title="tabItem.name">
     {{tabItem.name}}
     </van-tab>
    
  </van-tabs>
  </div>
</template>

<script>
import homeHeader from '../components/homeHeader';
export default {
  components:{
    homeHeader:homeHeader
  },
  data(){
    return{
      // 控制当前显示选项
      // 如果有登陆的话,第一个分类是关注,头条的 index == 1
       // 如果没登录第一个分类就是头条,它的 index == 0
        // 获取 token 就可以判断有没有登陆,设置一个默认激活的当前分类
        activeTab:localStorage.getItem('token') ? 1:0,
        tabCategoryList:[],
    }
  },
  mounted(){
    // ajax获取栏目列表数据
    this.$axios({
      url:"/category",
      method:"get"
    }).then(res=>{
      const {data}=res.data;//好多项
      data.forEach(element => {
    // 这是初始化 tab 列表,// 有什么东西是每个 tab 应该分开来记录的,
    // 而默认有没有,我们在初始化的时候// 加上去
        element.posts=[];
        element.currentPage=1;
        element.finished=false;
      });
      this.tabCategoryList=data;
      console.log(this.tabCategoryList)
    })

  },
   methods:{
     
   }
}
</script>

<style lang="less" scoped>

</style>