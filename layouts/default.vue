<template>
  <div class="main">
    <nuxt />
  </div>
</template>

<script>
export default {
  middleware: "auth",
  data() {
    return {};
  },
  created() {},
  components: {}
};
</script>

<style scoped>
</style>