/**
 * 用于 css 的 camalCase 转换，例如 background-color 转换为 backgroundColor
 * Created by fuhuixiang on 2017-1-17.
 */
"use strict";
function camelize(str) {
    return str.replace(/-+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : ''
    })
}
module.exports = camelize(str);
