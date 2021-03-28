<template>
    <div class="row-box webkit-box" @click="onRow">
        <div class="left-text webkit-box flex-left flex1">
            <slot name="left">{{ leftText }}</slot>
        </div>
        <div class="right-text webkit-box flex-right">
            <slot name="right">{{ rightText }}</slot>
        </div>
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
    methods: {
		onRow() {
			this.$emit('onRow')
		}
	},
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
.row-box {
    padding: $space-10 0;
    .left-text {
        color: $c-333;
    }
    .right-text {
        color: $c-grey;
    }
}
</style>