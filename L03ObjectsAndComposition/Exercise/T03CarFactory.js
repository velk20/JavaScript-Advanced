function solve(car) {
    let obj = {};
    let engines = [{power: 90, volume: 1800}, {power: 120, volume: 2400}, {power: 200, volume: 3500}];
    let carriage = [{ type: 'hatchback', color: car.color },{ type: 'coupe', color: car.color }]

    obj.model = car.model;
    obj.engine = engines.filter(e => e.power >= car.power)[0];
    obj.carriage = carriage.filter(e => e.type === car.carriage)[0];

    if (car.wheelsize % 2 === 0) {
        car.wheelsize -= 1;
    }
    obj.wheels = [car.wheelsize,car.wheelsize,car.wheelsize,car.wheelsize];

    return obj
}



console.log(solve({
        model: 'Opel Vectra',
        power: 110,
        color: 'grey',
        carriage: 'coupe',
        wheelsize: 17
    }
));;