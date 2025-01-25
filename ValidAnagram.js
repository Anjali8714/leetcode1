let isAnagram = function(s, t) {
    let s1 = s.split('').sort().join('')
    let s2 = t.split('').sort().join('')
    return s1 === s2
  }

  console.log(isAnagram("anagram","nagaram"));