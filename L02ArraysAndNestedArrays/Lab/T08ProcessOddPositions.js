function solve(arr) {
    return arr.filter(function(el, ind){
        return ind % 2 !== 0;
    }).reverse().map(e => e*= 2).join(' ');
}

console.log(solve([10, 15, 20, 25]));
console.log(solve([3, 0, 10, 4, 7, 3]));
