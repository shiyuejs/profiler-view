<template>
    <div class="wrapper webkit-box">
        <Menu :data="menuData" />
        <div class="flex1 content-warp flex-column">
            <Header />
            <div class="flex1 active-wrap">
                <nuxt />
                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/profiler/common/Header";
import Menu from "@/components/profiler/common/Menu";
import Footer from "@/components/profiler/common/Footer";

import { getApp } from "@/api/index";

export default {
    data() {
        return {};
    },
    computed: {
        ...mapState({
            menuData: (state) => state.menuData,
        }),
    },
    components: {
        Header,
        Menu,
        Footer,
    },
    created() {},
    mounted() {
        this.init();
        this.getApp();
    },
    methods: {
        init() {},

        // 获取字典
        async getApp() {
            try {
                const res = await getApp({
					user: '1'
				});
                console.log('getApp', res);
                // this.setValue("dictionary", this.mergeFilterField(res), true);
            } catch (err) {
				console.error('getApp xxxx', err)
			}
        },

        /**
         * @description 快捷设置store/state
         * @param {String} key 支持多级用.表示
         * @param {*} value 给属性设置的值
         * @param {Boolean} scoped 是否跟state属性, 默认false
         */
        setValue(key, value, scoped) {
            if (!key) return;
            key = scoped ? key : `reviews.${key}`;
            this.$store.commit("setValue", {
                key: key,
                value: value,
            });
        },
    },
};
</script>

<style lang='scss' scoped>
@import "@/style/reset.scss";
@import "@/style/common.scss";
@import "@/style/config.scss";
.wrapper {
    width: 100%;
    min-height: 100%;
    background: $c-bg;

    .active-wrap {
        overflow-y: auto;
        padding: $space-24;
    }
}
</style>
