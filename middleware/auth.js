let getCookie = (cookieStr, name) => {
  if (!cookieStr || !name) return ''
  let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
  if (arr = cookieStr.match(reg)) return unescape(arr[2])
  return ''
}

// 需要鉴权的路由地址, 匹配路由开头的即可
let authRouterPath = ['profiler']

export default function (context = {}) {
//   try {
//     let token = getCookie(context.req.headers.cookie, 'login_token') || ""
//     let pathname = (context.route.path || "").slice(1)
//     pathname = pathname.split('/')[0] || ""
//     authRouterPath.map(item => {
//       if (pathname.includes(item) && !token) {
//         context.redirect('/login')
//       }
//     })

//     // 中间件传递token
//     context.req.token = token
//     console.log(`auth pathname: ${context.route.path}, login_token: ${token}`)
//   } catch (err) {
//     //console.error(err)
//   }
}
