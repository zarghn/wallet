"use strict";

let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"));
if (!loggedUser) {
  window.location.href = "index.html";
}

let balanceA1 = document.querySelector(".balance");
let transactionsAl = document.querySelector(".transactions");

let greenValues = document.querySelectorAll(".green");
let inValue = greenValues[0];
let interestValue = greenValues[1];
let outValue = document.querySelector(".red");

function calcbalance(movements) {
  let balance = movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);
  balanceA1.textContent = `${balance}€`;
}

function calcSummary(movements) {
  let incomes = movements
    .filter(function (mov) {
      return mov > 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);

  let out = movements
    .filter(function (mov) {
      return mov < 0;
    })
    .reduce(function (acc, mov) {
      return acc + mov;
    }, 0);

  let interestRate = 1.2;

  let interest = movements
    .filter(function (mov) {
      return mov > 0;
    })
    .map(function (deposit) {
      return (deposit * interestRate) / 100;
    })
    .reduce(function (acc, int) {
      return acc + int;
    }, 0);

  inValue.textContent = `${incomes}€`;
  outValue.textContent = `${Math.abs(out)}€`;
  interestValue.textContent = `${interest.toFixed(1)}€`;
}

function displayMovements(movements) {
  transactionsAl.innerHTML = "";

  let reversedMovements = movements.slice().reverse();
  let last9Movements = reversedMovements.slice(0, 8);

  last9Movements.forEach(function (mov, i) {
    let type = mov > 0 ? "deposit" : "withdrawal";
    let tagclass = mov > 0 ? "deposit" : "reddd";

    let html = `<div class="row">
          <span class="tag ${tagclass}"> ${i + 1} ${type}</span>
          <span class="amount">${mov}€</span>
        </div>`;
    transactionsAl.insertAdjacentHTML("beforeend", html);
  });
}

calcbalance(loggedUser.movements);
calcSummary(loggedUser.movements);
displayMovements(loggedUser.movements);

let timerFive = document.querySelector(".timer");
let time = 300;
let timerInterval;

function updateTime() {
  let min = Math.floor(time / 60);
  let sec = time % 60;

  let miStr = String(min).padStart(2, "0");
  let secStr = String(sec).padStart(2, "0");

  timerFive.textContent = `${miStr}:${secStr}`;

  if (time === 0) {
    clearInterval(timerInterval);
    sessionStorage.removeItem("loggedUser");
    window.location.href = "index.html";
    return;
  }

  time--;
}

updateTime();
timerInterval = setInterval(updateTime, 1000);

let transactionsToInput = document.querySelector(".transfer-to");
let transferAmountInput = document.querySelector(".transfer-amount");
let transferBtn = document.querySelector(".transfer-btn");

transferBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let receiveruser = transactionsToInput.value.trim();
  let amount = Number(transferAmountInput.value);

  let receiveracc = accounts.find(function (acc) {
    return acc.username === receiveruser;
  });

  let currentbalance = loggedUser.movements.reduce(function (acc, mov) {
    return acc + mov;
  }, 0);

  if (
    amount > 0 &&
    receiveracc &&
    receiveracc.username !== loggedUser.username &&
    amount <= currentbalance
  ) {
    loggedUser.movements.push(-amount);
    sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser));

    calcbalance(loggedUser.movements);
    calcSummary(loggedUser.movements);
    displayMovements(loggedUser.movements);

    transactionsToInput.value = "";
    transferAmountInput.value = "";
  } else {
    alert("sorry! faild Transfer");
  }
});

let loanAmountInput = document.querySelector(".loan-amount");
let loanBtn = document.querySelector(".loan-btn");

loanBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let amount = Number(loanAmountInput.value);

  let approve = loggedUser.movements.some(function (mov) {
    return mov >= amount * 0.1;
  });

  if (amount > 0 && approve) {
    loggedUser.movements.push(amount);
    sessionStorage.setItem("loggedUser", JSON.stringify(loggedUser));

    calcbalance(loggedUser.movements);
    calcSummary(loggedUser.movements);
    displayMovements(loggedUser.movements);

    loanAmountInput.value = "";
  } else {
    alert("sorry! faild loan");
  }
});

let closeUserInput = document.querySelector(".close-user");
let closePinInput = document.querySelector(".close-pin");
let closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let confirmUsername = closeUserInput.value.trim();
  let confirmPassword = closePinInput.value.trim();

  if (
    confirmUsername === loggedUser.username &&
    confirmPassword === loggedUser.password
  ) {
    let accountIndex = accounts.findIndex(function (acc) {
      return acc.username === loggedUser.username;
    });

    accounts.splice(accountIndex, 1);

    sessionStorage.removeItem("loggedUser");
    window.location.href = "index.html";
  } else {
    alert("sorry! User or pass is wrong!");
  }
});
