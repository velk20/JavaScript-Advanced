function addItem() {
    let input = document.getElementById('newItemText').value;
    let liElement = document.createElement('li');
    let aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = '[Delete]';
    aElement.addEventListener('click', deleteNote);

    function deleteNote(event) {
        event.target.parentElement.remove();
    }

    liElement.textContent = input;
    liElement.appendChild(aElement);
    document.getElementById('items').appendChild(liElement);
}