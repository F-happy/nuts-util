/**
 * Created by fuhuixiang on 16-5-26.
 * 清除布局问题
 */
module.exports = ()=> {
    let UA   = navigator.userAgent,
        _fix = '';

    if ((/MI 4LTE/i.test(UA)) && /QQ/i.test(UA)) {
        _fix = '18px';
    } else if ((/MI 4LTE/i.test(UA)) && UA.match('XUYUAN')) {
        _fix = '20.5px';
    } else if (/MI NOTE/i.test(UA)) {
        _fix = '19.65px';
    } else if (/M040/i.test(UA)) {
        _fix = '20px';
    }

    if (_fix.length > 0) {
        return (document.getElementsByTagName('html')[0].style.fontSize = _fix);
    } else {
        return null;
    }
};
