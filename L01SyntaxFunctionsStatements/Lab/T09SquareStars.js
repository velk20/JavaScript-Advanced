function stars(input) {
    let res = '';
        for (let i = 0; i < input; i++) {
            res += '* '.repeat(input).concat("\n");
        }
    console.log(res);

}

stars(1);
stars(5);
stars();
stars(7);