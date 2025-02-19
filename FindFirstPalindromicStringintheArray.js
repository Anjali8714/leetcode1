let firstPalindrome = function(words) {
    for (const item of words) {
        let r = item.split("").reverse().join("");
        if (r === item) return item;
    }
    return "";
}

console.log(firstPalindrome(["abc","car","ada","racecar","cool"]));