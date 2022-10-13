// https://leetcode.cn/problems/fibonacci-number/


function fib(n) {
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

let fibArray = [0, 1];

function fib2(m) {
    if(m < 2) {
        return fibArray[m];
    }
    for(let i = fibArray.length; i <= m; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }
    // console.log(fibArray);

    return fibArray[m];
}


function testFib(n) {
    console.time('fib2');
    let m = fib2(n)
    console.timeEnd('fib2');
    console.time('fib')
    let x = fib(n)
    console.timeEnd('fib');
    console.log(`n is ${n}, fib2 = ${m}, fib = ${x}`);
}

function main() {
    for(let i = 0; i < 40; i ++) {
        testFib(i);
    }
}

main();