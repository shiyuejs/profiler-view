<template>
    <div class="login-box" @click="onLogin">login</div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    layout: "Login",
    data() {
        return {};
    },
    components: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        onLogin() {
            this.$message.success("登录成功");
            this.$router.push("/profiler/UGit12345/electron/dashboard");
        },
        submit(formName) {
            this.$refs[formName].validate(async (valid) => {
                if (valid) {
                    this.submitLoading = true;
                    const { tel, password } = this.form;
                    const params = { tel, password };
                    const res = await this.login(params)
                        .then((res) => {
                            if (res.code === 0) {
                                this.$message.success("登录成功");
                            } else {
                                this.$message.error("登录失败");
                            }
                        })
                        .catch((e) => {
                            this.$message.error("登录失败");
                        })
                        .finally(() => {
                            this.submitLoading = false;
                        });
                }
            });
        },
    },
};
</script>

<style lang='scss' scoped>
</style>