<template>
    <div class="">
        启动页
        <div @click="onToDashboard">dashboard</div>
    </div>
</template>

<script>
export default {
	name: 'StartUp',
    data() {
        return {};
    },
    components: {},
    mounted() {},
    methods: {
        onToDashboard() {
            this.$router.push("/profiler/UGit12345/electron/dashboard");
        },
    },
};
</script>

<style scoped>
</style>