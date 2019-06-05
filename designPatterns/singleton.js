/**
 * singleton pattern
 * 类的实例只有一个，全局访问的都是同一个类的实例
 */

const mySingleton = (function() {
    let instance;

    // singletong 单例
    function init() {    
        // private funcitons and attributes
        let privateVariable = 'private variable';
        let privateRandomNumber = Math.random();
        function privateFn() {
            console.log('i am private function')
        }
        return {
            publicMethod: function() {
                console.log('the public can see me!')
            },
            publicProperty: 'i am also public',
            publicGetRandomNumber: function() {
                return privateRandomNumber;
            }
        }
    }
    return {
        getInstance: function() {
            // 首次调用，instance === null， init()赋值给instance
            if (!instance) {
                instance = init();
                return instance;
            } else {
                return instance;
            }
        }
    }
})();

let singletonA = mySingleton.getInstance();
let singletonB = mySingleton.getInstance();
console.log(singletonA.publicGetRandomNumber() === singletonA.publicGetRandomNumber());      // true