function solve(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i++) {
        let [town, latitude, longitude] = arr[i].split('|').map(e => e.trim()).slice(1, -1);
        let obj = {};
        obj.Town = town;
        obj.Latitude = Number(Number(latitude).toFixed(2));
        obj.Longitude = Number(Number(longitude).toFixed(2));

        result.push(obj);
    }

    return JSON.stringify(result);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
));
;