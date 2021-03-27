<template>
    <div class="footer-box">
        <div class="text-center project-name">Profiler View App</div>
        <div class="webkit-box flex-center">Front Team</div>
    </div>
</template>

<script>
export default {
    name: "Footer",
    components: {
    },
    props: {},
    data() {
        return {};
    },
    created() {},
    mounted() {},
    computed: {},
    methods: {},
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
.footer-box {
	color: $c-grey;
	padding: $space-20;
	.project-name {
		padding-bottom: $space-5;
	}
}
</style>