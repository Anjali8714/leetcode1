const mergeAlternately = (word1 , word2)=>{
    let maxlength = Math.max(word1.length , word2.length);
        let chars = [];
        for(let i = 0 ; i< maxlength ; i++){
            if(word1[i]){
                chars.push(word1[i]);
            }
            if(word2[i]){
                chars.push(word2[i])
            }
        }

    
    return chars.join('');
}


console.log(mergeAlternately("abc","pqr"));
