// AUFGABE 191 - leicht - erster Sinn
/**
 * @param {number} n
 * @return {number}
 */
let hammingWeight = function(n) {
    let zahl = 0
    let bin = n.toString(2)
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] == 1) {
            zahl++
        }
    }
    return zahl
};
console.log(hammingWeight(11))