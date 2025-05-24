/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let val  = a < b ? a : b;
    let count =0;
    for(i = 1 ; i<=val ; i++){
        if(a % i == 0 && b % i == 0){
            count++;
        }
    }
   return count
};