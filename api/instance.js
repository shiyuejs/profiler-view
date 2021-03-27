import Request from "./hsbRequest";
import domain from "@/config/domain";
import { Message } from "element-ui";
import Cookies from "js-cookie";

const isDev = process.env.NODE_ENV === "development";
const baseURL = isDev ? domain.api.development : domain.api.production;

const request = new Request({
  timeout: 10000,
  baseURL,
  report: {
    myId: "",
    herId: ""
  },
  onRequestError(err) {
    console.log(err);
  },
  onResponseError(err) {
    console.log(err);
  }
});

// 请求处理拦截
request.addRequestHandler(request => {
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
request.addResponseHandler(response => {
  const res = response.data || {};

  // 未登录或登录超时
  if (res.code === "登录失败标记") {
    Message.error(res.msg || "登录已失效，请重新登录");

    // 去登录页
  }
  return res;
});
const instance = request.instance;

export default instance;
