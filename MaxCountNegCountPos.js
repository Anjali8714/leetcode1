let maximumCount = function(nums) {
    let negcount = 0 , poscount = 0 ;
    for(i=0;i<nums.length;i++){
        if(nums[i] < 0){
            negcount++
        }
        else if(nums[i]>0) {
            poscount ++
        }
    }
    return Math.max(negcount , poscount)
}

console.log(maximumCount([-2,-1,-1,1,2,3]));
