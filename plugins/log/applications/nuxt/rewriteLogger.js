const uuid = require("../../core/uuid")
module.exports = (interface, server, log4) => {
	server.use((req, res, next) => {
		req.traceid = uuid()
		next()
	})
	server.use(log4.connectLogger(log4.getLogger('http'), {
		level: 'info',
		format: (req, res, format) => {
			let headers = req.headers
			return format(`${req.traceid} :remote-addr :method :url :status ${res.responseTime}ms ${req.token || ""} ${headers["user-agent"]}`)
		}
	}));

	return interface._logger
}