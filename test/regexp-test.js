/**
 * Created by fuhuixiang on 16/6/3.
 */
'use strict';
let reg = require('../lib/regexp');

console.log('常用正则表达式测试');
console.log('正整数      测试结果:----' + reg('100', '+int'));
console.log('负整数      测试结果:----' + reg('-100', '-int'));
console.log('正浮点数    测试结果:----' + reg('3.14', '+float'));
console.log('负浮数      测试结果:----' + reg('-3.14', '-float'));
console.log('浮点数      测试结果:----' + reg('3.14', 'float'));
console.log('email地址数 测试结果:----' + reg('fuhuixiang@jonnyf.com', 'email'));
console.log('url地址     测试结果:----' + reg('http://www.baidu.com/', 'url'));
console.log('年/月/日    测试结果:----' + reg('2016/11/05', 'date'));
console.log('中文字符    测试结果:----' + reg('中国', 'chinese'));
console.log('中国邮政编码测试结果:----' + reg('753400', 'postcode'));
console.log('身份证      测试结果:----' + reg('640221111111111111', 'card'));
console.log('国内电话号码测试结果:----' + reg('010-5509626', 'china-phone'));
console.log('IP地址      测试结果:----' + reg('192.168.1.16', 'ip'));
console.log('QQ号码      测试结果:----' + reg('644612679', 'qq'));
console.log('测试完成!');
