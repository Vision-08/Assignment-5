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

