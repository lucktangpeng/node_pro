<template>
  <div class="ment_box">
    <div class="login" v-if="!Status">登陆</div>
    <div class="ment">
      <div class="info">
        <img src="" alt="" width="50" height="50" />
        <span class="username">fdsafsdaf</span>
      </div>
      <div class="content">
        <textarea name="mentContent" id="con"></textarea>
      </div>
    </div>
    <div class="submit">
      <button class="submitButton">发布</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Status: true
    };
  }
};
</script>

<style lang="scss" scoped>
.ment_box {
  padding: 60px 40px;
  margin-top: 20px;
  background: #7d7d7d;
  .login {
    text-align: center;
    color: #409eff;
    cursor: pointer;
  }
  .ment {
    display: flex;
    .info {
      margin-right: 20px;
      img {
        display: inline-block;
        border-radius: 50%;
        border: 1px solid black;
      }
      .username {
        display: block;
      }
    }
    .content {
      flex: 1;
      textarea {
        width: 100%;
        height: 100%;
      }
      .date {
        font-size: 14px;
        float: right;
      }
    }
  }
  .submit {
    overflow: hidden;
    .submitButton {
      margin-top: 20px;
      padding: 10px 20px;
      float: right;
    }
  }
}
</style>
