const path = require('path');
const BASELOGPATH = path.resolve(__dirname, '../../../../logs');
const env = process.env.NODE_ENV === 'production'
module.exports = () => {
    return {
        pm2: env,
        disableClustering: env,
        "replaceConsole": false,
        // "baseLogPath": BASELOGPATH,

        // 日志格式 设置
        "appenders": {
            "consoleout": {
                "type": "console"
            },
            "errorLogger": {
                "type": "dateFile",
                "filename": `${BASELOGPATH}/error`,
                "pattern": "yyyy-MM-dd.log",
                "alwaysIncludePattern": true,
                "encoding": "utf-8",
                "maxLogSize": 1024 * 1024 * 80,
                "backups": 5,
            },
            "infoLogger": {
                "type": "dateFile",
                "filename": `${BASELOGPATH}/info`,
                "pattern": "yyyy-MM-dd.log",
                "alwaysIncludePattern": true,
                "encoding": "utf-8",
                "maxLogSize": 1024 * 1024 * 80,
                "backups": 5,
            },
            "httpLogger": {
                "type": "dateFile",
                "filename": `${BASELOGPATH}/http`,
                "pattern": "yyyy-MM-dd.log",
                "alwaysIncludePattern": true,
                "encoding": "utf-8",
                "maxLogSize": 1024 * 1024 * 80,
                "backups": 5,
            }
        },

        // 供外部调用的名称和对应设置定义
        "categories": {
            "default": {
                "appenders": ['consoleout'],
                "level": "all"
            },
            "error": {
                "appenders": ["errorLogger"],
                "level": "error"
            },
            "info": {
                "appenders": ["infoLogger"],
                "level": "info"
            },
            "http": {
                "appenders": ["httpLogger"],
                "level": "info"
            }
        }
    }
}