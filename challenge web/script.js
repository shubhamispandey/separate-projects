setInterval(clock, 500);

function clock() {
  let times = new Date();
  let hrs = times.getHours();
  let mins = times.getMinutes();
  let sec = times.getSeconds();
  let en = "AM";

  if (hrs > 12) {
    en = "PM";
    hrs -= 12;
  }
  if (hrs < 10) {
    hrs = `0${hrs}`;
  }
  if (mins < 10) {
    mins = `0${mins}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }

  document.querySelector(".time").textContent = `${hrs}:${mins}:${sec} ${en}`;
}
