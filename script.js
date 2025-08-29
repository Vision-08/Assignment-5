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

    // Deduct 20 coins
    coinCount -= 20;
    coinCountEl.textContent = coinCount;

    // Show alert
    alert("Calling " + serviceName + " at " + serviceNumber);

    // Get current local time
    var now = new Date();
    var time = now.toLocaleTimeString(); // eg: "3:15:22 PM"

    // Add to call history
    var li = document.createElement("li");
    li.classList.add("history-item");
    li.innerHTML = `
      <div>
        <strong>${serviceName}</strong>
        <p>${serviceNumber}</p>
      </div>
      <span class="time">${time}</span>
    `;
    historyList.appendChild(li);
  });
});

// ===== Clear History Button =====
var clearBtn = document.querySelector(".clear-btn");
clearBtn.addEventListener("click", function() {
  historyList.innerHTML = "";
});

// ===== Copy Button Functionality (Challenge Part) =====
var copyButtons = document.querySelectorAll(".copy-btn");
var copyBtnNav = document.getElementById("copyBtn");
var copyCount = 0;

copyButtons.forEach(function(btn) {
  btn.addEventListener("click", function() {
    var card = btn.closest(".card");
    var serviceNumber = card.querySelector(".card-number").textContent;

    // Copy number to clipboard
    navigator.clipboard.writeText(serviceNumber).then(function() {
      alert("Copied: " + serviceNumber);

      // Increase copy count
      copyCount++;
      copyBtnNav.textContent = copyCount + " Copy";
    });
  });
});


