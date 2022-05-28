function sumTable() {
    const sum = document.getElementById('sum');

    let elements = Array.from(document.querySelectorAll('tbody tr'));
    elements = elements.slice(1, elements.length - 1).map(e => Number(e.lastElementChild.textContent));
    sum.textContent = elements.reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
}