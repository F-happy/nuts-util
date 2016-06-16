/**
 * Created by fuhuixiang on 16-5-26.
 * @desc    获取url中search部分的值
 * @return  string
 * @param   key
 */
module.exports = (key)=> {
    let results = new RegExp(key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)").exec(window.location.search.substr(1));
    return (results) ? (results[1]) : '';
};
