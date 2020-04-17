<template>
  <div class="article">
    <p class="title">文章列表</p>
    <el-button class="addButton" type="primary" @click="addButton()"
      >新增+</el-button
    >
    <el-table :data="articleList" style="width: 100%" border stripe>
      <el-table-column prop="title" label="标题" width="180"> </el-table-column>
      <el-table-column label="时间" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.create_time }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="SkipEvent(scope.row)"
            >查看</el-button
          >
          <el-button type="success" @click="SkipEvent(scope.row)"
            >编辑</el-button
          >
          <el-button type="danger" @click="handelRemove(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleList: [
        {
          id: 1,
          title: "hhhh1",
          create_time: "2020-02-16"
        },
        {
          id: 2,
          title: "nodejs教程",
          create_time: "2020-02-17"
        },
        {
          id: 3,
          title: "express教程",
          create_time: "2020-02-18"
        }
      ]
    };
  },
  methods: {
    SkipEvent(row) {
      window.open("#/detail" + row.id);
    },
    addButton() {
      this.$router.push({ path: "/article/detail" });
    },
    handelRemove(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(row.id);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.article {
  width: 1000px;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
  .title {
    text-align: center;
    margin: 20px 0;
  }
  .addButton {
    float: right;
    margin: 10px 0;
  }
}

/deep/ .el-table .cell {
  text-align: center;
}
</style>
