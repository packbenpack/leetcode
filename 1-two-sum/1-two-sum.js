/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (nums.length === 2) return [0, 1];
    let numHash = {};
    for (let i = 0; i < nums.length; i++) {
        let n = target - nums[i];
        let x = numHash[n];
        if (x !== undefined) return [x, i];
        else numHash[nums[i]] = i;
    }
};