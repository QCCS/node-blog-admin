/**
 * 替换打包后的资源
 */

class TxtPlugin{
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.plugin('emit', function (compilation, callback) {
      const { goal } = this.options;
      console.log(goal);
      console.log(compilation)
      // 这是一个异步事件，要记得调用 callback 通知 Webpack 本次事件监听处理结束。
      // 如果忘记了调用 callback，Webpack 将一直卡在这里而不会往后执行。
      callback();
    })
  }
}

module.exports = TxtPlugin;
