var findDuplicate = function(nums) {
    let seen = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (seen.has(nums[i])) {
            return nums[i]; // Found duplicate
        }
        seen.add(nums[i]);
    }
    return -1;
}

console.log(findDuplicate([1,2,3,4,2]));
