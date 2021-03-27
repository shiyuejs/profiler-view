<template>
    <div class="row-box webkit-box">
        <div class="left-text flex1">{{ leftText }}</div>
        <div class="right-text">{{ rightText }}</div>
    </div>
</template>

<script>
export default {
    name: "Row",
    data() {
        return {};
    },
    props: {
        leftText: {
            type: String,
            default: "",
        },
        rightText: {
            type: String,
            default: "",
        },
    },
    components: {},
    created() {},
    mounted() {},
    watch: {},
    computed: {},
    methods: {},
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
.row-box {
	padding: $space-5 0;
	.left-text {
		color: $c-333;
	}
	.right-text {
		color: $c-grey;
	}
}
</style>