<template>
    <div class="logo-box webkit-box flex-center">
        <svg-icon iconClass="logo"></svg-icon>
    </div>
</template>

<script>
export default {
    name: "Logo",
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
.logo-box {
    width: 48px;
    height: 48px;
	padding: $space-10;
	box-sizing: border-box;
}
</style>