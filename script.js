let homeCount = 0;
let guestCount = 0;
let increaseH = document.getElementById("homeCount");
let increaseG = document.getElementById("guestCount");

function calculate(num, team) {
  if (num == 1 && team == "home") {
    homeCount += 1;
    increaseH.textContent = homeCount;
  }
  if (num == 2 && team == "home") {
    homeCount += 2;
    increaseH.textContent = homeCount;
  }
  if (num == 3 && team == "home") {
    homeCount += 3;
    increaseH.textContent = homeCount;
  }
  if (num == 1 && team == "guest") {
    guestCount += 1;
    increaseG.textContent = guestCount;
  }
  if (num == 2 && team == "guest") {
    guestCount += 2;
    increaseG.textContent = guestCount;
  }
  if (num == 3 && team == "guest") {
    guestCount += 3;
    increaseG.textContent = guestCount;
  }
}

function homeAdd1() {
  calculate(1, "home");
}

function homeAdd2() {
  calculate(2, "home");
}

function homeAdd3() {
  calculate(3, "home");
}

function guestAdd1() {
  calculate(1, "guest");
}
function guestAdd2() {
  calculate(2, "guest");
}
function guestAdd3() {
  calculate(3, "guest");
}

function setZero() {
  homeCount = 0;
  guestCount = 0;
  increaseG.textContent = guestCount;
  increaseH.textContent = homeCount;
}
