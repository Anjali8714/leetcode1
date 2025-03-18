var createCounter = function(init,calls) {
//     let count = init;
//    return {
//     increment:function (){
//         return init += 1;
//     },
//     reset :function (){
//         return init = count;
//     },
//     decrement :function (){
//         return init -= 1;
//     }

//    } 

let count = init;
function increment(){
    return init += 1;
} 
function reset(){
    return init = count;
} 
function decrement(){
    return init -= 1;
} 
return {increment ,reset,decrement}
    
}

console.log(createCounter(5,["increment","reset","decrement"])); //[6,5,4]
