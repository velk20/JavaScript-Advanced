function solve(arr) {
    arr.sort((a, b) => a > b ? 1 : -1);
    console.log(arr.shift() + ' ' + arr.shift());
}

solve([30, 15, 50, 5]);