/**
 * mixin 模式预备知识
 */

/**
 * 子类化demo
 */

// 父类 Person
const Person = function(firstName: string, lastName: string): void {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = 'male';
}
// superHero类继承了person类的一部分属性
const SuperHero = function(firstName: string, lastName: string, powers: string[]): void {
    // 调用超类的构造函数，//  call的第二个参数是string，apply是数组
    Person.call(this, firstName, lastName);
    // 保存powers
    this.powers = powers;
}

SuperHero.prototype = Object.create(Person.prototype);

let superman = new SuperHero('Clark', 'Kent', ['flight', 'heat-vision']);
console.log(superman);

/**
 * Mixin demo start
 * 混入模式demo
 */

const myMixins = {
    moveUp: function() {
        console.log('move up');
    },
    moveDown: function() {
        console.log('move down');
    },
    stop: function() {
        console.log('stop! in then name of love')
    }
}

// 将被扩充的构造函数1
function CarAnimator() {
    this.moveLeft= function() {
        console.log('move left')
    }
}

// 将被扩充的构造函数2
function PersonAnimator() {
    this.moveRight= function() {
        console.log('move right')
    }
}

// 使用underscore的extends 来将myMixins扩展到两个构造函数
_.extend(CarAnimator, myMixins);
_.extend(PersonAnimator, myMixins);

let myAnimation = new CarAnimator();
myAnimation.moveLeft();
myAnimation.moveDown();
myAnimation.stop();

