let filter = function(arr, fn) {
    let fil = [];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            fil.push(arr[i]);
        }
    }
    return fil
}

console.log(filter([0,10,20,30],function greaterThan10(n) { return n > 10; }))