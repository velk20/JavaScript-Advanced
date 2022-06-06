function attachGradientEvents() {
    const result = document.getElementById('result');
    const gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', percent);

    function percent(ev) {
        result.textContent = `${Math.floor(ev.offsetX / ev.target.clientWidth * 100)}%`;
    }
}