/**
 * closure imitation class implements private variables
 * 闭包模拟实现类的私有变量
 */
function PrivateVar() {
    let innerNum = 0;
    this.getNum = function() {
        return innerNum;
    }
}
let inst1 = new PrivateVar();
inst1.getNum();                 // 0