<template>
    <div
        class="btn-box"
        @click="onBtn"
        :class="{
            [`type-${type}`]: true,
            [`size-${size}`]: true,
        }"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Btn",
    data() {
        return {};
    },
    props: {
        size: {
            type: String,
            default: "small",
        },
        type: {
            type: String,
            default: "text",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        selected: {
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
        onBtn() {
            if (this.disabled) {
                return;
            }
            this.$emit("click");
        },
    },
};
</script>

<style lang='scss' scoped>
@import "@/style/config.scss";
.btn-box {
    cursor: pointer;
    transition: all 0.5s;

    &.size-small {
        font-size: $size-12;
    }

    &.type-text {
        color: $c-grey;
        &:hover {
            color: $c-333;
        }
    }

    &.type-success {
        background: $c-green;
        color: $c-fff;
        padding: 3px $space-10;
        border-radius: $space-20;
        &:hover {
            background: $c-green-drak;
        }
    }
}
</style>