<template></template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    let { query } = this.$route;
    let routeName = query.routeName;

    if (!routeName) return;
    if (window.location.pathname === routeName) {
      return console.warn("跳转地址不能和当前地址相同");
    }

    delete query.routeName;
    this.$router.replace({
      name: routeName,
      query: query
    });
  }
};
</script>

<style scoped>
</style>