import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

if (process.browser) {
  Vue.use(VueClipboard)
}