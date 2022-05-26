function solve(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i+=2) {
        str += arr[i] + ' ';
    }
    console.log(str.trim());
}

function solveWithArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i+=2) {
        newArr[newArr.length]= arr[i];
    }
    console.log(newArr.join());
}

solveWithArray([1, 2, 3, 4, 5]);