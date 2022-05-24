function solve(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num < 0) {
            newArr.unshift(num);
        }else newArr.push(num);

    }

    newArr.forEach(e=>console.log(e));
}

solve([7, -2, 8, 9]);