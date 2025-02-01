var getSum = function(a, b) {   
    let sum = 0;
    
    if (a >= 0) {
        for (let i = 0; i < a; i += 1) {
            sum += 1;
        }
    } else {
        for (let i = a; i < 0; i += 1) {
            sum -= 1;
        }
    }
    
    if (b >= 0) {
        for (let i = 0; i < b; i += 1) {
            sum += 1;
        }
    } else {
        for (let i = b; i < 0; i += 1) {
            sum -= 1;
        }
    }
    
    return sum;
}

console.log(getSum(1,2))