// TYPE
const text = "AmytistShop";
const el = document.getElementById("typeText");
let i = 0;
(function type(){
  if(i < text.length){
    el.textContent += text[i++];
    setTimeout(type,120);
  }
})();

// MENU
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
menuBtn.onclick = () => {
  sideMenu.style.right = sideMenu.style.right === "0px" ? "-220px" : "0px";
};
document.querySelectorAll(".side-menu a").forEach(a=>{
  a.onclick = ()=> sideMenu.style.right = "-220px";
});

// SEARCH REALTIME
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("input", () => {
  const v = searchInput.value.toLowerCase();
  products.forEach(p => {
    p.style.display = p.dataset.name.toLowerCase().includes(v) ? "block" : "none";
  });
});

// FAQ
document.querySelectorAll(".faq-question").forEach(q=>{
  q.onclick = ()=>{
    const a = q.nextElementSibling;
    const s = q.querySelector("span");
    a.style.display = a.style.display === "block" ? "none" : "block";
    s.textContent = s.textContent === "➕" ? "➖" : "➕";
  };
});
