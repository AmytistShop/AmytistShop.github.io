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
    const open = ans.style.display === "block";

    ans.style.display = open ? "none" : "block";
    icon.textContent = open ? "➕" : "➖";
  };
});

// TYPE EFFECT
const text = "AmytistShop";
const el = document.getElementById("typeText");
let i = 0;

function type() {
  if (i < text.length) {
    el.textContent += text[i];
    i++;
    setTimeout(type, 120);
  }
}

type();
