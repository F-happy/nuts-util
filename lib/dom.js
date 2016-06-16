/**
 * DOM元素的操作
 * Created by fuhuixiang on 16-6-16.
 * @param ele 需要操作的DOM元素,必须为原始DOM节点
 */
module.exports = (ele)=> {
    return {
        addClass(className){
            if (ele.classList) {
                ele.classList.add(className);
            } else {
                ele.className += ' ' + className;
            }
        },
        after(htmlString){
            ele.insertAdjacentHTML('afterend', htmlString);
        },
        append(child){
            ele.appendChild(child);
        },
        before(htmlString){
            ele.insertAdjacentHTML('beforebegin', htmlString);
        },
        empty(){
            ele.innerHTML = '';
        },
        hasClass(className){
            if (ele.classList) {
                ele.classList.contains(className);
            } else {
                new RegExp('(^| )' + className + '( |$)', 'gi').test(ele.className);
            }
        },
        removeClass(className){
            if (ele.classList) {
                ele.classList.remove(className);
            } else {
                ele.className = ele.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
            }
        }
    }
};
