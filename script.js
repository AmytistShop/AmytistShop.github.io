// TYPE EFFECT
const text = "AmytistShop";
const el = document.getElementById("typeText");
let i = 0;
(function type(){
  if(i<text.length){ el.textContent+=text[i++]; setTimeout(type,120); }
})();

// SEARCH AUTOCOMPLETE
const input = document.getElementById("searchInput");
const clear = document.getElementById("searchClear");
const results = document.getElementById("searchResults");

const products = [
  {
    name: "Minecraft Bedrock Edition Windows 10/11",
    img: "Minecraft-bed.png",
    target: "product-minecraft"
  },
  {
    name: "Читы на Grand Mobile",
    img: "",
    target: "product-grand"
  }
];

input.oninput = () => {
  const val = input.value.toLowerCase();
  results.innerHTML = "";
  if (!val) { results.style.display = "none"; return; }

  products
    .filter(p => p.name.toLowerCase().includes(val))
    .forEach(p => {
      const div = document.createElement("div");
      div.className = "search-item";
      div.innerHTML = `${p.img ? `<img src="${p.img}">` : ""}<span>${p.name}</span>`;
      div.onclick = () => {
        document.getElementById(p.target).scrollIntoView({behavior:"smooth"});
        results.style.display = "none";
      };
      results.appendChild(div);
    });

  results.style.display = "block";
};

clear.onclick = () => {
  input.value = "";
  results.style.display = "none";
};


