/**
 * Created by fuhuixiang on 16-5-26.
 * @desc    获取url中search部分的值
 * @return  undefined
 * @param   key
 */
module.exports = (key)=> {
    let search  = window.location.search.substr(1),
        regex   = new RegExp(key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]") + "=([^&#]*)"),
        results = regex.exec(search);
    return (results) ? (results[1]) : undefined;
};
