function colorize() {
    let items = Array.from(document.querySelectorAll('table tr'));
    for (let i = 1; i < items.length; i += 2) {
        items[i].style.backgroundColor = 'Teal';
    }
}