/**
 * this must support ES6+
 * Created by fuhuixiang on 17-5-03.
 */
"use strict";

module.exports = (num) => {
    return num && num
            .toString()
            .replace(/(\d)(?=(\d{3})+\.)/g, function ($0, $1) {
                return $1 + ",";
            });
};
