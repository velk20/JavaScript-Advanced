function sum(n, m) {
    n = Number(n);
    m = Number(m);

    let res = 0;
    for (let i = n; i <= m; i++) {
        res += i;
    }

    console.log(res);

}

sum('1', '5' )
sum('-8', '20')