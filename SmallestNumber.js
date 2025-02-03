var smallerNumbersThanCurrent = function(nums) {
    let sorted = [...nums].sort((a,b) => a-b);
    return nums.map(num => sorted.indexOf(num))
}

console.log(smallerNumbersThanCurrent([8,1,2,2,3]))