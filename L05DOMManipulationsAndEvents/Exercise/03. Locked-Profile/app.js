function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll('.profile button'));
    buttons.forEach(e => e.addEventListener('click', showMoreOrLess));

    function showMoreOrLess(event) {
        if (event.target.textContent === 'Show more') {
            showMoreInfo(event);
        } else showLessInfo(event);
    }

    function showMoreInfo(event) {
        const parent = event.target.parentElement;
        if (parent.querySelector('input[value="unlock"]').checked && event.target.textContent === 'Show more') {
            parent.querySelector('div').style.display = 'inline-block'
            event.target.textContent = 'Hide it';
        }

    }

    function showLessInfo(event) {
        const parent = event.target.parentElement;
        if (parent.querySelector('input[value="unlock"]').checked) {
            parent.querySelector('div').style.display = 'none'
            event.target.textContent = 'Show more';
        }

    }

    /* document.getElementById('main').addEventListener('click', onToggle);

    function onToggle(e) {
        const button = e.target;
        //*for the best solution we need to check on what we are clicking on
        if (button.tagName == 'BUTTON') {
            const profile = button.parentElement;
            const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;
            if (isActive) {
                // const info = profile.getElementsByTagName('div')[0];
                //*Syntactic Sugar - better solution
                const info = Array
                    .from(profile.getElementsByTagName('div'))
                    .find(d => d.id.includes('HiddenFields'));

                button.textContent = button.textContent == 'Show more' ? 'Hide it' : 'Show more';
                info.style.display = info.style.display == 'block' ? '' : 'block';
            }
        }
    }*/
}