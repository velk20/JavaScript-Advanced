function attachEventsListeners() {
    const buttons = document.querySelectorAll("input[type='button']");
    console.log(buttons);
    Array.from(buttons).forEach(e => e.addEventListener('click', convert));

    const days = document.getElementById('days');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hours');
    const seconds = document.getElementById('seconds');

    function convert(event) {

        if (event.target.id.startsWith('days')) {
            let daysNumber = Number(days.value);
            hours.value = daysNumber * 24;
            minutes.value = daysNumber * 24 * 60;
            seconds.value = daysNumber * 24 * 60 * 60

        } else if (event.target.id.startsWith('minutes')) {
            let minutesNumber = Number(minutes.value);
            hours.value = minutesNumber / 60;
            seconds.value = minutesNumber * 60;
            days.value = minutesNumber / 60 / 24;

        } else if (event.target.id.startsWith('hours')) {
            let hoursNumber = Number(hours.value);
            days.value = hoursNumber / 24;
            minutes.value = hoursNumber * 60;
            seconds.value = hoursNumber * 3600;

        } else if (event.target.id.startsWith('seconds')) {
            let secondsNumber = Number(seconds.value);
            minutes.value = secondsNumber / 60;
            hours.value = secondsNumber / 60 / 60;
            days.value = secondsNumber / 60 / 60 / 24;
        }

    }
}