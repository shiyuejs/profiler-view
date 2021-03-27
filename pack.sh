#!/bin/bash
# cnpm不稳定，建议使用yarn，服务器和本机开发同步换成yarn
# node v10.16.0
# npm v6.9.0
# yarn v1.21.1

appName=""
staticFolder="dist"

# 有代码更新必须每次build，这是客户端构建过程
# 静态资源copy到dist目录，给发版系统上传到cdn
build() {
    rm -rf $staticFolder
    yarn install
    npm run build
    cp -r .nuxt/${staticFolder}/client $staticFolder
}

# 编译打包
if [ $1 == "build" ]
then
    build
fi

# 开启新服务 {发版系统接入}
if [ $1 == "start" ]
then
    # pm2 start pm2.json	# npm start 是服务端运行，相当于用express开启一个服务
    NODE_LOG_DIR=/root/logs/alinode ENABLE_NODE_LOG=YES pm2 start pm2.json
fi

# 重启服务 {发版系统接入}
if [ $1 == "restart" ]
then
    # pm2 restart pm2.json
    NODE_LOG_DIR=/root/logs/alinode ENABLE_NODE_LOG=YES pm2 restart pm2.json
fi

# 停止服务 {发版系统接入}
if [ $1 == "stop" ]
then
    pm2 stop ${appName}
	pm2 delete ${appName}
fi

# 初始化一个项目并启动, 用于要删除node_modules残留文件
if [ $1 == "init" ]
then
    rm -rf ./node_modules
    yarn cache clean
    pm2 stop ${appName}
	build
	sleep 2
    pm2 start pm2.json
fi