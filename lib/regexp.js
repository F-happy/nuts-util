/**
 * Created by fuhuixiang on 16-6-3.
 * @desc    常用正则表达式收集
 * @return  boolean
 * @param   text    需要判断的正则内容
 * @param   type    正则类型
 */
module.exports = (text = '', type = 'null')=> {
    let result = false;
    switch (type) {
        case '+int':
            result = !!(/^[0-9]*[1-9][0-9]*$/i.test(text));
            break;
        case '-int':
            result = !!(/^-[0-9]*[1-9][0-9]*$/i.test(text));
            break;
        case '+float':
            result = !!(/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/i.test(text));
            break;
        case '-float':
            result = !!(/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/i.test(text));
            break;
        case 'float':
            result = !!(/^(-?\d+)(\.\d+)?$/i.test(text));
            break;
        case 'email':
            result = !!(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/i.test(text));
            break;
        case 'url':
            result = !!(/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/i.test(text));
            break;
        case 'date':
            result = !!(/^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/i.test(text));
            break;
        case 'chinese':
            result = !!(/[\u4e00-\u9fa5]/i.test(text));
            break;
        case 'postcode':
            result = !!(/[1-9]\d{5}(?!\d)/i.test(text));
            break;
        case 'card':
            result = !!(/\d{15}|\d{18}/i.test(text));
            break;
        case 'china-phone':
            result = !!(/(\d{3}-|\d{4}-)?(\d{8}|\d{7})?/i.test(text));
            break;
        case 'ip':
            result = !!(/((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)/i.test(text));
            break;
        case 'qq':
            result = !!(/^[1-9]*[1-9][0-9]*$/i.test(text));
            break;
        default:
            break;
    }
    return result;
};
