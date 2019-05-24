# 函数的闭包和作用域

### 关键字：
1. 闭包
2. 函数执行上下文
3. 词法环境

## 闭包
是什么：
1. 闭包允许函数访问并操作函数（函数a）外的变量。只要变量或函数存在于声明函数（函数a）时的作用域内，闭包即可使函数（函数a）能够访问到这些变量或者函数。
2. 即便函数声明时候的作用域消失，调用函数（函数a）仍然可以访问当定义函数时通过闭包访问的变量或者函数。
3. 只要函数存在，闭包就一直存在。
4. 闭包是纯函数式编程的特性之一。
```
/** 
 * 最简单的闭包 
 * the easiest closure
 */
let outerValue = "outer";
function closureTest() {
    return outerValue;
}
closureTest();               // "outer"
```
```
/** 
 * 现象：
 * 在定义函数innerTest的时候，不仅定义了函数的声明，而且还创建一个闭包，该闭包不仅包含了（1）函数的声明
 * 还包含了（2）在函数声明时该作用域中的“所有的变量”。
 * 所以：
 * 当最后执行内部函数时，尽管声明时的作用域已经消失，但通过闭包仍然能够访问到原始作用域。
 */
let outerValue = 'outer';
let later;
function closureTest() {
    let innerValue = 'inner';
    function innerTest() {
        console.log( 'outerValue === "outer"', outerValue === 'outer');
        console.log('innerValue === "inner"', innerValue === 'inner');
    }
    later = innerTest;              // 将内部函数指向全局变量，方便之后引用
}
closureTest();              // 执行外部函数，当函数执行完之后，函数作用域会释放（消失）
later();                    // outerValue === "outer" true  // innerValue === "inner" true
                           
```

怎么用：
1. 封装私有变量
```
/**
 * closure imitation class implements private variables
 * 闭包模拟实现类的私有变量
 */
function PrivateVar() {
    let innerNum = 0;
    this.getNum = function() {
        return innerNum;
    }
}
let inst1 = new PrivateVar();
inst1.getNum();                 // 0
inst1.innerNum;                 // undefined
```
2. 回调函数

## 函数执行上下文
是什么：
为什么：
怎么样：

## 词法环境
是什么：
为什么：
怎么样：