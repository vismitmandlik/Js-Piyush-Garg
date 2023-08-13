const numbers = [1, 2, 3, 4, 5, 6, 7];

let ans = numbers.findIndex((num) => num === 4);
function double(n){
    return n*2;
};

// let newArr = numbers.map(double);
let newArr = numbers.splice(6);

console.log(newArr)
console.log(ans)