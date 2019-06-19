// 宝石与石头
/**
 * 题目：
 * 给定字符串J 代表石头中宝石的类型，和字符串 S代表你拥有的石头。 S 中每个字符代表了一种你拥有的石头的类型，
 * 你想知道你拥有的石头中有多少是宝石。J 中的字母不重复，J 和 S中的所有字符都是字母。
 * 字母区分大小写，因此"a"和"A"是不同类型的石头。
 */ 


/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// 石头在宝石中间遍历
var numJewelsInStones = function(oJ, oS) {
    var S = oS.split('');
    var J = oJ.split('');
    let length = 0;
    for(let i = 0, len = S.length; i < len; i++) {
        for(let j = 0, len = J.length; j < len; j++) {
            if (S[i] === J[j]) {
                delete S[i]
                length++;
            } 
        }
    }
    return length;
};

// 宝石在石头中间遍历
var numJewelsInStones = function(oJ, oS) {
    var S = oS.split('');
    var J = oJ.split('');
    let length = 0;
    for(let j = 0, len = J.length; j < len; j++) {
        for(let i = 0, len = S.length; i < len; i++) {
            if (S[i]  === J[j]) {
                length++;
            } 
        }
    }
    return length;
};