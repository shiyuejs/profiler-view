<template>
  <div class="not-found">
    <div class="not-found-tips">~~sorry，你的页面走丢了</div>
    <button class="not-found-btn" @click="goBack">返回一页</button>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "customError",
  data() {
    return {

    }
  },
  created() {
    
  },
  mounted() {

  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.not-found {
  width: 200px;
  /* padding: 30% 20px 0; */
}
.not-found-tips {
  color: #666;
  font-size: 16px;
  text-align: center;
}
.not-found-btn {
  display: block;
  width: 100%;
  height: 44px;
  background-color: #ffda05;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 22px;
}
</style>