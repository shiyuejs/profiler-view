<template>
  <div class="copy-box webkit-box" v-clipboard:copy="url" v-clipboard:success="onCopy" v-clipboard:error="onError">
    <el-button type="text" v-if="title" class="btn">{{title}}</el-button>
    <i class="el-icon-copy-document size-18" v-else></i>
  </div>


</template>

<script>
export default {
  name: "Copy",
  props: {
    url: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    onCopy() {
      this.$message.success("页面URL已复制到剪切板");
    },
    onError() {
      
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
.btn{
  padding: 0;
}
</style>