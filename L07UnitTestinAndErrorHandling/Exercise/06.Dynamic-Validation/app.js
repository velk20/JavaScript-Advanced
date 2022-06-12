function validate() {
  let currentEmail = document.getElementById('email');
  let pattern = new RegExp('^[a-z]+@[a-z]+.[a-z]+');

  currentEmail.addEventListener('change', () => {
    if (pattern.test(currentEmail.value)) {
      currentEmail.classList.remove('error');
    } else currentEmail.classList.add('error');
  });
}
