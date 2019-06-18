/**
 * 扩展构造函数demo
 */

// Car constructor
function Car(settings) {
    let { model = 'no model provided', color = 'no color provided'} = settings;
    this.model = model;
    this.color = color;
}

function Car2(settings) {
    let { model = 'no model provided', color = 'no color provided'} = settings;
    this.model = model;
    this.color = color;
}

// Mixin
const Mixin = function() {};

Mixin.prototype = {
    driveForward: function() {
        console.log('drive forward');
    },
    driveBackward: function() {
        console.log('drive Backward');
    },
    driveSideways: function() {
        console.log('drive Sideways');
    }
}

/**
 * 
 * @param receivingClass 被扩展的对象
 * @param givingClass 提供扩展的对象
 * @param methodNames 指定要扩展的方法名
 */
// 通过一个方法将现有对象扩展到另一个对象上面
function augment(receivingClass, givingClass, ...methodNames) {

    // 只提供特定的方法
    if (methodNames.length > 0) {
        for (let i = 2, len = arguments.length; i < len; i++) {
            const methodName = arguments[i];
            receivingClass.prototype[methodName] = givingClass.prototype[methodName]
        }
    } 
    // 提供所有方法
    else {
        for (let methodName in givingClass.prototype) {
            // 确保接收类不包含同名方法
            if(!receivingClass.hasOwnProperty(methodName)) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        }
    }
}

// 给Car 构造函数增加driveForward 和 driveBackward方法
augment(Car, Mixin, 'driveForward', 'driveBackward');

// 创建一个新car
let myCar = new Car({
    modle: 'tesla',
    color: 'red'
})

// 测试确保新增的方法可用
myCar.driveForward();           // drive forward
myCar.driveBackward();          // drive Backward
// myCar.driveSideways();       // myCar.driveSideways is not a function

// 也可以通过不声明特定方法名的形式，将mixin里所有的方法添加到car上
augment(Car, Mixin);

var mySportCar = new Car({
    model: 'benz',
    color: 'blue'
});

mySportCar.driveForward();      // drive forward
mySportCar.driveBackward();     // drive Backward
mySportCar.driveSideways();     // drive Sideways
