<template>
    <div class="monitor-box">
        <div class="row webkit-box m-b-20">
            <div class="ratio-box flex-column m-r-20">
                <div class="title webkit-box flex-center m-b-10">
                    内存堆占用比
                </div>
                <div class="value webkit-box flex-center">80%</div>
            </div>
			<div class="ratio-box flex-column m-r-20">
                <div class="title webkit-box flex-center m-b-10">
                    日环比
                </div>
                <div class="value webkit-box flex-center">80%</div>
            </div>
			<div class="ratio-box flex-column m-r-20">
                <div class="title webkit-box flex-center m-b-10">
                    周环比
                </div>
                <div class="value webkit-box flex-center">80%</div>
            </div>
        </div>

        <div class="row webkit-box">
            <Card
                title="实时内存"
                iconTextTip="提示文字"
                iconName="help"
                class="m-r-20 flex1"
            >
                图表
            </Card>
            <Card
                title="快照采集"
                iconTextTip="提示文字"
                iconName="help"
                class="heap-snapshot-ranking"
                :reload="true"
                :reloadLoading="snapshotRankingLoading"
                @reload="onReloadSnapshotRanking"
            >
                <Row leftText="20.01.01-22:22:22-9527.heapSnapshot" />
                <Row leftText="20.01.01-22:22:22-9527.heapSnapshot" />
                <Row leftText="20.01.01-22:22:22-9527.heapSnapshot" />
            </Card>
        </div>

        <div class="row heap-info-space webkit-box">
            <Card iconTextTip="提示文字" iconName="help" class="flex1">
                堆空间占用
            </Card>
        </div>

        <div class="row webkit-box">
            <Card
                title="内存情况"
                iconTextTip="提示文字"
                iconName="help"
                class="flex1"
            >
                图表
            </Card>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfilerMonitor",
    layout: "profiler",
    data() {
        return {
            snapshotRankingLoading: false,
        };
    },
    computed: {
        appID() {
            return this.$route.params.appID;
        },
        platform() {
            return this.$route.params.platform;
        },
    },
    components: {},
    methods: {
        async onReloadSnapshotRanking() {
            this.snapshotRankingLoading = true;
            console.log("onReloadSnapshotRanking");
            await this.$utils.sleep(2000);
            this.snapshotRankingLoading = false;
        },
    },
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
.monitor-box {
    .heap-snapshot-ranking {
        min-width: 260px;
    }

    /deep/.icon-button {
        padding: 0;
    }

    /deep/.heap-info-space {
        .card-box {
            background: none;
            .card-heap {
                border-bottom: none;
            }
            .card-body {
                padding: 0;
                height: 60px;
                background: #ccc;
            }
        }
    }

    .ratio-box {
		align-items: center;
        .title {
            font-size: $size-14;
        }
        .value {
            font-size: $size-14;
            height: 50px;
            width: 50px;
            background: #ccc;
            border-radius: 100%;
        }
    }
}
</style>