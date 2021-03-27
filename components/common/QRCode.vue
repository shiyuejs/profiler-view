<template>
  <div class="qr-code-box webkit-box">
    <el-popover placement="bottom" trigger="click">
      <i class="el-icon-full-screen size-18" slot="reference"></i>
      <canvas class="code-view" id="code"></canvas>
    </el-popover>
  </div>
</template>

<script>
import QRious from "qrious";
export default {
  name: "QRCcode",
  props: {
    url: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.createCode();
  },
  computed: {},
  watch: {
    url() {
      this.createCode();
    }
  },
  methods: {
    createCode() {
      if (!this.url) return;
      new QRious({
        element: document.getElementById("code"),
        value: this.url,
        background: "#fff",
        backgroundAlpha: 1,
        foreground: "#000",
        foregroundAlpha: 1,
        level: "H",
        size: 150
      });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
</style>