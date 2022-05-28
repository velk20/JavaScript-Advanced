function solve(arr) {
    let obj = {}

    for (const el of arr) {
        let [element, price] = el.split(' : ');
        let letter = element[0];

        if (!obj[letter]) {
            obj[letter] = {};
        }

        obj[letter][element] = Number(price);
    }
    const sortByLetter = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (const line of sortByLetter) {
        console.log(line[0]);
        const sortByFullName = Object.entries(line[1]).sort((a, b) => a[0].localeCompare(b[0]));
        sortByFullName.forEach(type => console.log(`  ${type[0]}: ${type[1]}`));
    }
}

solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
);