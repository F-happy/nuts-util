/**
 * detectVisible('element', function (elem) {
 *    do some thing...
 * }, 500);
 * Created by fuhuixiang on 2016-11-17.
 */
"use strict";
module.exports = (selector, cb, interval) => { //检测元素是否在视口的函数
    let elems = document.querySelectorAll(selector), innerHeight = window.innerHeight;
    let exec = function (elems, cb) { //回调函数
        Array.prototype.forEach.call(elems, function (elem, index) {
            if (elem.getBoundingClientRect().top < innerHeight) { //判断元素是否出现在视口
                cb.call(elem, elem); //调用传入的回调
            }
        })
    };
    document.addEventListener('scroll', function () { //使用debounce和throttle来稀释scroll事件
        clearTimeout(detectVisible.timer);
        if (!detectVisible.scrollBegin) {
            detectVisible.scrollStartTime = Date.now();
        }
        detectVisible.scrollBegin = true;
        if (Date.now() - detectVisible.scrollStartTime > interval) {
            exec(elems, cb);
            detectVisible.scrollBegin = false;
        }
        detectVisible.timer = setTimeout(function () {
            exec(elems, cb);
        }, interval);
    })
};
