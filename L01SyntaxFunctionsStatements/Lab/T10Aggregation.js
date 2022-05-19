function arrayoper(arr) {
    let sum = arr.reduce(function (a, b) {
        return a + b
    });
    console.log(sum);

    let difSum = arr.reduce((partialSum, a) => partialSum + (1/a), 0);
    console.log(difSum);

    let concat = arr.reduce(function (a,b){
        return `${a}${b}`;
    });
    console.log(concat)
}

arrayoper([1, 2, 3]);
arrayoper([2, 4, 8, 16]);
