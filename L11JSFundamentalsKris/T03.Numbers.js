function Numbers(str) {
    let arr = str.split(' ').map(e => Number(e));
    let totoJoker = arr.reduce((sum, n) => sum + n, 0);
    let avg = totoJoker / arr.length;
    let arr2 = arr.filter(e => e > avg);

    arr2.sort((a, b) => b - a);

    if (arr2.length > 5) {
        arr2 = arr2.slice(0, 5);
        console.log(arr2.join(' '));
    } else if (arr2.length === 0) {
        console.log('No');
    } else {
        console.log(arr2.join(' '));
    }
}

Numbers('1');