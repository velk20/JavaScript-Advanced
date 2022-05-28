function solve() {
    const text = document.getElementById('text').value;
    const format = document.getElementById('naming-convention').value;
    const res = document.getElementById('result');

    let arrayOfWords = text.split(' ');
    arrayOfWords = arrayOfWords.map(w => w.toLowerCase());

    for (let i = 0; i < arrayOfWords.length; i++) {
        arrayOfWords[i] = arrayOfWords[i][0].toUpperCase() + arrayOfWords[i].slice(1);
    }
    console.log(arrayOfWords);

    if (format === 'Camel Case') {
        arrayOfWords[0] = arrayOfWords[0].charAt(0).toLowerCase() + arrayOfWords[0].slice(1);

    } else if (format === 'Pascal Case') {

    } else {
        arrayOfWords = [];
        arrayOfWords.push('Error!');
    }

    res.textContent = arrayOfWords.join('');

}