<template>
    <div class="monitor-box">
        <div class="row webkit-box m-b-20 ratio-row">
            <div class="ratio-box flex-column m-r-20">
                <div class="title webkit-box flex-center m-b-10">
                    内存堆占用比
                </div>
                <el-progress
                    class="value"
                    type="dashboard"
                    :width="50"
                    :percentage="93"
					color="#ff4d4f"
                ></el-progress>
            </div>
            <div class="ratio-box flex-column m-r-20">
                <div class="title webkit-box flex-center m-b-10">日环比</div>
                <el-progress
                    class="value"
                    type="dashboard"
                    :width="50"
                    :percentage="75"
					color="#e6a23c"
                ></el-progress>
            </div>
            <div class="ratio-box flex-column m-r-20">
                <div class="title webkit-box flex-center m-b-10">周环比</div>
                <el-progress
                    class="value"
                    type="dashboard"
                    :width="50"
                    :percentage="45"
                ></el-progress>
            </div>
			<div class="ratio-box flex-column m-r-20">
                <div class="title webkit-box flex-center m-b-10">月环比</div>
                <el-progress
                    class="value"
                    type="dashboard"
                    :width="50"
                    :percentage="25"
					color="#52c41a"
                ></el-progress>
            </div>
        </div>

        <div class="row webkit-box">
            <Card title="实时内存" class="m-r-20 flex1">
                <div slot="right" class="webkit-box flex-right">
					<Btn class="m-r-10">按小时</Btn>
					<Btn class="m-r-10" type="success">按分钟</Btn>
                    <IconButton textTip="提示文字" iconName="help" />
                </div>
                <div id="container"></div>
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
                <Row
                    class="pointer text-overflow"
                    leftText="20.01.01-22:22:22-9527.heapSnapshot"
                />
                <Row
                    class="pointer text-overflow"
                    leftText="20.01.01-22:22:22-9527.heapSnapshot"
                />
                <Row
                    class="pointer text-overflow"
                    leftText="20.01.01-22:22:22-9527.heapSnapshot"
                />
                <Row
                    class="pointer text-overflow"
                    leftText="20.01.01-22:22:22-9527.heapSnapshot"
                />
                <Row
                    class="pointer text-overflow"
                    leftText="20.01.01-22:22:22-9527.heapSnapshot"
                />
                <Row
                    class="pointer text-overflow"
                    leftText="20.01.01-22:22:22-9527.heapSnapshot"
                />
                <Row
                    class="pointer text-overflow"
                    leftText="20.01.01-22:22:22-9527.heapSnapshot"
                />
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
            </Card>
        </div>
    </div>
</template>

<script>
import { Area } from "@antv/g2plot";

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
    mounted() {
        const data = [
            {
                Date: "2010-01",
                scales: 1998,
            },
            {
                Date: "2010-02",
                scales: 1850,
            },
            {
                Date: "2010-03",
                scales: 1720,
            },
            {
                Date: "2010-04",
                scales: 1818,
            },
            {
                Date: "2010-05",
                scales: 1920,
            },
            {
                Date: "2010-06",
                scales: 1802,
            },
            {
                Date: "2010-07",
                scales: 1945,
            },
            {
                Date: "2010-08",
                scales: 1856,
            },
            {
                Date: "2010-09",
                scales: 2107,
            },
            {
                Date: "2010-10",
                scales: 2140,
            },
            {
                Date: "2010-11",
                scales: 2311,
            },
            {
                Date: "2010-12",
                scales: 1972,
            },
            {
                Date: "2011-01",
                scales: 1760,
            },
            {
                Date: "2011-02",
                scales: 1824,
            },
            {
                Date: "2011-03",
                scales: 1801,
            },
            {
                Date: "2011-04",
                scales: 2001,
            },
            {
                Date: "2011-05",
                scales: 1640,
            },
            {
                Date: "2011-06",
                scales: 1502,
            },
            {
                Date: "2011-07",
                scales: 1621,
            },
            {
                Date: "2011-08",
                scales: 1480,
            },
            {
                Date: "2011-09",
                scales: 1549,
            },
            {
                Date: "2011-10",
                scales: 1390,
            },
            {
                Date: "2011-11",
                scales: 1325,
            },
            {
                Date: "2011-12",
                scales: 1250,
            },
            {
                Date: "2012-01",
                scales: 1394,
            },
            {
                Date: "2012-02",
                scales: 1406,
            },
            {
                Date: "2012-03",
                scales: 1578,
            },
            {
                Date: "2012-04",
                scales: 1465,
            },
            {
                Date: "2012-05",
                scales: 1689,
            },
            {
                Date: "2012-06",
                scales: 1755,
            },
            {
                Date: "2012-07",
                scales: 1495,
            },
            {
                Date: "2012-08",
                scales: 1508,
            },
            {
                Date: "2012-09",
                scales: 1433,
            },
            {
                Date: "2012-10",
                scales: 1344,
            },
            {
                Date: "2012-11",
                scales: 1201,
            },
            {
                Date: "2012-12",
                scales: 1065,
            },
            {
                Date: "2013-01",
                scales: 1255,
            },
            {
                Date: "2013-02",
                scales: 1429,
            },
            {
                Date: "2013-03",
                scales: 1398,
            },
            {
                Date: "2013-04",
                scales: 1678,
            },
            {
                Date: "2013-05",
                scales: 1524,
            },
            {
                Date: "2013-06",
                scales: 1688,
            },
            {
                Date: "2013-07",
                scales: 1500,
            },
            {
                Date: "2013-08",
                scales: 1670,
            },
            {
                Date: "2013-09",
                scales: 1734,
            },
            {
                Date: "2013-10",
                scales: 1699,
            },
            {
                Date: "2013-11",
                scales: 1508,
            },
            {
                Date: "2013-12",
                scales: 1680,
            },
            {
                Date: "2014-01",
                scales: 1750,
            },
            {
                Date: "2014-02",
                scales: 1602,
            },
            {
                Date: "2014-03",
                scales: 1834,
            },
            {
                Date: "2014-04",
                scales: 1722,
            },
            {
                Date: "2014-05",
                scales: 1430,
            },
            {
                Date: "2014-06",
                scales: 1280,
            },
            {
                Date: "2014-07",
                scales: 1367,
            },
            {
                Date: "2014-08",
                scales: 1155,
            },
            {
                Date: "2014-09",
                scales: 1289,
            },
            {
                Date: "2014-10",
                scales: 1104,
            },
            {
                Date: "2014-11",
                scales: 1246,
            },
            {
                Date: "2014-12",
                scales: 1098,
            },
            {
                Date: "2015-01",
                scales: 1189,
            },
            {
                Date: "2015-02",
                scales: 1276,
            },
            {
                Date: "2015-03",
                scales: 1033,
            },
            {
                Date: "2015-04",
                scales: 956,
            },
            {
                Date: "2015-05",
                scales: 845,
            },
            {
                Date: "2015-06",
                scales: 1089,
            },
            {
                Date: "2015-07",
                scales: 944,
            },
            {
                Date: "2015-08",
                scales: 1043,
            },
            {
                Date: "2015-09",
                scales: 893,
            },
            {
                Date: "2015-10",
                scales: 840,
            },
            {
                Date: "2015-11",
                scales: 934,
            },
            {
                Date: "2015-12",
                scales: 810,
            },
            {
                Date: "2016-01",
                scales: 782,
            },
            {
                Date: "2016-02",
                scales: 1089,
            },
            {
                Date: "2016-03",
                scales: 745,
            },
            {
                Date: "2016-04",
                scales: 680,
            },
            {
                Date: "2016-05",
                scales: 802,
            },
            {
                Date: "2016-06",
                scales: 697,
            },
            {
                Date: "2016-07",
                scales: 583,
            },
            {
                Date: "2016-08",
                scales: 456,
            },
            {
                Date: "2016-09",
                scales: 524,
            },
            {
                Date: "2016-10",
                scales: 398,
            },
            {
                Date: "2016-11",
                scales: 278,
            },
            {
                Date: "2016-12",
                scales: 195,
            },
            {
                Date: "2017-01",
                scales: 145,
            },
            {
                Date: "2017-02",
                scales: 207,
            },
        ];
        const area = new Area("container", {
            data,
            xField: "Date",
            yField: "scales",
            height: 260,
            annotations: [
                {
                    type: "text",
                    position: ["min", "median"],
                    content: "中位数",
                    offsetY: -4,
                    style: {
                        textBaseline: "bottom",
                    },
                },
                {
                    type: "line",
                    start: ["min", "median"],
                    end: ["max", "median"],
                    style: {
                        stroke: "red",
                        lineDash: [2, 2],
                    },
                },
            ],
        });
        area.render();
    },
    methods: {
        async onReloadSnapshotRanking() {
            this.snapshotRankingLoading = true;
            console.log("onReloadSnapshotRanking");
            await this.$utils.sleep(2000);
            this.snapshotRankingLoading = false;
        }
    },
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
.monitor-box {
    .heap-snapshot-ranking {
        width: 260px;
    }

    .ratio-row {
        padding: 0 $space-24;
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
            border-radius: 100%;
        }
    }
}
</style>