// AUFGABE 191 - leicht - zweiter Sinn (nicht meiner, ich habe ihn von chatgpt genommen)
/**
 * @param {number} n
 * @return {number}
 */
let hammingWeight = function(n) {
    return n.toString(2).split('1').length-1
};
console.log(hammingWeight(11))
