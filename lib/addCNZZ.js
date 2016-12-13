/**
 * Created by fuhuixiang on 16-5-26.
 * 在使用的同时需要在 css 样式中加入如下代码来隐藏 cnzz 的标识。
 * span[id*="cnzz_stat"], canvas {
 *     display: none;
 * }
 */
module.exports = (cn, cu)=> {
    // 通过不同的参数在页面上进行监控
    let cnzzProtocol = (("https:" == window.location.protocol) ? " https://" : " http://"),
        cnzzStr      = unescape("%3Cspan id='cnzz_stat_icon_" + cn + "'%3E%3C/span%3E%3Cscript src='" + cnzzProtocol +
            cu.replace(/\_/g, '.') + "/z_stat.php%3Fid%3D" + cn + "%26show%3Dpic' type='text/javascript'%3E%3C/script%3E");

    // 通过渠道号来活动监控特征
    return document.write(cnzzStr);
};
