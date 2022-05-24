function solve(arr) {
    arr.sort((a, b) => a > b ? 1 : -1);
    return arr.slice(arr.length / 2 | 0);
}

console.log(solve([4, 7, 2, 5]));;