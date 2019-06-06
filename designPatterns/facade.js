/**
 * facade pattern
 * 外观模式
 * 简介：一个简单的接口（外观）下，隐藏了复杂的实现过程
 * 优点：简化类的接口，也能将类从使用它的代码中解耦
 */

/**
 * facade demo
 * addMyEvent接口里面的实现有三种situation
 */
const addMyEvent = function(element, event, fn) {
    if (element.addEventListener) {
        element.addEventListener(element, event, fn);
    } else if (element.attachEvent) {
        element.attachEvent('on' + ev, fn)
    } else {
        el['on' + event] = fn;
    }
}