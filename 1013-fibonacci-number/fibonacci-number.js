/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    if(n === 0) return 0;
    if(n === 1) return 1;

    let a = 0 , b = 1 ;

   for(let i =2 ; i<=n ; i++) {
 
    let t = a + b;
    a = b;
    b = t;
}
    return b
};