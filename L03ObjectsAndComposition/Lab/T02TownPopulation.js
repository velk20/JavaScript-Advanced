function solve(arr) {
    let towns = {};
    for (const arrElement of arr) {
        let [city, population] = arrElement.split(' <-> ');

        population = Number(population)
        if (towns[city] === undefined) {
            towns[city] = population;
        }else towns[city] += population;
    }

    for (const [town, popu] of Object.entries(towns)) {
        console.log(`${town} : ${popu}`)
    }
}

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']

);