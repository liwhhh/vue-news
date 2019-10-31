<template>
  <div class="wrapper">
    <div class="profile">
      <!-- <img class="avatar" :src="/static/images/hu.png" alt /> -->
      <img class="avatar" :src="profile.head_img" alt />
      <div class="pro_meddle">
        <div class="mellie">
          <span v-if="profile.gender == 1" class="iconfont iconxingbienan"></span>
          <span v-else class="iconfont iconxingbienv"></span>
            {{profile.nickname}}
        </div>
        <div class="tiem">2019-10-10</div>
      </div>
      <div class="pro_right">
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
    <sonCell label="我的关注" desc="关注的用户" @inptBtn="proToFollows"></sonCell>
    <sonCell label="我的跟帖" desc="跟帖/回复" @inptBtn="proToComments"></sonCell>
    <sonCell label="我的收藏" desc="文章/视频" @inptBtn="proToCollections"></sonCell>
    <sonCell label="设置" @inptBtn="proToEditPage"></sonCell>
    <sonCell label="退出" @inptBtn="outLogin"></sonCell>
  </div>
</template>

<script>
  import sonCell from "../components/soncell.vue";
  export default {
    components: {
      sonCell: sonCell
    },
    data(){
      return{
        profile:[]
      }
    },
    methods: {
      sendPre(name) {
        console.log(name + "aa");
      },
      outLogin(){//退出登录
         localStorage.removeItem('token');
         localStorage.removeItem('user_id');
         this.$router.replace('/login');
      },
      proToEditPage(){//点击设置,去到编辑页
         this.$router.push({
           name:'editprofilePage'
         })
      },
      proToFollows(){//去我的关注页
        this.$router.push({
          name:'myfollowsPage'
        })
      },
      proToComments(){//去评论 我的跟帖
        this.$router.push({
          name:'mycommentsPage'
        })
      },
      proToCollections(){ //去的收藏页 文章/视频
        this.$router.push({
          name:'mycollectionsPage'
        })
      }
    },
    mounted() {
      this.$axios({
        url: "/user/" + localStorage.getItem("user_id"),
        method: "get",
        headers: {
          Authorization: localStorage.getItem("token")
        }
      }).then(res => {
        //1.数据获取成功,保存到data,如果数据库里没有头像需要判断,男女要区别也要判断.
        console.log(res.data);
        this.profile=res.data.data;
        if(!this.profile.head_img){
          // 如果给data的是没有头像的
          this.profile.head_img='/static/images/hu.png';
        }else{
          //有头像的话就这个的ip地址加上图片
          this.profile.head_img=this.$axios.defaults.baseURL+this.profile.head_img;
        }
      });
    }
  };
</script>

<style lang="less" scoped>
  .profile {
    border-bottom: 5px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 5.556vw;
  }
  .avatar {
    width: 19.444vw;
    height: 19.444vw;
    border-radius: 9.722vw;
  }
  .pro_meddle {
    flex: 1;
    padding-left: 2.778vw;
    font-size: 16px;

    display: flex; //伸缩盒子
    flex-direction: column; //改变主轴方向
    justify-content: space-between; //两端
    height: 12.5vw;
    .tiem {
      font-size: 14px;
      color: #888;
    }
  }
  .iconjiantou1 {
    font-size: 5vw;
  }
</style>