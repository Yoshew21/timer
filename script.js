const targetDate = new Date('2026-09-25T17:00:00+02:00');

function pad(n) {
    return String(n).padStart(2, '0');
}

function updateTimer() {
    const now  = new Date();
    const diff = targetDate - now;
    const el   = document.getElementById('timer');

    if (diff <= 0) {
        el.innerHTML = '<span class="ecoule">🎉 C\'est le jour J !</span>';
        return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    el.innerHTML = `
        <div class="bloc">
            <div class="valeur">${days}</div>
            <div class="label">Jours</div>
        </div>
        <div class="sep">:</div>
        <div class="bloc">
            <div class="valeur">${pad(hours)}</div>
            <div class="label">Heures</div>
        </div>
        <div class="sep">:</div>
        <div class="bloc">
            <div class="valeur">${pad(minutes)}</div>
            <div class="label">Minutes</div>
        </div>
        <div class="sep">:</div>
        <div class="bloc">
            <div class="valeur">${pad(seconds)}</div>
            <div class="label">Secondes</div>
        </div>
    `;
}

setInterval(updateTimer, 1000);
updateTimer();
