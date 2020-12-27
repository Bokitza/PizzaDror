let pizza = window.confirm("אתה בטוח שאתה רוצה לקנות פיצה?");

if (pizza === true) {
  let element = document.querySelectorAll("#status");
  element[0].innerText = "אני מבין שאתה רעב";
}
if (pizza === false) {
  let element = document.querySelectorAll("#status");
  element[0].innerText = "אני מבין שאתה לא רעב...";
}

function pay() {
  window.alert("you chose to pay!");
}
