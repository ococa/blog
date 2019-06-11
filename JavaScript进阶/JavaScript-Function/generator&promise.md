# generator&promise

用途： 编写优雅的异步代码

## generator 

调用generator 函数会生成一个迭代器（iterator）对象,迭代器对象具有next接口，可以用来向生成器请求一个值从而控制生成器

### generator的基本使用
```
/**
 * generator basic demo
 */
function* WeapponGenerator() {
    yield 'gun';
    yield 'bang';
    yield 'car';
}

let weappon = WeapponGenerator();   //    生成迭代器对象
console.log(weappon.next());        //    { value: 'gun', done: false }
console.log(weappon.next());        //    { value: 'bang', done: false }
console.log(weappon.next());        //    { value: 'car', done: false }
console.log(weappon.next()); 
```

- generator的嵌套使用

```
/**
 * generator的嵌套使用
 */
function* CarGenerator() {
    yield 'benz';
    yield* ChinaCarGenerator();
    yield 'bmw';
};

function * ChinaCarGenerator() {
    yield 'qq';
    yield 'byd';
};

for (let car of CarGenerator()) {
    console.log('car:', car);
}
```

### generator实例

1. 用generator生成id序列

```
/**
 * 唯一id生成器
 */
function* IdGenerator() {
    let id = 0;
    while (true) {
        yield ++id;
    }
};
// 创建iterator（迭代器）
let idgenerator = IdGenerator();
// 使用
console.log(idgenerator.next().value);      // 1
console.log(idgenerator.next().value);      // 2
console.log(idgenerator.next().value);      // 3
```

2. 使用生成器遍历dom树

### 与generator交互

1. 给generator传参
```
/**
 * 带参数的generator
 * @param {String} name 
 */
function* NinjaGenerator(name) {
    yield name;
}

const name = NinjaGenerator('wangchao');
```
2. 给next接口传参
```

/**
 * 带参数的geenerator demo，next传参demo
 * @param {String} name 
 */
function* NinjaGenerator2(name) {
    const name2 = yield name;
    yield name + "  " + name2;
}

const name2 = NinjaGenerator2('ococa');
console.log(name2.next('name2').value);     // ococa
console.log(name2.next('name3').value);     // ococa  name3
console.log(name2.next('name4').value);     // undefined
```
3. 抛出异常


## promise 

### promise执行顺序

```
/**
 * promise settimeout 顺序
 */

console.log('1 promise.js start');

let delayPromise = new Promise((resolve, reject) => {
    console.log('3 delayPromise function start');
    setTimeout(() => {
        console.log('7 settimeout start');
        resolve('8 resolve1');
    }, 500);
});

console.log('2 after delayPromise function');

delayPromise.then(res => {
    console.log('res', res);
});

const promiseImmediatePromise = new Promise((resolve, reject) => {
    console.log('4 start promiseImmediatePromise');
    resolve('resolve2');
});

promiseImmediatePromise.then(res => {
    console.log('6 res2', res);
});

console.log('5 promise.js end');

/**
 * 1. promise.js start
 * 2. after delayPromise function
 * 3. delayPromise function start
 * 4. start promiseImmediatePromise
 * 5. promise.js end
 * 6. res2 resolve2
 * 7. settimeout start
 * 8. res resolve1
 */
```