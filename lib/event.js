/**
 * this is nuts event util for ES6
 * Created by fuhuixiang on 2016-9-28.
 */
"use strict";

/**
 * eg: {#el: {click: event, touchend: event}}
 * @type {{}}
 */
let eventList = {}; // 事件元素队列
let offList = [];   // 被移除元素队列

/**
 * 事件分发模块
 * @param ele
 * @param type
 * @param callback
 */
function on(ele, type, callback) {
    let body = document.body;

    // 注册事件元素和类型
    if (!eventList[ele]) {
        eventList[ele] = {};
    }
    eventList[ele][type] = callback;

    /**
     * 在 body 元素上绑定事件, 统一管理事件
     */
    body.addEventListener(type, (e)=> {
        let eTag     = e.target,
            eleEvent = eventList[ele],
            eleList  = document.querySelectorAll(ele);

        // 向上冒泡匹配元素
        while (!([].indexOf.call(eleList, eTag) !== -1) && eTag !== body) {
            eTag = eTag.parentNode;
        }
        e.stopPropagation();
        e.preventDefault();
        if (eTag !== body && !!eleEvent) {
            if (!!eleEvent[type]) {
                eleEvent[type](eTag);

                // 如果当前元素事件属于需要被移除的事件，则在队列中进行删除
                if (offList.indexOf(ele + type) !== -1) {
                    delete eventList[ele][type];
                }
            }
        }
    });
}

/**
 * 添加移除事件
 * @param ele
 * @param type
 */
function off(ele, type) {
    offList.push(ele + type);
}

module.exports = (ele)=> {
    return {
        on: (ele, type)=> {
            on(ele, type);
        },
        click: (callback)=> {
            on(ele, 'click', callback);
        },
        off: (type)=> {
            off(ele, type);
        },
        one: (type, callback)=> {
            on(ele, type, callback);
            off(ele, type);
        },
        oneClick: (callback)=> {
            on(ele, 'click', callback);
            off(ele, 'click');
        }
    };
};
