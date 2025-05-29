// Music Play/Pause Logic
const audio = document.getElementById("audio");
const btn = document.getElementById("playPauseBtn");

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = "⏸";
  } else {
    audio.pause();
    btn.textContent = "▶";
  }
});

// 🎁 Gift Animation Logic
function openGift() {
  const boy = document.querySelector(".boy");
  const girl = document.querySelector(".girl");
  const heartFill = document.querySelector(".heart-fill");
  const chargeText = document.getElementById("chargeText");

 // 👇 Show the heart container
  document.getElementById("loveHeart").style.display = "block";


  // Move characters to center
  boy.classList.add("move");
  girl.classList.add("move");

  // After movement ends, show flower rain
  setTimeout(() => {
    createFlowers();
  }, 3000);

  // Charge the heart (after a little delay)
  setTimeout(() => {
    heartFill.classList.add("charged");
    chargeText.textContent = "100%";
  }, 3200);
}




// Flower Rain Function
function createFlowers() {
  const flowerContainer = document.querySelector(".flowers");

  for (let i = 0; i < 50; i++) {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = (Math.random() * 3 + 3) + "s";
    flowerContainer.appendChild(flower);

    // Remove after animation
    setTimeout(() => flower.remove(), 6000);
  }
}
