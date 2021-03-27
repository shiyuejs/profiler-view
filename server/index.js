const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const { interfaceApp } = require('../plugins/log')  // 日志接入
const app = express()

process.on('unhandledRejection', (reason, promise) => {
	console.error('未处理的拒绝：', promise, '原因：', reason);
});

const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
	let startTime = Date.now()
	console.log(`app启动 ${startTime}`)

	const nuxt = new Nuxt(config)
	const { host, port } = nuxt.options.server

	// 初始化日志入口
	interfaceApp(nuxt, app, 'nuxt')

	// Build only in dev mode
	if (config.dev) {
		const builder = new Builder(nuxt)
		await builder.build()
	} else {
		await nuxt.ready()
	}

	// Give nuxt middleware to express
	app.use(nuxt.render)

	// Listen the server
	app.listen(port, host)
	consola.ready({
		message: `Server listening on http://${host}:${port}`,
		badge: true
	})

	console.log(`app启动完毕, ${Date.now() - startTime}ms, ${Date.now()}`)
}
start()
