var reverse = function(x) {
    let absRev = Math.abs(x).toString().split("").reverse().join('');
    if(absRev > 2**31){
        return 0
    }
    return absRev * Math.sign(x);
}

console.log(reverse(-123));
