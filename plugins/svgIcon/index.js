import Vue from 'vue'
import SvgIcon from '@/assets/svg-icon/svgIcon.vue'

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg-icon/svg', false, /\.svg$/)
const iconMap = requireAll(req)