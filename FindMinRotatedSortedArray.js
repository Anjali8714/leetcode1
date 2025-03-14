var findMin = function(nums) {
    let result = nums.sort((a,b) => a-b);
    return result[0];
}

console.log(findMin([1,3,5]))