<template>
    <div class="rel icon-button" @click="onClick">
        <slot>
            <div
                class="sup-number"
                v-if="
                    typeof supNumber === 'number' &&
                    supNumber !== null &&
                    supNumber > -1
                "
            >
                {{ supNumber }}
            </div>
            <el-tooltip
                v-if="showTip"
                class="item"
                effect="dark"
                :content="textTip"
                placement="bottom"
                :disabled="!textTip"
            >
                <div class="icon">
                    <svg-icon
                        :class="{
                            loading: loading,
                        }"
                        :iconClass="iconName"
                    ></svg-icon>
                </div>
            </el-tooltip>
            <template v-else>
                <div class="icon">
                    <svg-icon
                        :class="{
                            loading: loading,
                        }"
                        :iconClass="iconName"
                    ></svg-icon>
                </div>
            </template>
        </slot>
    </div>
</template>

<script>
export default {
    name: "IconButton",
    data() {
        return {};
    },
    props: {
        iconName: {
            type: String,
            default() {
                return "";
            },
        },
        textTip: {
            type: String,
            default: "",
        },
        showTip: {
            type: Boolean,
            default: true,
        },
        supNumber: {
            type: Number,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    components: {},
    created() {},
    mounted() {},
    watch: {},
    computed: {},
    methods: {
        onClick() {
            this.$emit("click");
        },
    },
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
.icon-button {
    width: auto;
    padding: 0 $space-10;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .sup-number {
        position: absolute;
        top: 0;
        right: 0;
        min-width: $space-10;
        height: $space-20;
        padding: 0 $space-5;
        color: $c-fff;
        font-weight: 400;
        font-size: $size-12;
        line-height: $space-20;
        white-space: nowrap;
        text-align: center;
        background: $c-red;
        border-radius: $radius-10;
    }

    .icon {
        cursor: pointer;
        width: 16px;
        color: $c-grey;
        height: 16px;
        :hover {
            color: $c-333;
        }
    }
}
</style>