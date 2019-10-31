<template>
  <div>
    <homeHeader label="新闻搜索"></homeHeader>
   <van-tabs v-model="activeTab" sticky >
    <van-tab
    v-for="(tabItem,index) in tabCategoryList" :key="index"
     :title="tabItem.name">

     <!-- <div v-for="(post,index) in tabItem.posts" :key="index">
         {{post.title}}
     </div> -->
     <!-- ↑封装成组件 -->
     <post :item="post" v-for="(post,index) in tabItem.posts" :key="index" >

     </post>

     </van-tab>
  </van-tabs>
  </div>
</template>

<script>
import homeHeader from '../components/homeHeader';
import post from '../components/post';
export default {
  components:{
    homeHeader,
    post,
  },
  data(){
    return{
      // 控制当前显示选项
      // 如果有登陆的话,第一个分类是关注,头条的 index == 1
       // 如果没登录第一个分类就是头条,它的 index == 0
        // 获取 token 就可以判断有没有登陆,设置一个默认激活的当前分类
        activeTab:localStorage.getItem('token') ? 1:0,
        tabCategoryList:[],
        // pageSize: 6,
       
    }
  },
  mounted(){
     this.initTabList();
  },
  watch:{
    // 监听 当前激活分类tabIndex的变化,重新拉文章数据
    activeTab(newActiveTab) {
      //每次切换tab都会触发ajax请求
      if(this.tabCategoryList[newActiveTab].posts.length ==0){
      // 如果这个被选中的tabIndex对应哪个tab对象里面的posts长度为 0 
       // 证明没有数据,于是发送请求,不然就不去管
      this.getTabPosts(newActiveTab)

      }
    }
  },
   methods:{
     initTabList(){
        // ajax获取栏目列表数据
          this.$axios({
            url:"/category",
            method:"get"
          }).then(res=>{
            const {data}=res.data;//好多项
            data.forEach(element => {
          // 这是初始化 tab 列表,// 有什么东西是每个 tab 应该分开来记录的,
          // 而默认有没有,我们在初始化的时候// 加上去
              element.posts=[]; //强行插一个空数组 文章列表
              element.currentPage=1; //id
              element.finished=false;
            });
            this.tabCategoryList=data;
            // console.log(this.tabCategoryList)
            //获取完tab分类数据栏目列表后,马上使用默认的tab(头条)获取文章列表数据渲染页面
            this.getTabPosts(this.activeTab);
          })
     },
     //封装获取分类文章数据方法
     getTabPosts(tabIndex){
     // 传入了 tab 的 index就可以通过 data 里面的 tabList 数据
       // 获取到对应的 分类 id 
       const categoryId=this.tabCategoryList[tabIndex].id;
      //  console.log(this.tabCategoryList[tabIndex].currentPage);
       this.$axios({
         url:"/post", //'..?category='+id
         method:"get",
         params:{
           category:categoryId,//传的id
         }
       }).then(res=>{ //通过栏目id
          const {data}=res.data;
          console.log(data);
          //获取文章列表数据后,一个传入 tabIndex对应的tab对象当中
          this.tabCategoryList[tabIndex].posts=data;
       })
     }
     
   }
}
</script>

<style lang="less" scoped>

</style>