// MENU
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.onclick = () => {
  sideMenu.style.right =
    sideMenu.style.right === "0px" ? "-220px" : "0px";
};

// FAQ
document.querySelectorAll(".faq-question").forEach(q => {
  q.onclick = () => {
    const ans = q.nextElementSibling;
    const icon = q.querySelector("span");

    if (ans.style.display === "block") {
      ans.style.display = "none";
      icon.textContent = "➕";
    } else {
      ans.style.display = "block";
      icon.textContent = "➖";
    }
  };
});

// TYPE ANIMATION
const text = "AmytistShop";
const target = document.getElementById("typeText");
let i = 0;

function typeEffect() {
  if (i < text.length) {
    target.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 120);
  }
}

typeEffect();
