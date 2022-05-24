function solve(n,k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let currentNum = 0;
        let currentArr = [...arr];
        for (let j = 0; j < arr.length; j++) {
            if (j === k) {
                break;
            }
            currentNum += currentArr.pop();

        }
        arr.push(currentNum);
    }

    return arr;
}

console.log(solve(6, 3));
console.log(solve(8, 2));