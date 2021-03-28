<template>
    <div class="header-layout-box webkit-box flex-right">
        <div class="flex1"></div>
        <div class="right webkit-box flex-center">
            <IconButton
                textTip="帮助"
                iconName="help"
                class="link-bg"
                @click="onToHelp"
            />
            <IconButton
                :showTip="false"
                iconName="notice"
                class="link-bg notice"
                @click="onToHelp"
                :supNumber="10"
            >
            </IconButton>
            <IconButton class="link-bg" @click="onToHelp">
                <Avatar class="m-r-5"/> Front Team
            </IconButton>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {};
    },
    created() {},
    mounted() {},
    computed: {},
    methods: {
        onToHelp() {
            console.log("onToHelp");
        },
    },
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
.header-layout-box {
    height: 48px;
    width: 100%;
    background: $c-fff;
    padding: 0 $space-24;
    box-sizing: border-box;
	box-shadow: 1px 3px 3px #eee;
	position: relative;
	z-index: 9;
    .right {
        height: 100%;
		.notice {
			width: 30px;
		}
    }
}
</style>