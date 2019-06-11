/**
 * generator basic demo
 */
function* WeapponGenerator() {
    yield 'gun';
    yield 'bang';
    yield 'car';
};

let weappon = WeapponGenerator();   //   生成迭代器对象
console.log(weappon.next());        //    { value: 'gun', done: false }
console.log(weappon.next());        //    { value: 'bang', done: false }
console.log(weappon.next());        //    { value: 'car', done: false }
console.log(weappon.next());        //    { value: undefined, done: true }

for (let weappon of WeapponGenerator()) {
    console.log('weappon', weappon)    //     weappon gun weappon bang weappon car 
}

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
// car: benz
// car: qq
// car: byd
// car: bmw

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

/**
 * 带参数的generator
 * @param {String} name 
 */
function* NinjaGenerator(name) {
    yield name;
}

const name = NinjaGenerator('ococa');
console.log(name.next().value);     // ococa
console.log(name.next().value);     // undefined

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




