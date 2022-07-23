if (process.env.LOCAL_DEBUG) {
  require('./lib') // 如果是调试模式，加载src中的源码
} else {
  require('./dist/index') // dist会发到npm
}
