// MENU
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.onclick = () => {
  sideMenu.style.right = sideMenu.style.right === "0px" ? "-220px" : "0px";
};

document.querySelectorAll(".side-menu a").forEach(link => {
  link.onclick = () => sideMenu.style.right = "-220px";
});

// FAQ
document.querySelectorAll(".faq-question").forEach(q => {
  q.onclick = () => {
    const a = q.nextElementSibling;
    a.style.display = a.style.display === "block" ? "none" : "block";
  };
});

// TYPE EFFECT
const text = "AmytistShop";
let i = 0;
const el = document.getElementById("typeText");

function type() {
  if (i < text.length) {
    el.textContent += text[i++];
    setTimeout(type, 120);
  }
}
type();
