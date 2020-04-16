<template>
  <div class="header">
    <el-row class="headerStyle">
      <el-col :span="4" class="title">我的博客</el-col>
      <el-col :span="20">
        <el-menu
          class="menu"
          mode="horizontal"
          :default-active="acticeIndex"
          background-color="#2d2d2d"
          text-color="#fff"
          active-text-color="#e7e421"
          @select="SelectEvent()"
        >
          <el-menu-item index="1"
            ><router-link to="/">首页</router-link></el-menu-item
          >
          <el-menu-item index="2" v-if="IsSign"
            ><router-link to="/article">我的博客</router-link></el-menu-item
          >
          <el-menu-item index="3" class="login" v-if="!IsSign"
            >登陆</el-menu-item
          >
          <el-menu-item index="3" class="login" v-else @click="SkipPersonal()"
            ><router-link to="/personal">唐总</router-link></el-menu-item
          >
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {
    SelectEvent(index) {
      this.activeIndex = index + "";
    },
    SkipPersonal() {
      this;
    }
  },
  computed: {
    IsSign() {
      return this.$store.state.IsSign;
    }
  }
};
</script>
<style lang="scss" scoped>
// #409EFF
.header {
  background: #2d2d2d;
  .headerStyle {
    max-width: 1200px;
    margin: 0 auto;
    background: #2d2d2d;
    ul {
      border: none;
    }
    .title {
      color: #9d9d9d;
      text-align: center;
      line-height: 60px;
    }
    .menu {
      float: right;
      .login {
        background-color: #409eff !important;
      }
    }
  }
}
</style>
