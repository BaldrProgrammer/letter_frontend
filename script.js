// AUFGABE 8 - leicht
let isPalindrome = function(x) {
    x = String(x)
    let x_split = x.split('')
    console.log(x_split)
    console.log(x_split.reverse())
    return String(x_split) === String(x_split.reverse())
};

console.log(isPalindrome(123))
