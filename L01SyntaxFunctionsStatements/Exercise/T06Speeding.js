function speed(a,b) {
    let limit = 0;
    switch (b) {
        case 'motorway':
            limit = 130;break;
            case 'interstate':
            limit = 90;break;
        case 'city':
            limit = 50;break;
        case 'residential':
            limit = 20;break;
    }

    if (a <= limit) {
        console.log(`Driving ${a} km/h in a ${limit} zone`)
    }else{
        let status = '';
        let dif = a - limit;
        if (dif <= 20) {
            status = 'speeding';
        }else if (dif <= 40) {
            status = 'excessive speeding';
        }else status = 'reckless driving';
        console.log(`The speed is ${dif} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

speed(40, 'city');