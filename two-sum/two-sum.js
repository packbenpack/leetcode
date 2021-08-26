/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let desiredNums = {};
    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const desired = target - current
        if (desiredNums[desired] !== undefined) {
            return[desiredNums[desired], i]
            break;
        }
        desiredNums[current] = i
    }
};
