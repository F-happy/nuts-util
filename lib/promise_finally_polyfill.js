/**
 * Created by fuhuixiang on 2016-12-4.
 */
"use strict";
Promise.prototype.finally = function (f) {
    return this.then(function (value) {
        return Promise.resolve(f()).then(function () {
            return value;
        });
    }, function (err) {
        return Promise.resolve(f()).then(function () {
            throw err;
        });
    });
};
module.exports = Promise;
