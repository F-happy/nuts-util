/**
 * Created by fuhuixiang on 16/6/3.
 */
'use strict';
let test = require('../lib/trim');

console.log('清除空格测试');
console.log('   我是清除前的内容   '+ test('   我是清除前的内容   '));
console.log('   我是清除前的内容   '+ test('   我是清除前的内容   ', 'left'));
console.log('   我是清除前的内容   '+ test('   我是清除前的内容   ', 'right'));
console.log('测试完成!');
