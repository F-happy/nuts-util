/**
 * this must support ES6+
 * Created by fuhuixiang on 17-5-03.
 */
"use strict";

;(function (name, definition) {
    // 检查上下文环境是否为 AMD 或 CMD
    var hasDefine = typeof define === 'function',
        // 检查上下文环境是否为 Node
        hasExports = typeof module !== 'undefined' && module.exports;

    if (hasDefine) {
        // AMD 环境或 CMD 环境
        define(definition);
    } else if (hasExports) {
        // 定义为普通 Node 模块
        module.exports = definition();
    } else {
        // 将模块的执行结果挂在 window 变量中， 在浏览器中 this 指向 window 对象
        this[name] = definition();
    }
})('funcName', function () {
    // return funcDefinition
});
