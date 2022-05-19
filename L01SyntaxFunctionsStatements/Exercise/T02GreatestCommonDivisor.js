function func(x,y) {
    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }

    console.log(x)
}

func(2154, 458);