function sameNUmbers(input) {
    let num = input % 10;
    let sum = 0;
    let isSame = true;
    while (input){
        let currentDigit = input % 10;
        sum += currentDigit;
        if (num !== currentDigit) {
           isSame = false;
        }
       input = input/10|0;
    }

    console.log(isSame);
    console.log(sum);

}

console.log(sameNUmbers(222));
console.log(sameNUmbers(12345));
