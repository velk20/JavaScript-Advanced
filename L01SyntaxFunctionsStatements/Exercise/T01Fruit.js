function t01Fruit(fruit,weight,price) {
    console.log(`I need $${(price*(weight/1000)).toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruit}.`)
}

t01Fruit('orange', 2500, 1.80);

