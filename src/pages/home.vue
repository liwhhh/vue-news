<template>
  <div>
    <homeHeader label="新闻搜索"></homeHeader>
   <van-tabs v-model="activeTab" sticky swipeable>
    <van-tab
    v-for="(tabItem,index) in tabCategoryList" :key="index"
     :title="tabItem.name">

     <!-- <div v-for="(post,index) in tabItem.posts" :key="index">
         {{post.title}}
     </div> -->
     <!-- ↑封装成组件 -->
     
 <!-- tabItem.finished 一个布尔值, 标注当前列表是否已经到底,如果数据库里面的数据都被获取完了,这个数值就应该是 true, 这个列表再也不会触发到底部加载的函数, 每个分类单独记录 
 load 是一个到底部就会触发的时间,可以绑定一个自定义函数,在里面写读取新数据的逻辑 
  immediate-check 这个是设置组件是否在加载完毕后马上执行第一次数据获取,
   由于我们自己在 initTabList 函数里面已经手动获取了数据,就不需要这个组件发送一次请求,我们设置为 false-->
     <van-list
      v-model="loading"
      :finished="tabItem.finished"
      finished-text="没有更多了"
      @load="loadMorePost"
      :immediate-check="false">
   <!-- immediate-check="false"是否在初始值时立即滚动位置 -->
      <post :item="post" v-for="(post,index) in tabItem.posts" :key="index" />

    </van-list>

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
        pageSize: 6,
        loading: false,
      //finished: false,//若数据已全部加载完毕，则直接将finished设置成true即可。
       
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
     //加载事件
     loadMorePost(){
      console.log('触发了加载函数');
      this.tabCategoryList[this.activeTab].currentPage+=1;
      //发送ajax请求获取文章列表数据
      this.getTabPosts(this.activeTab);//马上获取这个函数方法 一次获取六条数据
     },
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
           pageSize: this.pageSize, 
           pageIndex: this.tabCategoryList[tabIndex].currentPage  
         }
       }).then(res=>{ //通过栏目id
          const {data}=res.data;
          console.log(data);
          //获取文章列表数据后,一个传入 tabIndex对应的tab对象当中
          // this.tabCategoryList[tabIndex].posts=data;//一次直接获取过来的给posts空数组
           
           // 获取完了对应的文章列表数据,放进传入tabIndex对应tab对象当中,不能直接覆盖数据-需要拼接
           const newData=[...this.tabCategoryList[tabIndex].posts,...data];
           //1.👆上面的解构写法,将this.tabCategoryList[tabIndex].posts里面的每一个数据都放入一个新数组
          // 2.👆然后将data的每一个元素也继续放入这个数组当中,然后返回包含两个数组所有元素的一个新数组,达到拼接两个数组数据的目的。
          this.tabCategoryList[tabIndex].posts=newData;
          //数据获取完毕了，要手动将读取状态 this.loading设置为false;可以（隐藏加载中的几个字）
          this.loading=false;
          //如果新获取的data数据长度，少于我们设置的每页数据大小,说明已经翻到最后一页了，
           if(data.length < this.pageSize){  //后台数据长度 < 这个条数
             //把当前的tab的finished属性修改为true,避免下次继续触发加载函数
             this.tabCategoryList[this.activeTab].finished=true;

           }


          // 下面这种写法也能达到效果
          // var newData=[];
          // this.tabCategoryList[tabIndex].posts.forEach(element=>{
          //   newData.push(element)
          // });
          // data.forEach(element=>{
          //   newData.push(element)
          // });
       })
     }
     
   }
}
</script>

<style lang="less" scoped>

</style>