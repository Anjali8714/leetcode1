/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let samevalues = [];
    for(i=0;i<nums1.length;i++){
        if(nums2.includes(nums1[i]) && !samevalues.includes(nums1[i])){
            samevalues.push(nums1[i])
        }
    }
    return samevalues
};