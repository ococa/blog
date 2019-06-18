// /**
//  * factory
//  * 工厂模式
//  * 不要求显示的调用new，创建一个新对象
//  */


// /**
//  * constructor模式来定义Car类
//  */
// function Car(options) {
//     const { doors = 4, state = 'brand new', color = 'silver' } = options;
//     this.doors = doors;
//     this.state = state;
//     this.color = color;
// }


// /**
//  * consturctor pattern define Truck
//  */
// function Truck(options) {
//     const { wheelSize = 'large', state = 'used', color = 'blue' } = options;
//     this.state = state;
//     this.color = color;
//     this.wheelSize = wheelSize;
// }

// /**
//  * Factory pattern 
//  */
// // vehicle工厂
// function VehicleFactory() {}

// // 定义该工厂factory的原型和试用工具，默认的vehicleClass 是Car
// VehicleFactory.prototype.vehicleClass = Car;

// // 创建新的vehicl实例的工厂方法
// VehicleFactory.prototype.createVehicle = function(options) {
//     if (options.vehicleType === 'car') {
//         this.vehicleClass = Car;
//     } else {
//         this.vehicleClass = Truck;
//     }
//     return new this.vehicleClass(options);
// }

// // 创建生成的汽车实例
// let carFactory = new VehicleFactory();
// let car = carFactory.createVehicle({
//     vehicleType: 'car',
//     color: 'yellow',
//     doors: 6
// })

// // 检测汽车是由Car建立的
// console.log(car instanceof Car);            // true
// console.log("-----");                       //  Car  { doors: 6, state: 'brand new', color: 'yellow' }

// console.log(car);                       //  Car  { doors: 6, state: 'brand new', color: 'yellow' }