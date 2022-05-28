function extractText() {
    let items = Array.from(document.querySelectorAll('#items li'));
    items = items.map(e => e.textContent);
    const result = document.getElementById('result');

    result.innerHTML = items.join('\n');
}