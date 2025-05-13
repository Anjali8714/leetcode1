/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let dupli = [];
    for(i=0 ; i<nums.length;i++){
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
            dupli.push(nums[i]);
        }
    }
return dupli;
};