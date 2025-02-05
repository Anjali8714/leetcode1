function createTargetArray(nums, index){
    let target=[];
    for(let i=0;i<nums.length;i++){
        target.splice(index[i],0,nums[i])
    }
    return target;
}

console.log(createTargetArray([0,4,1,3,2],[0,4,1,3,2]));