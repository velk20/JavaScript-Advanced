function create(words) {
    let content = document.getElementById('content');
    content.addEventListener('click', showTextParagraph);
    for (const word of words) {
        let newDivElement = document.createElement('div');

        let newParagraphElement = document.createElement('p');
        newParagraphElement.textContent = word;
        newParagraphElement.style.display = 'none';

        newDivElement.appendChild(newParagraphElement)
        content.appendChild(newDivElement);

    }

    function showTextParagraph(event) {
        console.log(event);
        event.target.children[0].style.display = 'block';
    }


}