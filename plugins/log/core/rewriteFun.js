const errorType = require('../config/errorType')

const _toString = Object.prototype.toString;
const isType = (o) => {
    return (str) =>{
        return _toString.call(str) === "[object " + o + "]";
    }
};
const isError = isType("Error")

/**
 * @method rewriteOrigin
 * @description 重写系统或者自定义的函数， 目的是调用log4打印日志到文件
 * @param {String} type 函数名字符串
 * @param {String} fileName 输出的文件名
 * @param {Object} log4 log4日志模块的实例
 * @param {Object} interface 重写对象的类函数
 * @param {Object} server node应用[express, koa....]
 * 
 * @example
 * rewriteOrigin('error', 'error', log4, console, express)
 * @returns 无
 */
let rewriteOrigin = (type, fileName, log4, interface, server) => {
    let originFn = interface[type]
    interface[type] = (...rest) => {
		let startTime = Date.now()

        // fileName: default, error, info, http
        // log4/config配置categories类别
        const logger = log4.getLogger(fileName)
        if (typeof logger[type] === 'function') {

            // 基础类型：SyntaxError, ReferenceError, TypeError, RangeError, EvalError, URIError
            // 针对xxx.error类型，包一层错误实例化, 非基础类型的错误，统一个错误name: UncaughtExceptionError
            if (type === 'error' && !isError(rest[0])) {
                let err = new Error(rest[0])
                err.name = 'UncaughtExceptionError'
                logger[type](err)
            } else {
                logger[type](...rest)
            }
		}

        // 不执行原有函数
		// originFn.apply(null, rest)
		console.log(`logger-done ${Date.now() - startTime}ms`)
    }
}

const rewritePackage = (...rest) => {
    for (let type in errorType) {
        let fileName = errorType[type]
        rewriteOrigin(type, fileName, ...rest)
    }
}

module.exports = (...rest) => {
    return rewritePackage(...rest)
}