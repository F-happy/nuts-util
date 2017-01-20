/**
 * Created by fuhuixiang on 2016-12-14.
 */
"use strict";
function timeoutPromise(ms, promise) {
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            reject(new Error("promise timeout"))
        }, ms);
        promise.then(
            (res) => {
                clearTimeout(timeoutId);
                resolve(res);
            },
            (err) => {
                clearTimeout(timeoutId);
                reject(err);
            }
        );
    })
}

// 使用方法
// timeoutPromise(1000, fetch('/hello')).then(function(response) {
//     // process response
// }).catch(function(error) {
//     // might be a timeout error
// });
