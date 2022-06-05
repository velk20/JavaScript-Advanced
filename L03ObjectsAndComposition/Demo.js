let catalog = {
    'Gosho': 123456,
    'Pesho': 43123123,

    //method1 with function expression
    sing: function () {
        console.log("Hello, it's me!");
    },
    //method2 with arrow function
    sing2: () => {
        console.log('Arrow function!');
    },
    //method3 with object method notation
    sing3() {
        console.log('Method notaion');
    },
};

//Iterations
for (const catalogKey in catalog) {
    console.log(`${catalogKey} - ${catalog[catalogKey]}`);
}

const keys = Object.keys(catalog);// return all Keys with array
console.log(keys);

const values = Object.values(catalog); // return all values with array
console.log(values);

const entries = Object.entries(catalog); // return all key-value with array
console.log(entries);

for (const [key, value] of entries) {
    console.log(key, value);
}

let calc = {
    sum: function (a, b) {
        return a + b;
    },
    multiplication(a, b) {
        return a * b;
    },
    subtraction(a, b) {
        return a - b;
    },
    division,
}

function division(a, b) {
    return a / b;
}

console.log(calc.sum(5, 5));
console.log(calc.multiplication(5, 5));
console.log(calc.subtraction(5, 5));
console.log(calc.division(5, 5));
;

