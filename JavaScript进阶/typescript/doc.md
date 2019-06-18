# typescript 学习

## 环境
node
typescript
## typescript 类型注解
## 常用语法

### 基础类型

1. 布尔：boolean
2. 数字：number
3. 字符串：string
4. 单类型数组：  number[]      ->  [1, 2, 3] 
5. 单类型数组：  Array[number] -> [1, 2, 3] 
6. 元组：  [number, string]          // 元组 由字符串和数字组成的数组
```
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error
```
7. 枚举类型：
```    
enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
let c: Color = Color.Greem; 
let colorName: string = Color[2];
console.log(colorName);     // Green
```
8. 任意值： any
```
let c: any = 4;
```
9. void：
```
```
10. null:

11. undefined:

12. never：
```
function error(message: string): nerver {
  thorw new Errow(message);
}
function fail() {
  return errot('somethind errot');
}
// 无限循环 没有返回 没终点
function inifiniteLoop(): never {
  while(true) {

  }
}
```
13. object类型
```
declare function create(o: object | null): void;
create({props: 0});
create(null);
create(42);
create(false);
```


### 类型断言（类型转换）
```
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;       // <> 断言
let strLength: number = (someValue as string).length;     // as 断言
```

## 接口

1. 接口basic
interface 变量对象 {
  key: type
}
```
interface Hello {
  name: number
}
function printa(hello: Hello): void {
  console.log(hello.name)
}
let obj = {name: 123};
printa(obj);
``` 

2. 可选属性
key?: type
```
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number;} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});

```
3. 只读属性
interface Point {
    readonly x: number;
    readonly y: number;
}
```
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
```
4. 只读数组
```
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!
```
5. 额外的属性检查
[propName: string]: any;
```
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}
```
6. 函数类型
interface 接口类型name {
  (args: type, args2: type): type;     // (参数key：参数类型)： return类型
}
```
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
/**
 * 函数类型的接口描述
 */
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
/**
 * 简单写法
 */

let mySearch2: SearchFunc;
mySearch2 = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}

```
7. 可索引的类型
不太懂。。。。

8. 类类型
```
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;
    constructor(h: number, m: number) { }
}
```
你也可以在接口中描述一个方法，在类里实现它，如同下面的setTime方法一样：
```
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
```

9. 类静态部分与实例部分的区别
当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。

```
// 构造器 静态部分接口
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
// 构造器实例部分接口
interface ClockInterface {
  tick();
}

// 工厂模式
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
      console.log("tick tock");
  }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

```

10. 继承接口
```
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}
// 单个继承
interface Square extends Shape {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;

// 多个继承
interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square2 = <Square>{};
square2.color = "blue";
square2.sideLength = 10;
square2.penWidth = 5.0;
```
11. 混合类型

希望一个对象可以同时具有上面提到的多种类型.

一个例子就是，一个对象可以同时做为函数和对象使用，并带有额外的属性。
```
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
```
12. 接口继承类
当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
```
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {

}

// Error: Property 'state' is missing in type 'Image'.
class Image implements SelectableControl {
    select() { }
}

class Location {

}
```

## class

1. 类

我们在引用任何一个类成员的时候都用了this。 它表示我们访问的是类的成员。

最后一行，我们使用new构造了Greeter类的一个实例。 它会调用之前定义的构造函数，创建一个Greeter类型的新对象，并执行构造函数初始化它。

```
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    returhn 'hello  ' + this.greeting
  }
}
let greeter = new Greeter('world');
```

2. 继承
```
class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
```
3. public, private, protected
- public: 默认
- private: 不能在申明它的类的外部访问
- protected: protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问
```
class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name); // 错误Property 'name' is protected and only accessible within class 'Person' and its subclasses.
```
protected的构造函数
这意味着这个类不能在包含它的类外被实例化，但是能被继承

```
class Person {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
```

4. readonly
```
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // 错误! name 是只读的.
```

5. 参数属性
```
class Animal {
    constructor(private name: string) { }   // 参数name增加属性验证
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
```

6. 存取器
即getter 和 setter
```
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}
```
7. 静态属性
```
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
```

8. 抽象类

抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法

```
abstract class Animal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
```
```
abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log('Department name: ' + this.name);
    }
    abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
    }
    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: Department; // 允许创建一个对抽象类型的引用
department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误: 方法在声明的抽象类中不存在
```
9. 高级技巧
- 构造函数
```
class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());
```
- 把类当做接口使用
```
class Point {
    x: number;
    y: number;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};
```

## 函数
可选参数
默认参数
剩余参数
this
函数重载
```
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
```
用函数重载的方式写
```
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
```

## 泛型

### basic
```
function identity(arg: any): any {
    return arg;
}
```
加强版， 捕获arg类型，赋予t
```
// 定义时泛型
function identity<T>(arg: T): T {
    return arg;
}
// 使用1  传入所有的参数，包含类型参数：
let output = identity<string>("myString");
// 使用2  利用了类型推论 – 即编译器会根据传入的参数自动地帮助我们确定T的类型。推荐
let output = identity("myString");  // type of output will be 'string'
```

### 泛型变量
```
同basic
```

### 泛型类型
```
function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;    //  <T>(arg: T) => T  指的是泛型函数的类型
```
用interface 写泛型函数
```
interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn = identity;
```
或者(推荐)
```
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;

```
### 泛型类
```
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };
```
### 泛型约束
```
interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity(3);  // Error, number doesn't have a .length property
loggingIdentity({length: 10, value: 3});
```
在泛型中使用类型参数
```
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
```
在泛型中使用类类型
```
function create<T>(c: {new(): T; }): T {
    return new c();
}
```

## 类型推断

1. 基础类型
2. 最佳通用类型
3. 上下文类型

## 高级类型

1. 交叉类型 & -> a&b -> a和b的都有
2. 联合类型 | -> a|b -> a或b 或者
校验的时候 --> a|b -> a或b
```
function padLeft(value: string, padding: string | number) {
    // ...
}

let indentedString = padLeft("Hello world", true); // errors during compilation
```
值检查的时候 --> a|b -> a&b
当一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员
```
interface Bird {
    fly();
    layEggs();
}

interface Fish {
    swim();
    layEggs();
}

function getSmallPet(): Fish | Bird {
    // ...
}

let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim();    // errors
```

3. 类型保护和区分类型
类型保护
```
// js 情况
let pet = getSmallPet();

// 每一个成员访问都会报错
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
```
ts对应情况
```
let pet = getSmallPet();

if ((pet as Fish).swim) {
    (pet as Fish).swim();
}
else {
    (pet as Bird).fly();
}
```
上面太繁琐，使用自定义类型保护
```
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

//  'swim' 和 'fly' 调用都没有问题了
// TypeScript不仅知道在 if分支里 pet是 Fish类型； 它还清楚在 else分支里，一定 不是 Fish类型，一定是 Bird类型。
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}

```
- typeof 类型保护
- instanceof 类型保护
- 可以为null的类型
```
let s = "foo";
s = null; // 错误, 'null'不能赋值给'string'
let sn: string | null = "bar";
sn = null; // 可以

sn = undefined; // error, 'undefined'不能赋值给'string | null'
```
```
class C {
    a: number;
    b?: number;
}
let c = new C();
c.a = 12;
c.a = undefined; // error, 'undefined' is not assignable to 'number'
c.b = 13;
c.b = undefined; // ok
c.b = null; // error, 'null' is not assignable to 'number | undefined'
```
- 类型保护和类型断言
如果编译器不能够去除 null或 undefined，你可以使用类型断言手动去除。 语法是添加 !后缀： identifier!从 identifier的类型里去除了 null和 undefined：
```
function broken(name: string | null): string {
  function postfix(epithet: string) {
    return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
  }
  name = name || "Bob";
  return postfix("great");
}

function fixed(name: string | null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + '.  the ' + epithet; // ok
  }
  name = name || "Bob";
  return postfix("great");
}
```
4. 字符串字面量类型

字符串字面量类型允许你指定字符串必须的固定值。 在实际应用中，字符串字面量类型可以与联合类型，类型保护和类型别名很好的配合。 通过结合使用这些特性，你可以实现类似枚举类型的字符串。

```
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === "ease-in") {
            // ...
        }
        else if (easing === "ease-out") {
        }
        else if (easing === "ease-in-out") {
        }
        else {
            // error! should not pass null or undefined.
        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
```
