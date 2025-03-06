let map = function(arr, fn) {
    let newarray = [];
    for(let i=0 ; i<arr.length;i++){
      newarray[i]= fn(arr[i],i)
    }
    return newarray
}

console.log(map([1,2,3],function plusone(n) { return n + 1; }))