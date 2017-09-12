/**
 * Created by fuhuixiang on 17-9-12.
 * @desc    compose 函数的实现
 * @return  function
 */

 module.exports = ()=> {
    const args = arguments;
    const start = args.length - 1;
    return function() {
        let i = start;
        let result = args[start].apply(this, arguments);
        while (i--) result = args[i].call(this, result);
        return result;
    };
};
