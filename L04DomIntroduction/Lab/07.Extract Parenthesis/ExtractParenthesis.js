function extract(content) {
    let text = document.getElementById(content).textContent;
    let pattern = new RegExp('\\((.)+?\\)', 'g');

    const myArr = text.match(pattern);
    return myArr.map(word => word.slice(1, -1)).join('; ');

}