<template>
  <div class="articledetail">
    <div class="back">
      <el-button type="primary" @click="back()">返回</el-button>
    </div>
    <p class="title">标题</p>
    <el-input v-model="title" placeholder="请输入标题"></el-input>
    <p class="content_title">文章内容(Markdown编辑器)</p>
    <mavon-editor v-model="content"></mavon-editor>
    <div class="footer">
      <el-button class="save" type="primary">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.articledetail {
  width: 1000px;
  min-height: calc(100vh - 200px);
  margin: 0 auto;
  .back {
    text-align: right;
    padding: 10px 0;
  }
  .title,
  .content_title,
  .save {
    margin: 20px 0;
  }
}
</style>
