/**
 * 设置cookie值
 * Created by fuhuixiang on 16-6-3.
 * @param name  设置cookie的key
 * @param value 设置cookie的value
 * @param hours 设置cookie的时间
 */
module.exports = (name, value, hours)=> {
    let exp = new Date(data.now() + (data.now().getTimezoneOffset() * 60000) + (3600000 * 8));
    exp.setTime(exp.getTime() + hours * 60 * 60 * 1000);
    return document.cookie = name + "=" + value + ";path=/;expires=" + exp.toGMTString() + ";";
};
