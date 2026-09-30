// AUFGABE 2620 - leicht
/**
 * @param {number} n
 * @return {boolean}
 */
let zahl;
var createCounter = function(n) {
    zahl = n-1
    return function() {
        zahl++
        return zahl
    };
};
const counter = createCounter(10)
console.log(counter()) // 10
console.log(counter()) // 11
console.log(counter()) // 12
