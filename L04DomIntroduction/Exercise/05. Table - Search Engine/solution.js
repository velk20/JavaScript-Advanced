function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        const searchWord = document.getElementById('searchField').value;
        document.getElementById('searchField').value = '';


        const items = Array.from(document.querySelectorAll('tbody tr'));
        items.map(e => e.classList.remove('select'));

        for (const item of items) {
            if (item.innerHTML.includes(searchWord)) {
                item.className = 'select';
            }
        }


    }
}