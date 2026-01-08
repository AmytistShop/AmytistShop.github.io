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
    ans.style.display = ans.style.display === "block" ? "none" : "block";
    icon.textContent = ans.style.display === "block" ? "➖" : "➕";
  };
});

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

// SEARCH
const products = [
  {name:"Minecraft Bedrock Edition", img:"Minecraft-bed.png", id:"minecraft"},
  {name:"Читы на Grand Mobile", img:"Minecraft-bed.png", id:"grand"}
];

const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");
const results = document.getElementById("searchResults");

btn.onclick = () => {
  results.innerHTML = "";
  const val = input.value.toLowerCase();
  const found = products.filter(p => p.name.toLowerCase().includes(val));

  if (!val || !found.length) {
    results.style.display = "none";
    return;
  }

  found.forEach(p => {
    const div = document.createElement("div");
    div.className = "search-item";
    div.innerHTML = `<img src="${p.img}"><span>${p.name}</span>`;
    div.onclick = () => {
      document.getElementById(p.id).scrollIntoView({behavior:"smooth"});
      results.style.display = "none";
    };
    results.appendChild(div);
  });

  results.style.display = "block";
};


