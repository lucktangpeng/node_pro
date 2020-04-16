<template>
  <div class="main">
    <common-header></common-header>
    <router-view></router-view>
    <common-footer></common-footer>
  </div>
</template>

<script>
import CommonHeader from "@/components/CommonHeader.vue";
import CommonFooter from "@/components/CommonFooter.vue";
export default {
  components: {
    CommonHeader,
    CommonFooter
  }
};
</script>

<style lang="scss" scoped></style>
