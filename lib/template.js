/**
 * Created by fuhuixiang on 2016-9-29.
 */
"use strict";

class NutsTemp {
    constructor(ele) {
        this.tempEle = ele;
        this._this = this;

        //模板文本中的特殊字符转义处理
        this.escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    }

    compiled(ele) {
        // debugger
        [].forEach.call(ele.childNodes, (v)=> {
            switch (v.nodeType) {
                case 3:
                    this.replace(v);
                    break;
                case 1:
                    // debugger
                    this.eleController(v);
                    this.compiled(v);
                    break;
            }
        });
    }

    data(option) {
        let {data, method} = option;

        Object.keys(data).forEach((v)=> {
            Object.defineProperty(this, v, {
                configurable: true,
                enumerable: true,
                set: (value)=> {
                    this.rewrite(data[v], value);
                },
                get: ()=> {
                    return data[v];
                }
            });
        });
        if (this.tempEle.attributes.hasOwnProperty('nuts-app')) {
            this.tempEle.style.display = 'none';
            this.compiled(this.tempEle);
        }
        return this._this;
    }

    replace(ele) {
        let re = /{{([^}]+)}}/g;
        ele.textContent = ele.textContent.replace(/(^\s+)|(\s+$)/g, '').replace(re, (all, value)=> {
            return this[value] || '';
        });
        return ele;
    }

    rewrite(old, next) {
        this.tempEle.innerHTML = this.tempEle.innerHTML.replace(new RegExp(old, 'g'), next);
    }

    eleController(ele) {
        if (ele.hasAttribute('f-for')) {
            let data = this[ele.getAttribute('f-for')],
                html = ele.innerHTML;
            ele.innerHTML = '';
            data.forEach((v)=> {
                ele.innerHTML += html.replace(/{{\item}}/g, v);
            });
            ele.removeAttribute('f-for');
        } else if (ele.hasAttribute('f-if')) {
            if (!this[ele.getAttribute('f-if')]) {
                ele.parentNode.removeChild(ele);
            } else {
                ele.removeAttribute('f-if');
            }
        }
    }

    render() {
        this.tempEle.style.display = 'block';
    }
}

window.nutsTemp = {
    create: (ele)=> {
        return new NutsTemp(ele);
    }
};


// test

// javaScript
// nutsTemp.create(document.querySelector('#id')).data({
//     data: {
//         message1: 'hello 1',
//         message2: 'hello 2',
//         message3: ['hello 11', 'hello 22', 'hello 33'],
//         message4: true
//     }
// }).render();

// html
// <div id="id" nuts-app>
//      {{message1}}
//      <div f-for="message3">
//          <p>{{item}}</p>
//          <p>{{item}}</p>
//      </div>
//      <div f-if="message4">
//          <p>{{item}}</p>
//          <p>{{item}}</p>
//      </div>
// </div>
