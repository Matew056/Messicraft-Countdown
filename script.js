document.addEventListener('DOMContentLoaded', (event) => {
    // Fecha de apertura del servidor: 6 de julio a las 18:00 hs
    const targetDate = new Date('2025-01-01T18:00:00').getTime();

    const countdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "¡El servidor ya está abierto!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    };

    const interval = setInterval(countdown, 1000);
    countdown();
});
