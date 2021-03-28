<template>
    <div class="app-list">
        <div class="row webkit-box">
            <Card :title="`应用列表(${menuData.length})`" class="flex1">
                <div slot="right" class="webkit-box flex-right">
                    <Btn @click="onCreateApp" type="success">创建</Btn>
                </div>
                <Row
                    v-for="(item, index) in menuData"
                    :key="index"
                    class="pointer link-bg text-overflow"
                    leftText=""
                    @onRow="onDetail"
                >
                    <div slot="left" class="webkit-box flex-left">
                        <span
                            class="status m-r-10"
                            :class="{
                                [`status-${item.status}`]: true,
                            }"
                        ></span>
                        {{ item.name }}
                    </div>
                </Row>
            </Card>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "AppList",
    layout: "profiler",
    async asyncData(context) {
        // console.log(context);
    },
    data() {
        return {};
    },
    watch: {},
    components: {},
    computed: {
        ...mapState({
            menuData: (state) => state.menuData,
        }),
    },
    mounted() {},
    methods: {
        onDetail() {
            this.$router.push(`/app/detail/1`);
        },
        onCreateApp() {
            this.$router.push(`/app/create`);
        },
    },
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
.app-list {
    .status {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 8px;
		&.status-0 {
			background: $c-light-grey;
		}
		&.status-1 {
			background: $c-green;
		}
    }
}
</style>