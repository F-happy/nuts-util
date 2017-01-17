/**
 * 将 lineHeight 转换为 line-height 格式
 * Created by fuhuixiang on 2017-1-17.
 */
"use strict";
function dasherize(str) {
    return str.replace(/::/g, '/')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
        .replace(/([a-z\d])([A-Z])/g, '$1_$2')
        .replace(/_/g, '-')
        .toLowerCase()
}
module.exports = dasherize(str);
