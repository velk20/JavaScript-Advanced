function solve(arr) {
    let initNum = 1;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if (command === 'add') {
            newArr.push(initNum);
        } else {
            newArr.pop();
        }

        initNum++;
    }

    if (newArr.length === 0) {
        console.log('Empty')
    }else console.log(newArr.join('\n'));
}

solve(['add',
    'add',
    'add',
    'add']
);

solve(['add',
    'add',
    'remove',
    'add',
    'add']
);