function solve(arr) {
    let max = arr[0];

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (max <= arr[i]) {
            newArr.push(arr[i]);
            max = arr[i];
        }

    }
    return newArr;


}

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));;