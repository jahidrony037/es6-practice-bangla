// function doubleIT(num) {
//     return num * 2;

// }

// const doubleIT = function(num) {
//     return num * 2;
// }

const doubleIT = num => num * 2;
const add = (x, y) => x + y;
const giveNUm = () => 5;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const result = sum * diff;
    return result;
}
console.log(doubleIT(50));
console.log(add(5, 6));
console.log(giveNUm());
console.log(doMath(6, 5));