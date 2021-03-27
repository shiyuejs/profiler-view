import Vue from "vue";
import base64 from "js-base64";

import "../viewer/index";
import "../vue-awesome-swiper/index";
import "../vue-clipboard2/index";
import utils from "@/assets/utils/index";

import ComponentArr from "@/components";
if (ComponentArr.length > 0) {
  ComponentArr.forEach(item => {
    Vue.use(item);
  });
}
Vue.use(base64);

Vue.prototype.$utils = utils;
Vue.config.productionTip = false;
