/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count =0 ;
    let per;
    for(let i = 0 ; i<s.length;i++){
        if(s[i] === letter){
            count++;
        }
    per = (count/s.length)*100;
    }
    return Math.floor(per)
};