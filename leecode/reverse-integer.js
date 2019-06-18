/**
 * @param {number} x
 * @return {number}
 */

function reverse(x) {
    let length = x.length;
    let test = [];
    let x = x.toString();
    for (let i = 0; i < length; i++) {
        test[i] = x[i]
    }
    return 
}
var reverse = function (x) {
    let number;
    try {
        number = Number.parseInt(x.reverse());
    }
    catch (e) {
        number = 0;
    }
    return number;
};
// todo
