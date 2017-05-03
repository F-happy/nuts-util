/**
 * 字符串截取函数
 * Created by fuhuixiang on 2016-12-13.
 */

/**
 * 判断中英文字符串长度
 * @param str
 * @returns {number}
 */
function strLen(str) {
    let len = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        //单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60 <= c && c <= 0xff9f)) {
            len++;
        } else {
            len += 2;
        }
    }
    return len;
}

function textShort(value, len = 36) {
    let tempLen = strLen(value),
        cutStr  = '';

    for (let i = 0; i < value.length; i++) {
        cutStr += value[i];
        if (tempLen >= len) {
            cutStr += '...';
            return cutStr;
        }
    }
    return cutStr;
}
