<template>
  <div class="wrapper webkit-box">
    <Menu />
    <div class="flex1 webkit-box content-warp">
      <Header />
      <div class="pd-15 flex1 active-wrap">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/profiler/common/Header";
import Menu from "@/components/profiler/common/menu";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({})
  },
  components: {
    Header,
    Menu
  },
  created() {},
  mounted() {
    this.init();
    this.getData();
  },
  methods: {
    init() {},

    // 获取字典
    async getData() {
      try {
        let res = await this.$http("/v1/get_data", {}, { tipError: false });
        this.setValue("dictionary", this.mergeFilterField(res), true);
      } catch (err) {}
    },

    /**
     * @description 快捷设置store/state
     * @param {String} key 支持多级用.表示
     * @param {*} value 给属性设置的值
     * @param {Boolean} scoped 是否跟state属性, 默认false
     */
    setValue(key, value, scoped) {
      if (!key) return;
      key = scoped ? key : `reviews.${key}`;
      this.$store.commit("setValue", {
        key: key,
        value: value
      });
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/style/reset.scss";
@import "@/style/common.scss";
@import "@/style/config.scss";
@import "@/style/sidebar.scss";
.review-wrapper {
  background: $c-f0;
  min-width: 1200px;

  .content-warp {
    flex-flow: column;
    overflow-x: hidden;
  }

  .active-wrap {
    overflow-y: auto;
  }
}

.pd-15 {
  padding: 0 15px;
}
</style>
