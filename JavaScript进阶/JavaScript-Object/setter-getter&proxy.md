## 控制对象的访问

### getter&setter

1. 对象的setter和getter
```
/**
 * es5 getter and setter
 */

const ninjaCollection = {
    ninjas: ['Yoshi', 'Kuma', 'Hattori'],
    get firstNinja() {
        console.log('get first ninja');
        return this.ninjas[0]
    },
    set firstNinja(name) {
        console.log('set first ninja');
        this.ninjas[0] = name;
    }
}

console.log(ninjaCollection.firstNinja);    // get first ninja  \n Yoshi
ninjaCollection.firstNinja = 'new Yoshi'    // set first ninja
console.log(ninjaCollection.firstNinja);    // get first ninja  \n new Yoshi
```
缺点：没有办法实现私有变量
2. es6 class setter and getter
```
/**
 * es6 setter and getter
 */
class NinjaCollection6 {
    constructor() {
        this.ninjas = ['Yoshi', 'Kuma', 'Hattori'];  
    }
    get firstNinja() {
        console.log('get first ninja');
        return this.ninjas[0];
    };
    set firstNinja(name) {
        console.log('set first ninja');
        this.ninjas[0] = name;
    };
}

const ninjaCollection6 = new NinjaCollection6();
console.log(ninjaCollection6.firstNinja);    // get first ninja  \n Yoshi
ninjaCollection6.firstNinja = 'new Yoshi'    // set first ninja
console.log(ninjaCollection6.firstNinja);    // get first ninja  \n new Yoshi
```
3. 私有变量getter和setter实现
校验： 在setter中校验
```
/**
 * defineProperty实现私有变量getter和setter
 */
function Ninja() {
    let _skillLevel = 0;
    Object.defineProperty(this, 'skillLevel', {
        get: () => {
            console.log('in getter');
            return _skillLevel;
        },
        set: value => {
            console.log('in setter');
            if (!Number.isInteger(value)) { throw new TypeError('skillLevel should be a number')};
            _skillLevel = value;
        }
    });
};

const ninja = new Ninja();
console.log(ninja._skillLevel);     // undefined
console.log(ninja.skillLevel);      // in getter \n 0
ninja.skillLevel = 101;             // in setter
console.log(ninja.skillLevel);      // in getter \n 101
try {
    ninja.skillLevel = '101'       
} catch (e) {
    console.log(e)
}
```

### proxy

1. api

```
/**
 * target表示要拦截的对象
 * handler表示定制拦截行为的对象
 */
Proxy(target : object, handler : object)
```
2. demo
```
const employer = {
    name: 'komei'
};

/**
 * employer访问代理
 */
const representative = new Proxy(employer, {
    get: (target, key) => {
        console.log('Reading ' + key + ' through a proxy');
        return key in target ? target[key] : 'do not bother employer';
    },
    set: (target, key, value) => {
        console.log('setting ' + key + ' through a proxy');
        target[key] = value;
    }
});

console.log(representative.name);   // Reading name through a proxy \n komei
console.log(representative.age);    // do not bother employer
representative.name = 'new komei';  // setting name through a proxy
console.log(representative.name);   // Reading name through a proxy \n new komei
representative.age = 12;            // setting age through a proxy
console.log(representative.age);    // Reading name through a proxy \n 12
```

3. 代理实例
- 记录日志
- 检测性能
- 自动填充属性
- 实现数组负索引



