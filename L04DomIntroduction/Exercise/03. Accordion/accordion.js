function toggle() {
    let btn = document.querySelector('.head span');
    console.log(btn);
    let text = document.querySelector('#extra');
    console.log(text)
    if (btn.textContent === 'More') {
        text.style.display = 'block';
        btn.textContent = 'Less';
    } else if (btn.textContent === 'Less') {
        text.style.display = 'none';
        btn.textContent = 'More';

    }
}