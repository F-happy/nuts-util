/**
 * this must support ES6+
 * Created by fuhuixiang on 17-5-02.
 */
"use strict";

class NutsDriver {
    constructor() {
        this.ua = navigator.userAgent;
    }

    // Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12F70 MicroMessenger/6.1.5 NetType/WIFI
    isWechat() {
        return /micromessenger/i.test(this.ua.toLowerCase()) || /windows phone/i.test(this.ua.toLowerCase());
    }

    //android终端或者uc浏览器
    isAndroid() {
        return this.ua.indexOf('Android') > -1 || this.ua.indexOf('Linux') > -1;
    }

    //ios终端
    isiOS() {
        return !!this.ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    }
}

window.nutsDriver = new NutsDriver();
