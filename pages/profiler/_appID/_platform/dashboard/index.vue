<template>
    <div class="dashboard">
        <div class="row webkit-box">
            <Card
                title="内存堆警告"
                iconTextTip="提示文字"
                iconName="help"
                class="flex1 m-r-20"
            >
                <Row class="link-bg" @onRow="onToApp">
                    <div class="flex1 webkit-box flex-left" slot="left">
                        <Avatar class="m-r-5" /> Front Team
                        <el-progress
                            :text-inside="true"
                            :stroke-width="16"
                            :percentage="98"
                            status="exception"
                            class="m-l-10 flex1"
                        ></el-progress>
                    </div>
                </Row>
                <Row class="link-bg" @onRow="onToApp">
                    <div class="flex1 webkit-box flex-left" slot="left">
                        <Avatar class="m-r-5" /> Front Team
                        <el-progress
                            :text-inside="true"
                            :stroke-width="16"
                            :percentage="90"
                            status="warning"
                            class="m-l-10 flex1"
                        ></el-progress>
                    </div>
                </Row>
                <Row class="link-bg" @onRow="onToApp">
                    <div class="flex1 webkit-box flex-left" slot="left">
                        <Avatar class="m-r-5" /> Front Team
                        <el-progress
                            :text-inside="true"
                            :stroke-width="16"
                            :percentage="40"
                            status="success"
                            class="m-l-10 flex1"
                        ></el-progress>
                    </div>
                </Row>
            </Card>
            <Card
                title="内存可能泄露"
                iconTextTip="提示文字"
                iconName="help"
                class="flex1"
            >
                <Row class="link-bg">
                    <div class="flex1 webkit-box flex-left" slot="left">
                        <Avatar class="m-r-5" /> Front Team
                    </div>
                    <div class="flex1 webkit-box flex-left" slot="right">3</div>
                </Row>
            </Card>
        </div>
    </div>
</template>

<script>
import { getApp } from "@/api/index";
export default {
    name: "ProfilerDashboard",
    layout: "profiler",
    async asyncData(context) {
        // console.log(context);
        const res = await getApp({
            user: "11111",
        });
		console.log('asyncData', res)
    },
    data() {
        return {};
    },
    watch: {},
    components: {},
    computed: {
        appID() {
            return this.$route.params.appID;
        },
        platform() {
            return this.$route.params.platform;
        },
    },
    mounted() {},
    methods: {
        onToApp() {
            this.$router.push(
                `/profiler/${this.appID}/${this.platform}/monitor`
            );
        },
    },
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
.dashboard {
}
</style>