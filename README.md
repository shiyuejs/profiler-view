# 前端SSR nuxt.js构建
> 性能监控, 错误日志输出

- [生产地址](http://profiler.oa.com)

## 服务器部署要求
> 开发、测试、生产

- 强制安装统一版本：node[10.16.0]，npm[6.9.0]，cnpm[6.0.0]，yarn[1.21.1]，pm2[4.2.0]
- 前端单独部署应用全部放置在/data/webroot/front/ 下
- 如果新服务器没有front目录
- pm2部署需要建立日志文件夹

> 开发
- 本机也跟测试、生产工具版本一致

## 日志文件
- 应用日志：/data/webroot/front/profiler_view/logs
    - error 应用错误日志
    - http 页面、静态资源日志（只是部署在当前服务器的）
    - info 常规log日志（不会存入console.log输出的日志）
- nginx日志：/data/logs/profiler_view_nginx
- pm2日志：/data/logs/profiler_view


## 运行
``` bash
# 安装模块
$ cnpm i (此项目不建议使用)
$ yarn install 

# 本地开发 localhost:3100
$ npm run dev

# 服务器上部署
$ ./pack.sh start # 开启服务
$ ./pack.sh restart # 重启服务
$ ./pack.sh stop # 停止服务
```

## pm2配置
* [配置文档](https://www.jianshu.com/p/225b9284cfb8)


> pm2启动应用
``` bash
# 使用pm2启动应用, pack.sh脚本运行
# $ pm2 start pm2.json
```

## nginx配置
```bash
$ /etc/nginx/nginx.conf.d/profiler.oa.com.conf # 生产

$ nginx -t # 检查语法
$ nginx -s reload # 重启
```

## 文档
- [Nuxt.js docs](https://nuxtjs.org)
- [github nuxt.js](https://github.com/nuxt/nuxt.js)
- [Nuxt.js 中文文档](https://zh.nuxtjs.org/guide/directory-structure)
- [element主题](https://element.eleme.cn/#/zh-CN/theme)
- [g2plot.antv图表](https://g2plot.antv.vision/zh/examples/area/basic#basic-annotation)