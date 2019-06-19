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