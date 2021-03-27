<template>
    <div class="menu-box">
        <Logo />
        <ul class="list m-t-20">
            <li
                class="item webkit-box flex-center"
                :class="{ on: index === currentIndex }"
                @click="onMenu(item, index)"
                v-for="(item, index) in data"
                :key="index"
            >
                {{ item }}
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
			currentIndex: -1
		};
    },
    created() {},
    mounted() {},
    computed: {},
    methods: {
        onMenu(item, index) {
			this.currentIndex = index
            console.log(item);
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