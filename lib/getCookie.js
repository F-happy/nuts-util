/**
 * 获取cookie值
 * Created by fuhuixiang on 16-6-3.
 * @param name  获取cookie的值
 */
module.exports = (name)=> {
    let arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    return arr !== null ? arr[2] : '';
};
