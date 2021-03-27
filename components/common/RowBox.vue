<template>
  <div class="row-box">
    <div class="row-title">
      <div class="title" v-if="title">
        <p>{{title}}</p>
        <div class="row-line"></div>
      </div>
      <div class="left-box" v-else>
        <slot name="left"></slot>
      </div>
      <div class="right-box">
        <slot name="right"></slot>
      </div>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'rowBox',
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default() {
        return '';
      }
    }
  },
  components: {},
  created() {},
  mounted() {},
  watch: {},
  computed: {},
  methods: {}
};
</script>

<style lang='scss' scoped>
.row-box {
  padding: 16px 20px 10px;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  .row-title {
    border-bottom: 1px solid #ebeef5;
    margin-bottom: 10px;
    display: flex;
    .row-line {
      width: 4px;
      height: 14px;
      background: #647aff;
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    .title {
      padding-left: 14px;
      position: relative;
      line-height: 22px;
      font-weight: 500;
      color: rgba(48, 49, 51, 1);
      font-family: PingFangSC-Medium, PingFang SC;
      font-size: 16px;
      margin-bottom: 16px;
    }
    .right-box{
      margin-left: auto;
    }
  }
}
</style>