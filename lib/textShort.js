/**
 * 字符串截取函数
 * Created by fuhuixiang on 2016-12-13.
 */
function textShort(value, len = 36) {
    let tempLen = 0,
        cutStr  = '';

    for (let i = 0; i < value.length; i++) {
        let curChar = value[i];
        tempLen++;
        if (encodeURI(curChar).length > 4) {
            tempLen++;
        }
        cutStr += curChar;
        if (tempLen >= len) {
            cutStr += '...';
            return cutStr;
        }
    }
    return cutStr;
}
