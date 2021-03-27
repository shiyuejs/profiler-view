<template>
    <div
        class="avatar-box"
        :style="{
            width: width,
        }"
    >
        <img class="img" :src="iconSrc" @error="onError" />
    </div>
</template>

<script>
export default {
    name: "Avatar",
    data() {
        return {};
    },
    props: {
        iconName: {
            type: String,
            default: "default-avatar-icon",
        },
        width: {
            type: String,
            default: "20px",
        },
		link: {
			type: String,
            default: "",
		}
    },
    components: {},
    created() {},
    mounted() {},
    watch: {},
    computed: {
		iconSrc() {
			if (this.link) {
				return this.link
			}
			return require(`@/assets/img/common/${this.iconName}.png`);
		}
	},
    methods: {
		onError() {
			
		}
	},
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
.avatar-box {
    border-radius: 100%;
    .img {
        width: 100%;
    }
}
</style>