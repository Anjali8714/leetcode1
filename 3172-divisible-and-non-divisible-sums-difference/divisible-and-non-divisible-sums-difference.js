/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let val1sum = 0, val2sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % m === 0) {
            val1sum += i;
        } else {
            val2sum += i;
        }
    }
    return val2sum - val1sum;
};