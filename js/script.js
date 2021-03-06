var link = document.querySelector(".write-us-link");
var popup = document.querySelector(".popup-write-us");
var close = popup.querySelector(".popup-close");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=email-text]");
var form = document.querySelector(".write-us-form");

var isStorageSupport = true;
var storageLogin = "";
var storageEmail = "";

try {
  storageLogin = localStorage.getItem("login");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  if (storageLogin) {
    login.value = storageLogin;
    email.value = storageEmail;
    text.focus();
  } else {
    login.focus();
  }
});

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  login.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("popup-error");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
      popup.classList.remove("popup-error");
    }
  }
});

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (!login.value || !email.value || !text.value) {

    popup.classList.remove("popup-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
      localStorage.setItem("email", email.value);
    }
  }
});
