/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0 ;
    for(i=1;i<=num;i++){
        const sum = i.toString().split('').reduce((acc,digit) => acc +Number(digit),0);
        if(sum % 2 === 0){
            count++
        }
    }
    return count
};