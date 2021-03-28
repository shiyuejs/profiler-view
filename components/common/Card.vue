<template>
    <div class="card-box">
        <div class="card-head webkit-box">
            <div class="title flex1 webkit-box flex-left">
                <template v-if="title">
                    <span class="rel webkit-box flex-left">
                        {{ title }}
                        <IconButton
                            class="m-l-5"
                            v-if="reload"
                            @click="onReload"
							:loading="reloadLoading"
                            iconName="reload"
                        />
                    </span>
                </template>
                <template v-else>
                    <slot name="left"></slot>
                </template>
            </div>

            <div class="right webkit-box flex-right">
                <slot name="right">
                    <IconButton
                        v-if="iconName"
                        :textTip="iconTextTip"
                        :iconName="iconName"
                    />
                </slot>
            </div>
        </div>

        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    data() {
        return {};
    },
    props: {
        title: {
            type: String,
            default() {
                return "";
            },
        },
        iconTextTip: {
            type: String,
            default: "",
        },
        iconName: {
            type: String,
            default: "",
        },
        reload: {
            type: Boolean,
            default: false,
        },
		reloadLoading: {
			type: Boolean,
            default: false,
		}
    },
    components: {},
    created() {},
    mounted() {},
    watch: {},
    computed: {},
    methods: {
        onReload() {
            this.$emit("reload");
        },
    },
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
.card-box {
    margin-bottom: $space-24;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    background: $c-fff;
    border-radius: $radius-2;

    .card-head {
        min-height: 48px;
        padding: 0 $space-24;
        color: $c-333;
        font-weight: 500;
        font-size: $size-16;
        border-bottom: 1px solid $c-f0;
        border-radius: $radius-2 $radius-2 0 0;
    }
    .card-body {
        padding: $space-24;
    }
}
</style>