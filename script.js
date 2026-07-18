"use strict";

let inputLoginPassword = document.querySelector(".passwordin");
let inputLoginUsername = document.querySelector(".usernamein");
let btnLogin = document.querySelector(".login-btn");

btnLogin.addEventListener("click", function (X) {
  X.preventDefault();

  let usenameValue = inputLoginUsername.value.trim();
  let passwordValue = inputLoginPassword.value.trim();
  if (usenameValue === "" || passwordValue === "") {
    alert("YOU MUST ENTER USER AND PASS!!!");
    return;
  }
  let account = accounts.find(
    (acc) => acc.username == usenameValue && acc.password == passwordValue,
  );
  if (account) {
    sessionStorage.setItem("loggedUser", JSON.stringify(account));
    window.location.href = "main.html";
  } else {
    alert("IT'S WRONG DUDE!");
  }
});
