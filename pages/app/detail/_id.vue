<template>
    <div class="app-detail">App 详情 - {{ id }}</div>
</template>

<script>
export default {
    name: "AppDetail",
    layout: "profiler",
    async asyncData(context) {
        // console.log(context);
    },
    data() {
        return {};
    },
    watch: {},
    components: {},
    computed: {
        id() {
            return this.$route.params.id;
        },
    },
    mounted() {},
    methods: {},
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
</style>