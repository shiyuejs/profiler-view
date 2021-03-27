const log4Init = require('./core/log4');
const rewriteFun = require('./core/rewriteFun')

module.exports = {
    /**
     * @method interfaceApp
     * @description 接入app实例，express实例，根据类型接多个不同的应用技术
     * @param {Object} interface 比如：nuxt实例
     * @param {Object} server 比如：express、koa、egg等等框架
     * @param {String} appType 应用的类型[nuxt, ....]
     */
	interfaceApp: (interface, server, appType) => {
		let startTime = Date.now()
		let log4 = log4Init.configure()
		const rewriteLogger = require(`./applications/${appType}/rewriteLogger`)
		rewriteFun(log4, rewriteLogger(interface, server, log4), server)
		if (typeof console !== 'undefined') {
			rewriteFun(log4, console, server)
		}
		console.log(`interfaceApp ${Date.now() - startTime}ms ${Date.now()}`)
	}
}