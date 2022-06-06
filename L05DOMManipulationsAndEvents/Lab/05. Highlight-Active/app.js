function focused() {
    let fields = Array.from(document.querySelectorAll('div input'));
    fields.forEach(e => e.addEventListener('blur', blur));

    fields.forEach(e => e.addEventListener('focus', func));

    function func(event) {
        event.target.parentElement.classList = 'focused';

    }

    function blur(event) {
        event.target.parentElement.classList = '';

    }
}