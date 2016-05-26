/**
 * Created by fuhuixiang on 16-5-26.
 * jsonp请求数据的接口
 * @param  {String}   url       请求的url地址
 * @param  {String}   params    请求的参数
 * @param  {function} callback  回调函数
 * @param error
 */
module.exports = (url, params, callback, error)=> {
    let script = document.createElement('script'),
        id     = 'doubao_jsonp_' + Math.round(100 * Math.random());

    if (window[id]) {
        id += Math.round(100 * Math.random());
    }
    script.id = id;
    window[id] = (data)=> {
        delete window[id];
        script.parentNode.removeChild(script);
        if (typeof callback === 'function') {
            callback(data);
        }
    };
    script.onerror = (data)=> {
        script.parentNode.removeChild(script);
        delete window[id];
        if (typeof error === 'function') {
            error(data);
        }
    };
    url += '?' + params + '&callback=' + id;
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
};
