import instance from "./instance";

// 用户登录
export const login = params => instance.get("/v1/users/login", { params });
