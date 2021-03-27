const Components = require.context("./common", true, /\.vue/);
const ComponentArr = Components.keys().map(item => {
  // let componentName = item.match(/\/(\S*)\.vue/)[1];
  return {
    install(Vue) {
      Vue.component(Components(item).default.name, Components(item).default);
    }
  };
});
export default ComponentArr;
