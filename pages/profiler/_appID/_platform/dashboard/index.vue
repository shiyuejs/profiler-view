<template>
    <div class="dashboard">
        应用的dashboard

        <div @click="onToApp">UGit应用</div>
    </div>
</template>

<script>
export default {
    name: "ProfilerDashboard",
    data() {
        return {};
    },
    watch: {},
    components: {},
    mounted() {},
    methods: {
        onToApp() {
			this.$router.push("/profiler/UGit12345/electron/monitor");
		},
    },
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
</style>