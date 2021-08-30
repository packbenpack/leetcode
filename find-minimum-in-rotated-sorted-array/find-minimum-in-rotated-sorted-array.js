/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    let lowest = nums[0]
    let slicer = (arr) => {
        if (arr.length === 0) {
            return
        }
        if (arr[0] < lowest) {
            lowest = arr[0]
            return
        }
        slicer(arr.slice(1))
    }
    slicer(nums.slice(1))
    return lowest
};