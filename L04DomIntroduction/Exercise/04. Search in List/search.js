function search() {
    let towns = document.getElementsByTagName('li');
    let searchTown = document.getElementById('searchText').value;
    let matches = 0;
    for (const townElement of towns) {

        if (townElement.textContent.includes(searchTown)) {
            townElement.style.fontWeight = 'bold';
            townElement.style.textDecoration = 'underline';
            matches++;
        }
    }

    document.getElementById('result').textContent = `${matches} matches found`;
}
