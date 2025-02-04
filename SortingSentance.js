let sortSentence = function(s) {
    let res=[]
    let arr=s.split(' ')
    for(let i=0;i<arr.length;i++){
        let index=arr[i][arr[i].length-1]-1
        res[index]=arr[i].substring(0,arr[i].length-1)
    }
    return res.join(' ')
}

console.log(sortSentence("is2 sentence4 This1 a3"))