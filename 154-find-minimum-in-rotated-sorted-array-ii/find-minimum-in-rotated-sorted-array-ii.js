/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    let result = nums.sort((a,b) => a-b);
    return result[0];

};