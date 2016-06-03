/**
 * 替换全部
 * Created by fuhuixiang on 16-6-3.
 * @param str       需要替换的字符串
 * @param oldStr    被替换的内容
 * @param newStr    替换成的新内容
 */
'use strict';

module.exports = (str, oldStr, newStr)=>{
    return str.replace(new RegExp(oldStr, "gm"), newStr);
};
