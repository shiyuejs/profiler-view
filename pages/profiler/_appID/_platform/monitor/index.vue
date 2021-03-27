<template>
    <div class>username - {{ appID }}-{{ platform }}</div>
</template>

<script>
export default {
    name: "ProfilerMonitor",
    data() {
        return {};
    },
    computed: {
        appID() {
            return this.$route.params.appID;
        },
        platform() {
            return this.$route.params.platform;
        },
    },
    components: {},
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
</style>