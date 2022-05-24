function solve(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i+=2) {
        str += arr[i]+' ';
    }
    console.log(str.trim());
}

solve(['20', '30', '40', '50', '60']);