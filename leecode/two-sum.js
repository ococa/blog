// https://leetcode-cn.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 时间复杂度 n^2
 */
const twoSum = function(nums, target) {
    for(let i = 0, len = nums.length; i < len; i ++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

/**
 * 
 */

const twoSum2 = function(nums, target) {
    
}