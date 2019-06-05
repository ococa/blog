/**
 * design patterns modules patterns 模块模式
 * return object include public functions and attributes
 * 通过返回一个对象，将公有方法或属性当作对象的键值对返回
 */
const moduleTest = (function () {
    let counter = 0;
    return {
        increamentCounter: function() {
            return ++counter;
        },
        resetCounter: function() {
            console.log("counter value prior to reset: " + counter);
            return counter = 0;
        }
    }
})();
moduleTest.increamentCounter();         // 1
moduleTest.increamentCounter();         // 2
moduleTest.resetCounter();              // 0
moduleTest.increamentCounter();         // 1

/**
 * modules 模式引入其他模块例子
 * modules模式引入jquery
 */
const moduleTest2 = (function(JQ) {
    // JQ.operation
    console.log(Jquery)
})(jQuery);

/**
 * 模块模式
 * 优点：封装私有变量
 * 缺点：1. 当改变变量可变性（如私有变公有），每一个引用过该成员的地方都要修改
 *      2. 私有变量扩展困难
 */

 
/**
 * revealing module pattern 揭示模块模式
 * 不直接返回公有方法和属性，而是返回公有方法和属性的引用
 */
const revealingModule = (function() {
    let privateVar = 'private var';
    let publicVar = 'public var';
    function privateFn() {
        console.log('name :', privateVar);
    }
    function publicSetName(strName) {
        privateVar = strName
    }
    function publicGetName() {
        privateFn();
    }
    return {
        setName: publicSetName,
        getName: publicGetName,
        publicVar: publicVar
    }
})();

