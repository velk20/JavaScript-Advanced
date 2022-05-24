function solve(arr) {
    let max = 0;
    for (let i = 0; i <arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (max <= arr[i][j]) {
                max = arr[i][j];
            }

        }
    }
    return max;
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
));