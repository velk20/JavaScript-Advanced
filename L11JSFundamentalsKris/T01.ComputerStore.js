function computerStore(price) {
    let sum = 0;

    let type = price[price.length - 1];

    for (let i = 0; i < price.length - 1; i++) {
        if (Number(price[i]) >= 0) {
            sum += Number(price[i]);
        } else {
            console.log('Invalid price!');
        }
    }

    if (sum === 0) {
        console.log('Invalid order!');
    } else {
        let taxes = 0;
        taxes = sum * 0.2;
        let finalPrice = sum + taxes;
        if (type === 'special') {
            finalPrice -= finalPrice * 0.10;
        }
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${sum.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${finalPrice.toFixed(2)}$`)
    }
}

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
computerStore(['regular']);
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]);

