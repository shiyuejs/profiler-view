import axios from "axios";
import Vue from "vue";
import domain from "@/config/domain";
import Cookies from "js-cookie";

const isDev = process.env.NODE_ENV === "development";
const baseURL = isDev ? domain.api.development : domain.api.production;

const http = axios.create({
  baseURL,
  timeout: 10000
});

// 请求处理拦截
http.interceptors.request.use(request => {
  const login_token = Cookies.get("login_token");
  if (login_token) {
    Object.assign(request.headers, { "Authentication-Token": login_token });
  }
  // post -> data get -> params 合并公共参数
  if (request.data || request.method === "post") {
    request.data = Object.assign(request.data || {}, { login_token });
  } else if (request.params) {
    request.params = Object.assign(request.params || {}, { login_token });
  }
  return request;
});

// 响应处理拦截
http.interceptors.response.use(response => {
  const res = response.data || {};

  // 未登录或登录超时
  if (res.code === "登录失败标记") {
    Message.error(res.msg || "登录已失效，请重新登录");

    // 去登录页
  }
  return res;
});

const fetch = (url = "", sign = "", params = {}) => {
  return http
    .post(url, params, {
      headers: {
        "content-type": "application/json",
        Authorization: sign
      }
    })
    .then(data => {
      return data;
    });
};

Vue.prototype.$fetch = fetch;
