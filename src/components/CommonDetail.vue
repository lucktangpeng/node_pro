<template>
  <div class="centerstyle detail">
    <div class="detailTop">
      <p class="detailTitle">nodejs教程</p>
      <p class="detailDate">2020-19-13</p>
    </div>
    <div class="mavonContent">
      <mavon-editor
        v-model="content"
        defaultOpen="prevoew"
        :toolbarsFlag="false"
        :subfield="false"
      ></mavon-editor>
    </div>
    <common-ment></common-ment>
  </div>
</template>

<script>
import CommonMent from "@/components/CommonMent.vue";
export default {
  data() {
    return {
      content: "123123123"
    };
  },
  components: {
    CommonMent
  }
};
</script>

<style lang="scss" scoped>
.detail {
  padding: 30px 20px;
  .detailTop {
    padding-bottom: 20px;
    .detailTitle {
      font-size: 30px;
      text-align: center;
    }
    .detailDate {
      font-size: 14px;
      padding-top: 20px;
      text-align: center;
    }
  }
}
</style>
