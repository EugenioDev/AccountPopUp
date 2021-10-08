const buttonAccount = document.getElementById("button-account");

const popUp = document.querySelector(".accountMenuTop");

buttonAccount.onclick = function () {
  popUp.classList.toggle('active')
};
