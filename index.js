let homePointsEl = document.getElementById("homePoints");
let guestPointsEl = document.getElementById("guestPoints");
let homePoints = 0;
let guestPoints = 0

function homeOnePoint() {
    homePoints += 1;
    homePointsEl.textContent = homePoints;
}

function homeTwoPoints() {
    homePoints += 2;
    homePointsEl.textContent = homePoints;
}

function homeThreePoints() {
    homePoints += 3;
    homePointsEl.textContent = homePoints;
}

function guestOnePoint() {
    guestPoints += 1;
    guestPointsEl.textContent = guestPoints;
}

function guestTwoPoints() {
    guestPoints += 2;
    guestPointsEl.textContent = guestPoints;
}

function guestThreePoints() {
    guestPoints += 3;
    guestPointsEl.textContent = guestPoints;
}

function reset() {
    homePoints = 0;
    guestPoints = 0;
    homePointsEl.textContent = homePoints;
    guestPointsEl.textContent = guestPoints;
}