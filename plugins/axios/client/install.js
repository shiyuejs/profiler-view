import Vue from "vue";
import axios from "../index";

const install = function (VueClass, opts = {}) {
	VueClass.prototype.$http = axios;
};
Vue.use(install);

