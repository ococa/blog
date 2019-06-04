/**
 * javascript design patterns constructor demo
 * JavaScript 构造器模式demo
 * 简介：即JavaScript构造函数
 */

// class Phone
function Phone(brand, price) {
    this.brand = brand;
    this.price = price;
    this.getPrice = function() {
        return `the price of the ${this.brand} is ${this.price}$`;
    }
}

// usage
const vivo = new Phone('vivo', 1000);       // the price of the vivo is 1000$
const oppo = new Phone('oppo', 2000);       // the price of the oppo is 2000$

console.log(vivo.getPrice());
console.log(oppo.getPrice());

/**
 * Disadvantage: cant reuse functions like getPrice，diffcult for inherit
 * 缺点：不能重用函数（像getPrice），不容易继承
 * 改进：带原型的constructor
 */

// class Car
function Car(brand, price) {
    this.brand = brand;
    this.price = price;
   
}
Phone2.prototype.getPrice = function() {
    return `the price of the ${this.brand} is ${this.price}$`;
}

// usage
const byd = new Car('byd', 100000);       // the price of the byd is 100000$
const bmw = new Car('bmw', 20000);        // the price of the bmw is 20000$

console.log(byd.getPrice());
console.log(bmw.getPrice());