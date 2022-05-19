function area(input) {
    if (typeof (input) === "number") {
        console.log((Math.pow(input, 2) * Math.PI).toFixed(2));
    }else
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)
}

area(5);
area("heelo");
area(true)