const {Worker, isMainThread} = require('worker_threads');
var xiancheng = 10; //线程数量

console.log("启动成功，正在生成靓号地址，请不要关闭此窗口！")
for (let index = 0; index < xiancheng; index++) {
    if (isMainThread) {
        new Worker("./work.js");
    }
}