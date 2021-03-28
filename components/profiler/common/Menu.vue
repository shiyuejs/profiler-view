<template>
    <div class="menu-box">
        <Logo />
        <ul class="list m-t-20">
            <li
                class="item webkit-box flex-center"
                :class="{ on: item.key === appID }"
                @click="onMenu(item, index)"
                v-for="(item, index) in data"
                :key="index"
            >
                {{ item.name }}
            </li>
        </ul>

        <div class="item add-app webkit-box flex-center" @click="onAppCreate">
            <span class="el-icon-plus"></span>
        </div>
    </div>
</template>

<script>
import Logo from "./Logo";

export default {
    name: "Menu",
    components: {
        Logo,
    },
    props: {
        data: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {};
    },
    created() {},
    mounted() {},
    computed: {
        appID() {
            return this.$route.params.appID;
        },
    },
    methods: {
        onMenu(item, index) {
            this.$router.push(
                `/profiler/${item.key}/${item.platform}/dashboard`
            );
        },
		onAppCreate() {
			this.$router.push(
                `/app/create`
            );
		}
    },
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
.menu-box {
    width: 48px;
    height: 100%;
    background: $c-bg-drak;
    color: $c-fff;
    .item {
        cursor: pointer;
        height: 44px;
        transition: all 0.5s;
        &.on {
            background: $c-green;
        }
        &:not(.on):hover {
            background: $c-green-drak;
        }
    }

	.add-app {
		margin-top: $space-20;
		font-size: $size-16;
		&:hover {
            background: $c-blue!important;
        }
	}
}
</style>