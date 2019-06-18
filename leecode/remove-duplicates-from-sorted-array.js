/**
 * @param {number[]} nums
 * @return {number} 新数组长度
 */
var removeDuplicates = function(nums) {
    let newNums = [];
    nums.forEach((currentValue, index, nums) => {
        if (currentValue === nums[index - 1]) {
            nums.splice(index, 1);
        } else {
            return
        }
    })
    return nums;
};

let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums))