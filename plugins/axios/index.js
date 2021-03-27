import Vue from 'vue';
import axios from 'axios'
import domain from '@/config/domain'

axios.defaults.withCredentials = true
const axiosInstance = axios.create({
  baseURL: domain.api[process.env.NODE_ENV],
  method: 'post',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  timeout: 30000
})

axiosInstance.interceptors.request.use(config => {
  config['requestTime'] = Date.now();
  return config;
}, err => {
  return Promise.reject(err);
})

axiosInstance.interceptors.response.use(ctx => {
  let { config } = ctx
  return ctx
})

/**
 * @method apiRequest
 * @description xhr请求方法封装
 * @param {String} api 接口完整地址
 * @param {Object} params 请求体参数
 * @param {Object} opt 配置选项
 * @param {Boolean} opt.tipError 是否直接提示错误信息
 */
const apiRequest = (api, params = {}, opt = {}) => {
  return new Promise((resolve, reject) => {
    let { tipError = true } = opt

    axiosInstance.post(api, params).then(res => {
      let { status, data } = res
      data.message = data.msg || data.message || "" // 做兼容

      if (status >= 200 || status < 300) {
        if (data.code === 0) {
          return resolve(data.data)
        }
      }

      // 默认提示后端返回的错误信息, 配置tipError可以去除
      // 不可在服务端调用此方法
      if (data.message && tipError && !process.server) {
        Vue.prototype.$message.error(data.message);
      }

      reject(data)
    }).catch(err => {
      reject(err);
    })
  })
};

export default apiRequest
