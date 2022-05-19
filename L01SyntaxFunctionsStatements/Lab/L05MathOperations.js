function oper(a,b,opr){
    let res;
    switch (opr) {
        case '+':
            res = a+b; break;
        case '-':
            res = a-b;
            break;
        case '*':
            res = a * b;break;
        case '/':res = a/b;
            break;
        case '%':
            res = a % b; break
        case '**':
            res = a ** b;
            break;

        default:res = 0; break;
    }

    console.log(res);
}

oper(3, 5.5, '*');


