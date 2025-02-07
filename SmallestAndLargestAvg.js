
let minimumAverage = function (nums) {
    let n = nums.length / 2
    nums.sort((a, b) => b - a)
    let avg = Infinity
    let i = 0
    let j = nums.length - 1
    while (i < n) {
        let value = (nums[i] + nums[j]) / 2
        if (value < avg) avg = value
        i++
        j--
    }
    return avg
}

console.log(minimumAverage([7,8,3,4,15,13,4,1]))