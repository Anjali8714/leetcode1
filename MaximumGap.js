const maximumGap = function(nums) {
    
    if(nums.length < 2 ){
        return 0
    }
    nums.sort((a,b) => a-b);
    
    let maxDiff = Math.abs( nums[0] - nums[1] );
    
    for(let i = 1 ; i < nums.length ; i++){
        if(Math.abs(nums[i] - nums[i + 1]) > maxDiff){
            maxDiff = Math.abs(nums[i] - nums[i + 1]);           
        }
    }
     return maxDiff
}

console.log(maximumGap([10]));
