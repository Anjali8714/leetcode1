function repeatedSubstringPattern(s) {

    const doubled = s+s;
    const trim = doubled.slice(1,doubled.length -1);
    return trim.includes(s)
     
 }

 console.log(repeatedSubstringPattern("abab"))