// 车辆vehicle 构造函数
function Vehicle(vehicleType) {
    this.vehicleType = vehicleType || 'car';
    this.model = 'default';
    this.license = '00000-000';
}
// 测试基本的vehicle实例
var vehicleInstance = new Vehicle('car1');
console.log(vehicleInstance);       // Vehicle {vehicleType: "car1", model: "default", license: "00000-000"}
// 创建一个vehicle实例进行装饰
var truck = new Vehicle('truck');
// 给truck实例进行装饰
truck.setModel = function (model) {
    this.model = model;
};
// 测试装饰是否成功
truck.setModel('CAT');
console.log(truck);                 // Vehicle {vehicleType: "truck", model: "CAT", license: "00000-000", setModel: ƒ}
// 测试Vehicle构造函数没有被改变
var secondInstance = new Vehicle('car2');
console.log(secondInstance);        // Vehicle {vehicleType: "car2", model: "default", license: "00000-000"}
