/**
 * factory
 * 工厂模式
 * 不要求显示的调用new，创建一个新对象
 */

interface Car {
    vehicleType: string,
    doors?: number,
    state?: string,
    color?: string,
}
/**
 * constructor模式来定义Car类
 */
function Car(options: Car): void {
    const { doors = 4, state = 'brand new', color = 'silver' } = options;
    this.doors = doors;
    this.state = state;
    this.color = color;
}

interface Truck {
    vehicleType: string,
    wheelSize?: string,
    state?: string,
    color?: string,
}

/**
 * consturctor pattern define Truck
 */
function Truck(options: {wheelSize?: string, state?: string, color?: string}): void {
    const { wheelSize = 'large', state = 'used', color = 'blue' } = options;
    this.state = state;
    this.color = color;
    this.wheelSize = wheelSize;
}

/**
 * Factory pattern 
 */
// vehicle工厂
function VehicleFactory() {}

// 定义该工厂factory的原型和试用工具，默认的vehicleClass 是Car
VehicleFactory.prototype.vehicleClass = Car;

// 创建新的vehicl实例的工厂方法
VehicleFactory.prototype.createVehicle = function(options: Car | Truck): Car | Truck {
    if (options.vehicleType === 'car') {
        this.vehicleClass = Car;
    } else {
        this.vehicleClass = Truck;
    }
    return new this.vehicleClass(options);
}

// 创建生成的汽车实例
let carFactory = new VehicleFactory();
let car = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'yellow',
    doors: 6
})

// 检测汽车是由Car建立的
console.log(car instanceof Car);            // true
console.log("-----");                       //  Car  { doors: 6, state: 'brand new', color: 'yellow' }

console.log(car);                       //  Car  { doors: 6, state: 'brand new', color: 'yellow' }
interface AbstractVehicleFactory {
    getVehicle: Function
    registerVehicle: Function
}
/**
 * 抽象工厂模式demo
 * 在具体工厂方法上再封装一层注册方法
 */
const AbstractVehicleFactory: AbstractVehicleFactory = (function() {
    // 存储车辆的类型
    let types = {};

    return {
        getVehicle: function(type: string, customizations: Car | Truck) {
            let Vehicle = types[type];
            if (Vehicle) {
                return new Vehicle(customizations)
            } else {
                return null;
            }
        },
        registerVehicle: function(type: string, Vehicle: Function) {
            let proto = Vehicle.prototype;

            // 只注册实现车辆的类
            if (proto.drive && proto.breakDown) {
                types[type] = Vehicle;
            }
            return AbstractVehicleFactory;
        }
    }
})();

AbstractVehicleFactory.registerVehicle('car', Car);
AbstractVehicleFactory.registerVehicle('truck', Truck);

// 基于抽象车辆类型实例化一个新的car对象
let car2 = AbstractVehicleFactory.getVehicle('car', {
    color: 'lime green',
    state: 'like new'
})
// 实例化一个新的truck对象
let truck = AbstractVehicleFactory.getVehicle('truck', {
    color: 'neon yellow',
    wheelSize: 'medium'
})

console.log(car2)
console.log(truck)