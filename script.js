// 25 septembre 2026 à 17h00 heure française (CEST = UTC+2)
const targetDate = new Date('2026-09-25T17:00:00+02:00');

function pad(n) {
    return String(n).padStart(2, '0');
}

function updateTimer() {
    const now = new Date();
    const diff = targetDate - now;

    const elTimer  = document.getElementById('timer');
    const elResume = document.getElementById('resume');

    if (diff <= 0) {
        elResume.innerHTML = '';
        elTimer.innerHTML  = '<span class="ecoule">Le temps est écoulé !</span>';
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours   = Math.floor(totalMinutes / 60);
    const totalDays    = Math.floor(totalHours / 24);
    const totalWeeks   = Math.floor(totalDays / 7);

    // Calcul des mois restants (différence calendaire)
    const nowY  = now.getFullYear(), nowM  = now.getMonth(),  nowD  = now.getDate();
    const tgtY  = 2026,              tgtM  = 8,               tgtD  = 25;
    let totalMonths = (tgtY - nowY) * 12 + (tgtM - nowM);
    if (nowD > tgtD) totalMonths--;

    // Décomposition pour le timer principal
    const days    = totalDays;
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    elResume.innerHTML = `
        <div class="resume-bloc">
            <div class="resume-valeur">${totalMonths}</div>
            <div class="resume-label">Mois</div>
        </div>
        <div class="resume-sep">/</div>
        <div class="resume-bloc">
            <div class="resume-valeur">${totalWeeks}</div>
            <div class="resume-label">Semaines</div>
        </div>
        <div class="resume-sep">/</div>
        <div class="resume-bloc">
            <div class="resume-valeur">${totalDays}</div>
            <div class="resume-label">Jours</div>
        </div>
        <div class="resume-sep">/</div>
        <div class="resume-bloc">
            <div class="resume-valeur">${totalHours}</div>
            <div class="resume-label">Heures</div>
        </div>
    `;

    elTimer.innerHTML = `
        <div class="bloc">
            <div class="valeur">${days}</div>
            <div class="label">Jours</div>
        </div>
        <div class="separateur">:</div>
        <div class="bloc">
            <div class="valeur">${pad(hours)}</div>
            <div class="label">Heures</div>
        </div>
        <div class="separateur">:</div>
        <div class="bloc">
            <div class="valeur">${pad(minutes)}</div>
            <div class="label">Minutes</div>
        </div>
        <div class="separateur">:</div>
        <div class="bloc">
            <div class="valeur">${pad(seconds)}</div>
            <div class="label">Secondes</div>
        </div>
    `;
}

setInterval(updateTimer, 1000);
updateTimer();