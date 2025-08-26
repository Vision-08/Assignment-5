// ===== Heart Functionality =====
var heartButtons = document.querySelectorAll(".heart-btn");
var heartCountEl = document.getElementById("heartCount");
var heartCount = 0;

heartButtons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    // toggle ♡ and ❤️
    if (btn.textContent === "♡") {
      btn.textContent = "❤️";
      heartCount++;
    } else {
      btn.textContent = "♡";
      heartCount--;
    }
    heartCountEl.textContent = heartCount;
  });
});

// ===== Coins and Call Functionality =====
var coinCountEl = document.getElementById("coinCount");
var coinCount = parseInt(coinCountEl.textContent);
var callButtons = document.querySelectorAll(".call-btn");
var historyList = document.querySelector(".history-list");

callButtons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    var card = btn.closest(".card");
    var serviceName = card.querySelector(".card-title").textContent;
    var serviceNumber = card.querySelector(".card-number").textContent;

    if (coinCount < 20) {
      alert("Not enough coins! You need at least 20 coins to make a call.");
      return;
    }

    