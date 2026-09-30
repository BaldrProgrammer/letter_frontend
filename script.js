// AUFGABE 231 - leicht - zweiter Sinn
/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfTwo = function (n) {
    while (n >= 1) {
        if (n === 1) {
            return true
        }
        n /= 2
    }
    return false
};
console.log(isPowerOfTwo(3))
