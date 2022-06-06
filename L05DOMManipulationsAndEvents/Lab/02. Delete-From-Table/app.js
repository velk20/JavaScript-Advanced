function deleteByEmail() {
    let email = document.querySelector('input[name="email"]').value;
    let allEmails = Array.from(document.querySelector('tbody').children);
    for (const allEmail of allEmails) {
        if (allEmail.children[1].textContent === email) {
            allEmail.remove();

            document.getElementById('result').textContent = "Deleted.";
            return document.querySelector('input[name="email"]').value = '';
        }
    }

    document.getElementById('result').textContent = "Not found.";
    return document.querySelector('input[name="email"]').value = '';

}