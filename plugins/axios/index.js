import Vue from 'vue';
import axios from 'axios'
import domain from '@/config/domain'

// axios.defaults.withCredentials = true
const axiosInstance = axios.create({
	baseURL: domain.api[process.env.NODE_ENV],
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

export const get = (api, data) => {
	return new Promise((resolve, reject) => {
		axiosInstance.get(api, {
			params: data
		}).then(res => {
			let { status, data } = res
			if (status >= 200 || status < 300) {
				if (data.code === 0) {
					return resolve(data.data)
				}
			}
			reject(data)
		}).catch(err => {
			reject(err);
		})
	})
}

export const post = (api, data) => {
	return new Promise((resolve, reject) => {
		axiosInstance.post(api, data).then(res => {
			let { status, data } = res
			if (status >= 200 || status < 300) {
				if (data.code === 0) {
					return resolve(data.data)
				}
			}
			reject(data)
		}).catch(err => {
			reject(err);
		})
	})
}