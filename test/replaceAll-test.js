/**
 * Created by fuhuixiang on 16/6/3.
 */
'use strict';
let test = require('../lib/replaceAll');

console.log('替换全部测试');
console.log('替换{1112223333}中的2为4:  '+test('1112223333', '2', '4'));
console.log('测试完成!');
