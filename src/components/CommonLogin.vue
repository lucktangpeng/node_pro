<template>
  <div class="login">
    <el-form
      class="login_box"
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="70px"
    >
      <el-form-item class="item" label="用户名" prop="username">
        <el-input
          v-model="ruleForm.username"
          placeholder="请输入用户名"
        ></el-input>
      </el-form-item>
      <el-form-item class="item" label="密码" prop="password">
        <el-input
          v-model="ruleForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item class="item" label="昵称" prop="nikname">
        <el-input
          v-model="ruleForm.nikname"
          placeholder="请输入昵称"
        ></el-input>
      </el-form-item>
      <div class="buttonBox" v-if="!status">
        <el-button class="Button" type="primary" @click="LoginEvent()"
          >登陆</el-button
        >
        <el-button class="Button" type="primary">注册</el-button>
      </div>
      <div class="buttonBox" v-else>
        <el-button class="Button" type="primary" @click="RegisterEvent()"
          >注册</el-button
        >
        <el-button class="Button" type="primary"
          ><router-link to="/login">取消</router-link></el-button
        >
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
        nikname: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        nikname: [{ required: true, message: "请输入昵称", trigger: "blur" }]
      }
    };
  },
  methods: {
    LoginEvent() {
      console.log(this.ruleForm);
    },
    RegisterEvent() {
      console.log(this.ruleForm);
    }
  }
};
</script>

<style lang="scss" scoped>
.login {
  .login_box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 300px;
    width: 400px;
    margin: 0 auto;
    margin-top: 200px;
    .buttonBox {
      text-align: center;
      .Button {
        width: 80px;
      }
    }
  }
}
</style>
