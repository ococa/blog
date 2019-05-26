# 函数的闭包和作用域

### 关键字：
1. 闭包
2. 函数执行上下文
3. 词法环境

## 结论
闭包
函数执行上下文 == 执行上下文栈 == 调用栈（call stack）
词法环境 --> 作用域实现机制，也称为作用域（scopes）

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
在回调函数中使用闭包


## 函数执行上下文
是什么：
- JavaScript中代码有两种类型，一种是全局代码，一种是函数代码，位于函数内部。
- JavaScript引擎执行代码的时，每一条语句都处于特定的执行上下文，全局上下文或者函数上下文。
- 全局上下文只有一个。函数上下文，每次执行函数都会创建一个新的函数上下文，形成执行上下文栈/调用栈 （call stack）。

## 词法环境（lexical environment）
是什么：
- 词法环境是JavaScript引擎内部用来跟踪识别标识符和特定变量之间的映射关系。
- 词法环境是JavaScript作用域的内部实现，人们通常称之为作用域（scopes）
- 代码嵌套和词法环境 -> 形成作用域链

怎么实现：
- 创建函数，即会创建一个与之相关联的词法环境，并存储在名为[[environment]]的内部属性上

## JavaScript变量类型

1. let
2. const 
3. var

### 定义变量关键字和词法环境

1. var：
- var没有块作用域，只有全局作用域和函数作用域。此时当使用var定义一个变量，该变量是在最近的函数内部或者全局的词法环境中定义的
2. let & const：
- let和const在最近的词法环境中（包括全局，函数，块级作用域，循环内）定义变量

### 在词法环境中注册标识符
是什么：
为什么：
- JavaScript代码执行实际上分为两个阶段，每次创建新的词法环境（1）先访问并且注册当前词法环境中所申明的所有变量和函数，但并不执行（2）执行代码。

表现：
- 在函数或全局词法环境创建时候，会注册当前作用域内所有通过（1）var申明的变量注册为undefined（2）函数声明创建的函数提前声明。对于箭头函数和函数表达式则不会提前。


## 闭包的工作原理
          
```
/** 
 * 1. 处于全局执行上下文
 * 2. 当执行inst1.getNum时，会创建一个getNum执行环境并推入栈，同时会创建新的词法环境用于保存getNum中定义的变量（为空，不包含num）。另外getNum词法环境还包含了getNum创建时所处的环境，即Ninja环境。所以执行inst1.getNum时候，首先在getNum执行环境寻找num，找不到会到Ninja环境寻找
 * 2. 
 */
function Ninja() {
    let num = 0;
    this.getNum() {
        return num;
    };
    this.addNum() {
        return ++num;
    }
}    
let inst1 = new Ninja();        // 1. 
inst1.getNum();                 // 2.

```
