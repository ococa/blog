# JavaScript模块化

## 模块模式
是什么：通过对象，闭包，立即执行函数实现模块
缺点：
1. 后面扩展的模块和之前的模块之间没办法共享变量
2. 没有办法有效解决依赖问题
```
/**
 * 简介：模块模式实现模块化
 * 特点：
 * 1. 模块内部实现细节隐藏，外部访问不到innerNum
 * 2. 定义模块接口{ getCallTime }
 */

let module = (function() {
    let innerNum = 0;
    return {
        getCallTime: function() {
            return innerNum++;
        }
    };
})()
module.getCallTime();           //  0
module.innerNum                 // undefined
module.getCallTime();           //  1
module.getCallTime();           //  2

/**
 * 简介：模块的扩展
 * 缺点：扩展的模块之间作用域隔离
 */
// module.getNum2();               // module.getNum2 is not a function
(function(module) {
    let module2Num = 100;
    module.getNum2 = function() {
        return module2Num++;
    }
})(module);
module.getNum2();               // 100
```
## amd
是什么：异步加载模块化规范，面向浏览器环境
实现：require.js
```
/**
 * require.js 定义依赖于jquery的newModule模块
 * @param {string} moduleName 要定义的moduleName
 * @param {Array} [moduleNames[0]] 依赖的module数组
 * @param {Function} 模块内容
 */
define('newModule', ['jQuery'], $ => {
    let numClicks = 0;
    const handleClick = () => {
        alert(++numClicks);
    }
    return {
        $(document).on('click', handleClick)
    }
});
/**
 * require.js 调用模块
 */

require(['newModule'], function() {

});
```
## ommonJs
是什么：面向通用JavaScript环境的模块化解决方案, *同步*
```
/**
 * commonJS demo
 * fileName: count.js
 */

const $ = require('jQuery');
let num = 0;
module.exports = {
    getCountNum: () => {
        return num++;
    }
}
```
```
/**
 * commonJS import demo
 */
const count = require('count.js');
count.getCountNum();
```

## es6模块
是什么：异步加载模块化解决方案，未来

```
/**
 * 导出方式
 * fileName: file1.js
 */
let someVar, someVar1, someDefault;
export { someVar1 };
export someVar;
export default someDefault;
```
```
/**
 * 导入方式
 */
import someDefault from 'file1.js';
import { someVar1 } from 'file1.js';
import { someVar } from 'file1.js';
import * from 'file1.js';
```
