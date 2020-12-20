function clock() {
  let times = new Date();
  let hrs = times.getHours();
  let mins = times.getMinutes();
  let sec = times.getSeconds();
  console.log(sec);
  return `${hrs} : ${mins} : ${sec}`;
}

document.querySelector(".time").textContent = clock();
setInterval(document.querySelector(".time").textContent, 500);
