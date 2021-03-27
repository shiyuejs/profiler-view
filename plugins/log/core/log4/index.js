
const log4js = require('log4js');
const config = require('./config')

module.exports = {
    configure() {
        log4js.configure(config());
        log4js.getLogger();
        return log4js
    },
    interface() {
        return log4js
    }
}