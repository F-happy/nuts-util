/**
 * this must support ES6+
 * Created by fuhuixiang on 17-5-02.
 */
"use strict"

// Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12F70 MicroMessenger/6.1.5 NetType/WIFI
function isWechat() {
    var ua = navigator.userAgent.toLowerCase();
    return /micromessenger/i.test(ua) || /windows phone/i.test(ua);
}

