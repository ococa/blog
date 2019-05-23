# 函数调用

## 两个（隐式）参数

1. arguments 
是什么：函数调用时传递的所有参数的集合


2. this(函数上下文)
是什么：函数调用时的上下文对象

### arguments
1. 属性：length
```
arguments.length        // 可以获取参数集合数量
```
2. 调用：arguments[index]
```
arguments[index]        //   -1 < index < arguments.length
```

### this(函数上下文)
1. 在面向对象的语言中，this通常指向定义当前方法的类的实例
2. 在JavaScript中，this的指向由（1）定义函数的方式。（2)定义函数的位置。（3）函数的调用方式

## 函数调用的四种方式

### 作为一个函数调用
是什么：
- 函数直接被调用

怎么样：
- 非严格模式下，this指向global对象，如window
- 严格模式下，this为undefined
```
function test() { return this; }
console.log(test() === window)      // true
```

### 作为一个方法调用
是什么：
- 函数作为对象的一个属性，并且通过对象引用的方式调用，函数会作为对象的方法被调用。

怎么样：
- 在方法（function）内部可以通过this访问到对象主体，this指向对象主体。
```
var obj = {
    num: 0,
    getNum: function() {
        return this.num;
    },
    getThis: function() {
        return this;
    }
};
obj.getThis() === obj;          // true

```

### 作为一个构造函数
是什么:
- 通过关键字new调用函数

怎么样：
- 当通过new关键字调用函数时，会创建一个空的对象实例，并将其作为函数上下文（this）传递给函数。

*使用new关键字会发生什么：*
1. 创建一个新的空对象
2. 该对象作为this参数传递给构造函数，从而成为构造函数的函数上下文
3. 执行构造函数里面的代码
4. 新的对象this会作为new运算符的返回值（有例外）
```
function Obj() {
    this.getThis = function() {
        return this;
    };
}
let inst1 = new Obj();
let inst2 = new Obj();
console.log(inst1.getThis() === inst1);         // true
console.log(inst2.getThis() === inst2);         // true
``` 
当构造函数中有return的情况下：
1. 当返回值是非对象值 --> 不影响构造函数，忽略返回值
2. 当返回值是一个对象 --> 返回的引用值会代替this, this会被丢弃
```
// 情况一：忽略返回值
function Obj() {
    this.getThis = function() {
        return this;
    };
    return 1;
}
let inst1 = new Obj();
let inst2 = new Obj();
console.log(inst1.getThis() === inst1);         // true
console.log(inst2.getThis() === inst2);         // true
```
```
// 情况二：返回返回值，丢弃this
const obj = {
    'name': 'obj'
}
function Obj() {
    this.name = 'new obj'
    this.getThis = function() {
        return this;
    };
    return obj;
}
let inst1 = new Obj();
let inst2 = new Obj();
console.log(inst1.name === obj.name);           // true
console.log(inst2.name === obj.name);           // true
console.log(inst1.name ===  'new obj');         // false
console.log(inst2.name ===  'new obj');         // false
console.log(inst1 === inst2 && inst1 === obj);  // true
```

### 通过函数的apply或者call调用

是什么： 
- 函数作为对象，每个函数都有两个方法apply和call用来显示的指定任何对象作为函数的上下文
怎么样：
- 使用apply调用函数，需要为其传递两个参数，作为函数上下文的对象和一个数组作为函数调用的参数。
- call和apply的区别，参数是一个个传
```
const obj = {
    name: 'i am obj '
};
function testApply(coming) {
    return this.name + coming;
}
window.name = "window name ";
testApply.name = "function testApply self";
testApply("self@testApply");                // "window name self@testApply"
testApply.apply(obj, ["apply@test"]);       // "i am obj apply@test"
testApply.call(obj, "call@test");           // "i am obj call@test"
```
使用场景：
```
// 改变this指向

```

## 解决函数上下文的问题

### 另外两种方式
1. 箭头函数
2. bind方法

### 箭头函数
是什么：
- 箭头函数没有单独的this值，箭头函数的this值与函数声明所在的上下文相同。
- 调用箭头函数时候，不会隐式的传入this参数，而是从定义时的函数继承上下文（this）。
- 划重点: 箭头函数this在函数定义的时候确认。

### bind
是什么：
- 函数可以访问bind创建新函数，新函数被绑定到指定的对象上。
```
function test() {
    return this.name;
}
let obj1 = {
    name: 'obj1',
    getName: test
};
obj1.getName();                         //  'obj1'
let getObj1Name = test.bind(obj1);
getObj1Name();                          //  'obj1'
getObj1Name() === obj1.getName();       //  true
```