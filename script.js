// TYPE EFFECT
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
  sideMenu.style.right =
    sideMenu.style.right === "0px" ? "-220px" : "0px";
};

document.querySelectorAll("#sideMenu a").forEach(link=>{
  link.onclick = () => sideMenu.style.right = "-220px";
});

// FAQ
document.querySelectorAll(".faq-question").forEach(q=>{
  q.onclick = ()=>{
    const a = q.nextElementSibling;
    const s = q.querySelector("span");
    const open = a.style.display === "block";
    a.style.display = open ? "none" : "block";
    s.textContent = open ? "➕" : "➖";
  };
});

// SEARCH realtime
const input = document.getElementById("searchInput");
const results = document.getElementById("searchResults");
const products = document.querySelectorAll(".product");

input.addEventListener("input", ()=>{
  const v = input.value.toLowerCase();
  results.innerHTML = "";
  if(!v){ results.style.display="none"; return; }

  products.forEach(p=>{
    if(p.dataset.name.toLowerCase().includes(v)){
      const d = document.createElement("div");
      d.className = "search-item";
      d.textContent = p.dataset.name;
      d.onclick = ()=> p.scrollIntoView({behavior:"smooth"});
      results.appendChild(d);
    }
  });

  results.style.display = results.children.length ? "block" : "none";
});


