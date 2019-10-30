<template>
  <div>
    <headerEdit label="编辑资料"></headerEdit>
    <div class="avatar">
      <img :src="profile.head_img" alt />
      <!-- after-read 在选择完图片之后会被触发 -->
      <van-uploader class="fileUploader" :after-read="afterRead" />
    </div>
    <sonCell label="昵称" :desc="profile.nickname" @inptBtn="NickisShow = true"></sonCell>
    <sonCell label="密码" :desc="profile.password" @inptBtn="PwdisShow = true"></sonCell>
    <sonCell label="性别" :desc="profile.gender" @inptBtn="isShowGender=true"></sonCell>
    <!-- 使用插件 -->
    <van-dialog
      v-model="NickisShow"
      title="修改昵称"
      show-cancel-button
      @confirm="editProfile({nickname:newNickName})"
    >
      <!-- confirm:点击确认把输入的数据带走 -->
      <van-field v-model="newNickName" placeholder="请输入昵称" />
    </van-dialog>

    <van-dialog
      v-model="PwdisShow"
      title="修改密码"
      show-cancel-button
      @confirm="editProfile({password:newPwdword})"
    >
      <!-- confirm:点击确认把输入的数据带走 -->
      <van-field v-model="newPwdword" placeholder="请输入密码" />
    </van-dialog>

    <van-action-sheet
      v-model="isShowGender"
      :actions="genderList"
      @select="selectGender"
      cancel-text="取消"
    />
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
        NickisShow: false, //设置显示与否
        PwdisShow: false,
        isShowGender: false,
        newNickName: "",
        newPwdword: "",
        genderList: [{ name: "男" }, { name: "女" }],
        profile: {}
      };
    },
    methods: {
      loadPage() {
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
            this.profile.head_img =
              this.$axios.defaults.baseURL + this.profile.head_img;
          }
          this.profile.gender = this.profile.gender == 0 ? "小姐姐" : "小哥哥";
        });
      },
      //修改头像
      afterRead(fileItem) {//当前拿过来的图片
      // 此时可以自行将文件上传至服务器
      const data=new FormData();
      // 将刚拿到的图片放入二进制对象的file字段里面
      data.append('file',fileItem.file);
      // 请求上传图片的接口
      this.$axios({
        url:'/upload',
        method:'post',
        data:data,
      }).then(res=>{
        //上传成功后，调用编辑用户信息请求，成功后，把成功数据给head_img
         this.editProfile({
           head_img:res.data.data.url
         })
      })
    },

      //点击确认时把输入框的值给 数据库名称,请求ajax把user_id和数据带给编辑用户,成功后刷新页面
      editProfile(newData) {
        //1.请求编辑用户信息,把当前登录的本地id,还要把数据给它,进行修改,
        //修改成功刷新一次用户详情信息
        this.$axios({
          url: "/user_update/" + localStorage.getItem("user_id"),
          method: "post",
          data: newData
        }).then(res => {
          this.loadPage();
        });
      },

      selectGender(item) {
        //点击性别后,带了数据过来
        console.log('下载'+item.name);
        //调用请求编辑用户信息，如果item.name下载的是男，就给它1，赋值给当前数据里的gender
        this.editProfile({
          gender: item.name == "男" ? 1 : 0
        })
        this.isShowGender = false;
        //  this.$toast('取消')
      }
    },
    mounted() {
      this.loadPage();
    }
  };
</script>

<style lang="less" scoped>
  .avatar {
    position: relative;
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
  .fileUploader{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;//内容居中
    align-items: center;//侧轴居中
    opacity: 0;
  }
</style>