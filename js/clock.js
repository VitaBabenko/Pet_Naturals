const clockEl = document.getElementById("clock");
let time = 2 * 60 * 60;

setInterval(updateClock, 1000);

function updateClock() {
  const hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  clockEl.innerHTML = `${hours}:${minutes}:${seconds}`;
  time--;
}
