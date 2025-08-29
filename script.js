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


// ===== Hamburger Toggle for Mobile History =====
var hamburger = document.getElementById("hamburger");
var mobileHistory = document.getElementById("mobileHistory");

hamburger.addEventListener("click", function () {
  mobileHistory.classList.toggle("active");
});

// ===== Show More Cards =====
var cardSection = document.getElementById("cardSection");
var showMoreBtn = document.getElementById("showMoreBtn");

function updateCardsVisibility() {
  var cards = cardSection.querySelectorAll(".card");
  cards.forEach((card, index) => {
    if (index < 4) {
      card.style.display = "flex"; // show first 4
    } else {
      card.style.display = "none"; // hide rest
    }
  });
}

updateCardsVisibility();

showMoreBtn.addEventListener("click", function () {
  var cards = cardSection.querySelectorAll(".card");
  cards.forEach(card => (card.style.display = "flex"));
  showMoreBtn.style.display = "none"; // hide button after showing all
});
