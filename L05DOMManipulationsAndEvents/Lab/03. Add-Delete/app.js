function addItem() {
    let input = document.getElementById('newItemText').value;
    let liElement = document.createElement('li');
    let aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = '[Delete]';
    liElement.textContent = input + aElement;
    document.getElementById('items').appendChild(liElement);
}