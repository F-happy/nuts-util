/**
 * 清除空格
 * Created by fuhuixiang on 16-6-3.
 * @param text  需要清除空格的字符串
 * @param type  需要清除空格的类型
 */
module.exports = (text = '', type = '')=> {
    if (type == 'left') {
        return text.replace(/^(\s*|　*)/, "")
    } else if (type == 'right') {
        return text.replace(/(\s*|　*)$/, "")
    } else {
        return text.replace(/\s/g, "$1")
    }
};
