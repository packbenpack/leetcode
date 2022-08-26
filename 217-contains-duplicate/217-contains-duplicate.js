/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let prev = {};
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        if (prev[currentNum] === undefined) {
            prev[currentNum] = i
        } else {
            return true
        }
    }
    return false
};