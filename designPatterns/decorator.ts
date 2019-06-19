// 车辆vehicle 构造函数
function Vehicle(vehicleType?: string): void {
    this.vehicleType = vehicleType || 'car';
    this.model = 'default';
    this.license = '00000-000';
}

// 测试基本的vehicle实例
let vehicleInstance = new Vehicle('car1');

console.log(vehicleInstance);

// 创建一个vehicle实例进行装饰
let truck = new Vehicle('truck');

// 给truck实例进行装饰
truck.setModel = function(model: 'string'): void {
    this.model = model
}

// 测试装饰是否成功
truck.setModel('CAT');

console.log(truck);

// 测试Vehicle构造函数没有被改变
let secondInstance = new Vehicle('car2');
console.log(secondInstance);

/**
 * 装饰器模式 start
 */

interface MacBook {
    /**
     * 收费
     */
    cost: Function
    screenSize: Function
}

// 被装饰对象的构造函数
function MacBook(): void {
    this.cost = function() {
        return 997;
    }
    this.screenSize = function() {
        return 11.6;
    }
}

// Decotator1 第一个装饰器
function Memory(macbook: MacBook) {
    let v = macbook.cost();
    macbook.cost = function() {
        return v + 75;
    }
}

// Decorator2 
function Engraving(macbook: MacBook) {
    let v = macbook.cost();
    macbook.cost = function() {
        return v + 200;
    }
}

// Decorator3
function Insurance(macbook: MacBook) {
    let v = macbook.cost();
    macbook.cost = function() {
        return v + 200;
    }
}

const yourMacBook = new MacBook();

// 使用装饰器
Memory(yourMacBook);
Engraving(yourMacBook);
Insurance(yourMacBook);

// 验证decorator
console.log(yourMacBook.cost());        // 1472
console.log(yourMacBook.screenSize());  // 11.6

// 验证装饰器没有改变构造函数
const myMacBook = new MacBook();
console.log(myMacBook.cost());          // 997
console.log(myMacBook.screenSize());    // 11.6

/**
 * 伪经典装饰器模式 不适合js
 */

// 装饰者模式的情况下
// 缺点：一个属性增加一个装饰者，很难维护


/**
 * 抽象装饰者 TODO 未完待续
 */

interface MacBook2 {
    addEngraving,
    addParallels,
    add4GBRam,
    add8GBRam,
    addCase
}

function MacBookPro () {
    // 
}
MacBookPro.prototype = {
    addEngraving: function() {

    },
    addParallels: function() {

    },
    add4GBRam: function() {

    },
    add8GBRam: function() {

    },
    addCase: function() {

    },
    getPrice: function() {
        // 返回基本价格
        return 900
    }
} 








