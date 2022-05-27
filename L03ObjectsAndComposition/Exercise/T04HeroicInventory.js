function solve(arr) {
    let heroes = [];

    for (const arrElement of arr) {
        let hero = {};


        const stringArr = arrElement.split(' / ');
        const name = stringArr[0];
        const level = Number(stringArr[1]);
        const items = stringArr[2] ? stringArr[2].split(', ') : [];


        hero.name = name;
        hero.level = level;
        hero.items = items;

        heroes.push(
            hero
        );
    }

    return JSON.stringify(heroes);

}

console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));;