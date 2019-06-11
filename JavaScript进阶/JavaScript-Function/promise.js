/**
 * promise settimeout 顺序
 */

console.log('1 promise.js start');

let delayPromise = new Promise((resolve, reject) => {
    console.log('3 delayPromise function start');
    setTimeout(() => {
        console.log('7 settimeout start');
        resolve('resolve1');
    }, 500);
});

console.log('2 after delayPromise function');

delayPromise.then(res => {
    console.log('8 res', res);
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

function myPromise(name) {
    return new Promise((resolve, reject) => {
        if (name) resolve(name);
        else reject('no name');
    }) 
}

 /**
  * promise.all demo
  */

Promise.all([
    myPromise('name1'),
    myPromise('name2'),
    myPromise('name3')
]).then(result => {
    console.log(result);        // [ 'name1', 'name2', 'name3' ]
})

Promise.race([
    myPromise('name1'),
    myPromise('name2'),
    myPromise('name3')
]).then(result => {
    console.log(result);        // name1
})