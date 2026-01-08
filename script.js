const text = "AmytistShop";
const speed = 120;

const target = document.getElementById("typed-text");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    target.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

typeEffect();
