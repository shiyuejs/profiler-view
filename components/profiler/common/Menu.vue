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
        return {
		};
    },
    created() {},
    mounted() {},
    computed: {
        appID() {
            return this.$route.params.appID;
        }
    },
    methods: {
        onMenu(item, index) {
			this.$router.push(`/profiler/${item.key}/${item.platform}/dashboard`);
        },
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
		transition: all .5s;
        &.on {
            background: #52c41a;
        }
        &:not(.on):hover {
            background: #41a70e;
        }
    }
}
</style>