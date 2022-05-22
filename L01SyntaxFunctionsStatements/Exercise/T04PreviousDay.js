function t04PreviousDay(y, m, d) {
    let date = new Date(`${y}-${m}-${d}`);
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - 1);

    console.log(`${previous.getFullYear()}-${previous.getMonth()+1}-${previous.getDate()}`)

}

t04PreviousDay(2016, 9, 30);
t04PreviousDay(2016, 10, 1);