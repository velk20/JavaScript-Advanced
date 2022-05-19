function largest(...par) {
    let nums = par.map(Number);
    let largest = nums.reduce(function (a,b){
        return Math.max(a, b);

    });
    console.log(`The largest number is ${largest}.`)
}

largest(5, -3, 16);