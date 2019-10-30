<template>
  <div>
    <headerEdit label="编辑资料"></headerEdit>
    <div class="avatar">
      <img :src="profile.head_img" alt />
    </div>
    <sonCell label="昵称" :desc="profile.nickname" @inptBtn="setNickName"></sonCell>
    <sonCell label="密码" :desc="profile.password" @inptBtn="setPassWord"></sonCell>
    <sonCell label="性别" :desc="profile.gender" @inptBtn="setGender"></sonCell>
  </div>
</template>

<script>
  import headerEdit from "../components/headerEdit.vue";
  import sonCell from "../components/soncell.vue";
  export default {
    components: {
      headerEdit: headerEdit,
      sonCell: sonCell
    },
    data() {
      return {
        profile: {}
      };
    },
    methods: {
      setNickName() {
        //设置昵称
        alert("加油");
      },
      setPassWord() {
        alert("加油");
      },
      setGender() {
        alert("加油");
      }
    },
    mounted() {
      this.$axios({
        url: "/user/" + localStorage.getItem("user_id"),
        method: "get"
      }).then(res => {
        //请求用户详情成功时
        // 是一个对象有gender,head_img,id,用户名,密码,账号,post_star,post_comments
        this.profile = res.data.data;
        console.log(res.data.data);
        if (!this.profile.head_img) {
          this.profile.head_img = "/static/images/hu.png";
        } else {
          this.profile.head_img = this.$axios.defaults.baseURL + this.profile.head_img;
        }
        this.profile.gender=this.profile.gender == 1? '小哥哥':'小姐姐';
      });
    }
  };
</script>

<style lang="less" scoped>
  .avatar {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    img {
      margin: 13.889vw 0;
      width: 19.444vw;
      height: 19.444vw;
      border-radius: 50%;
    }
  }
</style>