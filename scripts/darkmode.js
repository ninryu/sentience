//// SAVE MODE IN LOCAL PC ////
let mode = localStorage.getItem("mode");

const toggle = document.getElementById("toggle"); // Select toggle button from HTML
const body = document.querySelector("body"); // Select body from HTML

//// CHECK MODE STATUS ////
if (mode == "istrue") {
  localStorage.setItem("mode", "istrue");
  body.classList.add("light");
} else {
  localStorage.setItem("mode", null);
  body.classList.remove("light");
}

//// TOGGLE WITH BUTTON ////
toggle.addEventListener("click", () => {
  mode = localStorage.getItem("mode");
  if (mode != "istrue") { // Fix
    localStorage.setItem("mode", "istrue");
    body.classList.add("light");
  } else {
    localStorage.setItem("mode", null);
    body.classList.remove("light");
  }
});