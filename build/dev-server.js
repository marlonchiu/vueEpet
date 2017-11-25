'use strict'
require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()
const compiler = webpack(webpackConfig)

// 模拟mock接口,实现注册登录  start

// 引入用户数据
var usersData = require('../src/mock/users.json')
// 配置路由器
var userRouter = express.Router()
var jsonfile = require('jsonfile')

/* 用于生成短信验证码和发送验证码短信的工具模块 */
var md5 = require('blueimp-md5')
var moment = require('moment')
var Base64 = require('js-base64').Base64
var request = require('request')
/*生成指定长度的随机数*/
function randomCode(length) {
  var chars = ['0','1','2','3','4','5','6','7','8','9']
  var result = "" // 统一改名: alt + shift + R
  for(var i = 0; i < length ; i ++) {
    var index = Math.ceil(Math.random()*9)
    result += chars[index]
  }
  return result
}
exports.randomCode = randomCode

/*向指定号码发送指定验证码*/
function sendCode(phone, code, callback) {

  //  请求自己的容联云通信信息
  var ACCOUNT_SID = '8a216da85f9fd676015fc3f75f5f1059'
  var AUTH_TOKEN = 'a8a546261f1f4b55ad87a5dfab370f39'
  var Rest_URL = 'https://app.cloopen.com:8883'
  var AppID = '8a216da85f9fd676015fc3f75f9a105d'

  // 1. 准备请求url
  /*
   1.使用MD5加密（账户Id + 账户授权令牌 + 时间戳）。其中账户Id和账户授权令牌根据url的验证级别对应主账户。
   时间戳是当前系统时间，格式"yyyyMMddHHmmss"。时间戳有效时间为24小时，如：20140416142030
   2.SigParameter参数需要大写，如不能写成sig=abcdefg而应该写成sig=ABCDEFG
   */
  var sigParameter = ''
  var time = moment().format('YYYYMMDDHHmmss')
  sigParameter = md5(ACCOUNT_SID+AUTH_TOKEN+time)
  var url = Rest_URL+'/2013-12-26/Accounts/'+ACCOUNT_SID +'/SMS/TemplateSMS?sig='+sigParameter

  // 2. 准备请求体
  var body = {
    to : phone,
    appId : AppID,
    templateId : '1',
    "datas":[code,"1"]
  }
  //body = JSON.stringify(body);

  // 3. 准备请求头
  /*
   1.使用Base64编码（账户Id + 冒号 + 时间戳）其中账户Id根据url的验证级别对应主账户
   2.冒号为英文冒号
   3.时间戳是当前系统时间，格式"yyyyMMddHHmmss"，需与SigParameter中时间戳相同。
   */
  var authorization = ACCOUNT_SID + ':' + time
  authorization = Base64.encode(authorization)
  var headers = {
    'Accept' :'application/json',
    'Content-Type' :'application/json;charset=utf-8',
    'Content-Length': JSON.stringify(body).length+'',
    'Authorization' : authorization
  }

  // 4. 发送请求, 并得到返回的结果, 调用callback
  request({
    method : 'POST',
    url : url,
    headers : headers,
    body : body,
    json : true
  }, function (error, response, body) {
    callback(body.statusCode==='000000')
  })
}
exports.sendCode = sendCode

// 可以添加一下测试代码啦
const code = randomCode(6)
userRouter.get('/getcode',function (req,res) {
  sendCode('18588759347', code, function (success) {
    console.log(success)
  })
})



// 注册登陆的路由
userRouter.get('/login', function (req, res, next) {
  // 请求的形式  " /login?phone=18588759347&password=123123 "

  // 从请求体中获取输入的phone和code
  var username = req.query.username;
  var password = req.query.password;

  console.log('/login 正常登录', username, password);

  // 跟userData进行匹配查找
  var users = usersData
  var user = users.find((item, index) => {
    // 找到登录名或者手机号匹配的那一个
    return item.username === username || item.tel === username
  })
  console.log(user);

  if(typeof user === "undefined" || user.password !== password){
    res.send({msg:"抱歉登录失败了~~~"})
  }else if(user.password === password){
    res.send({msg:"欢迎小主回来"})
  }

})

// 创建动态获取验证码登录的路由
userRouter.get('/islogin', function (req, res, next) {
  // 请求的形式  " /login?phone=18588759347&code=123123 "

  // 从请求体中获取输入的phone和code
  var tel = req.query.tel;
  var usercode = req.query.code;

  console.log('/islogin 验证码登录', tel, usercode);
  var users = usersData
  var user = users.find((item, index) => {
    // 找到登录名或者手机号匹配的那一个
    return item.tel === tel
  })
  if(typeof user === "undefined" || !tel){
    res.send({msg:"抱歉登录失败了~~~"})
  }else if(code ===  usercode){
    res.send({msg:"恭喜您，登录成功~~~"})
  }
})



// 注册的路由 register
userRouter.get('/register', function (req, res, next) {

  // 从请求体中获取输入的phone和code
  var tel = req.query.tel;
  var usercode = req.query.code;
  var username = req.query.username;
  var password = req.query.password;
  var passwordag = req.query.passwordag;

  console.log('/register 注册账户', tel, usercode, username, password, passwordag);
  var users = usersData

  // 跟数据库信息进行比对
  users.forEach((user) => {
    if(user.tel === tel){
      res.send({errMsg:"用户名已存在"})
      return
    }
    const regName=/^(\w){4,20}$/
    const regPassword=/^(\w){6,20}$/
    if(usercode !== code){
      res.send({errMsg:"验证码输入错误"})
    }else if(!regName.test(username)){
      res.send({errMsg:"用户名只能是4-20位中英文、数字、下划线或组合"})
    }else if(!regPassword.test(password)){
      res.send({errMsg:"请输入8-20位数字或字母的密码"})
    }else if(password !== passwordag){
      res.send({errMsg:"两次输入的密码不符，请重新输入"})
    }else{
      // 注册成功，将信息假如数据库中
      var user = {
        username: username,
        password: password,
        tel: tel,
        id: new Date().getTime(),
        errMsg: "注册成功"
      }
      users.push(user)
      var file = '../../vueEpt/src/mock/users.json'
      jsonfile.writeFile(file, users, function (err) {
        console.error(err)
      })
      res.send(user)
    }
  })
})



app.use('/api', userRouter)
// 模拟mock接口,实现注册登录  end








const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
// currently disabled until this is resolved:
// https://github.com/jantimon/html-webpack-plugin/issues/680
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
