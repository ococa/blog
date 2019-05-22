# 函数重要的理由
1. 在JavaScript对象可以做到的事情，函数几乎都可以做到，如：赋值，作为参数，作为函数返回值，动态创建，添加属性.....
2. 函数也是对象，特殊之处在于函数可调用（invokable）
3. 回调函数
# 函数作为对象
1. 可以为函数添加属性
2. 存储函数
```
const store = {
    nextId: 1,
    cache: {},
    add: function(fn) {
        // fn.id == undefined
        if(!fn.id) {
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        } else {
            return false;
        }
    }
};

// test
function funcName() {};
store.add(funcName);            // true 第一次可以添加成功
store.add(funcName);            // false 第二次添加失败
```
3. 自记忆函数(memoization)

将计算的记过存储起来，当第二次调用函数参数一致则直接返回计算结果（适用于大量计算等场景）
```
function isPrime(value) {
    // 第一次调用函数，给函数添加属性
    if (!isPrime.memo) {
        isPrime.memo = {};
    }
    // 检查是否有缓存，有的话直接返回
    if (isPrime.memo[value] !== undefined) {
        return isPrime.memo[value];
    }
    let prime = value !== 0 && value !== 1;     // 1 is not a prime
    for (let i = 2; i < value; i++) {
        if (value  % i === 0) {
            prime = false;
            break
        }
    }
    return isPrime.memo[value]  = prime;    // 存储并且返回计算结果prime
}

// test
console.log("5 is prime", isPrime(55))
console.log(isPrime.memo[55], "the 55 was cached")
```
总结：空间换时间
# 函数的定义方式
## 函数定义的四种方式：
1. 函数声明/函数表达式
```
function funcName() {};             // 函数声明
const funcName2 = function() {};    // 函数表达式
```
2. 箭头函数
```
myArgs => myArgs * 2;
```
3. 函数构造函数
```
new Function('a', 'b', 'return a  + b');
```
4. 生成器函数
```
function* myFunc() { yield 1;}
```
## 函数声明和函数表达式
1. 函数声明
```
function funcName() {};  
// function关键字      必要
// functionName       必要
// （）                必要
// {}函数体            必要
```
2. 函数表达式
```
var fn1 = function() {}     // 场景1： 函数表达式作为变量声明赋值语句的一部分
fn1(function () {           // --> 场景2：函数表达式作为#一次#函数调用的参数
    return function() {};   // --> 场景3： 函数表达式作为函数返回值
})
(function func1() {})()     // --> 场景4： 命名函数表达式，作为自执行函数的参数调用
+function () {} ();         
-function () {} ();         
!function () {} ();         
~function () {} ();         // --> 场景5： 函数表达式作为一元操作符立即调用函数的参数
```

## 箭头函数



# 函数的参数
