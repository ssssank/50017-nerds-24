var link = document.querySelector(".write-us-link");
var popup = document.querySelector(".popup-write-us");
var close = popup.querySelector(".popup-close");
var login = popup.querySelector("[name=name]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  login.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
    }
  }
});
