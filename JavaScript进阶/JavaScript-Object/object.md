#


1. 什么是原型
2. 什么是原型链
3. 什么是原型对象
4. 对象具有原型
5. 函数具有原型__proto__和原型对象prototype

## 原型

是什么：
- 原型是定义属性和功能的一种便捷方式，对象可以访问原型上的属性和功能
- 每个对象都含有原型的引用，当查找属性时，若对象本身不含有该属性，则会查找原型上是否有该属性
- JavaScript通过__proto__可以访问到一个对象的原型
- 原型组成原型链

为什么:

怎么用：
- 通过原型实现继承
```
function Ninja() {
	this.test = true;
}
Ninja.prototype.getTest = function() { return this.test };
const inst1 = new Ninja();
inst1.getTest();            // true
Ninja.prototype = {
    isTest: function() {
        return !this.test
    }
}

const inst2 = new Ninja();
inst2.isTest();             // false
inst1.isTest();             // inst1.isTest is not a function
inst1.getTest();            // true
```


## 函数的原型对象

## 继承
是什么：继承是一种在新对象上复用现有对象的属性的形式
```
/**
 * 
 */
function Person() {};
Person.prototype.dance = function() {
    
}
function Son() {};
Son.prototype = { dance: Person.prototype.dance };
let son = new Son();
console.log(son instanceof Son)             // true
console.log(son instanceof Person)          // false
console.log(son instanceof Object)          // true
```
```
/**
 * 继承：既要实现方法的复用，又建立的原型链的联系
 */
function Person() {};
Person.prototype.dance = function() {
    
}
function Son() {};
Son.prototype = new Person();
let son = new Son();
console.log(son instanceof Son)             // true
console.log(son instanceof Person)          // true
console.log(son instanceof Object)          // true

// 缺陷 没有办法准确判断son的构造函数
console.log(son.constructor === Son);       // false
console.log(son.constructor === Person);    // true

// 修复缺陷
Object.defineProperty(Son.prototype, 'constructor', {
    enumerable: false,
    value: Son,
    writable: true
});
console.log(son.constructor === Son);       // true
console.log(son.constructor === Person);    // false
```

## es6中的类
是什么: es6中的类是基于原型的模拟类的继承的语法糖
```
class Ninja {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    static compareAge(ninja1, ninja2) {
        return ninja1.age - ninja2.age;
    }
}
/**
 * 上面等价于
 */
function Ninja(name, age) {
    this.name = name;
    this.age = age;
}
Ninja.prototype.getName = function() { return this.age }
Ninja.compareAge = function(ninja1, ninja2) {
    return ninja1.age - ninja2.age;
}
```
es6中的继承
```
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    static getStatic() {
        return true;
    }
}
class Man extends Person {
    constructor(name, age, sex) {
        super(name, age);
        this.sex = sex;
    }
    getSex() {
        return this.sex;
    }
}
const person = new Person('zhang3', '14');
console.log(person instanceof Person);      // true
console.log(person instanceof Man);         // false
console.log(person.getName());              // zhang3
console.log(person.getSex);                 // undefined
console.log(Person.getStatic());            // true

const man = new Man('zhang2', '15', 'man');
console.log(man instanceof Person);      // true
console.log(man instanceof Man);         // true
console.log(man.getName());              // zhang2
console.log(man.getSex());               // man
console.log(Man.getStatic());            // true
```
 