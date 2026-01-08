// MENU
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
sideMenu.querySelectorAll("a").forEach(a=>{
  a.onclick=()=>sideMenu.style.right="-220px";
});
menuBtn.onclick=()=>{
  sideMenu.style.right = sideMenu.style.right==="0px" ? "-220px":"0px";
};

// FAQ
document.querySelectorAll(".faq-question").forEach(q=>{
  q.onclick=()=>{
    const a=q.nextElementSibling;
    const s=q.querySelector("span");
    const open=a.style.display==="block";
    a.style.display=open?"none":"block";
    s.textContent=open?"➕":"➖";
  };
});

// TYPE
const text="AmytistShop";
const el=document.getElementById("typeText");
let i=0;
(function type(){
  if(i<text.length){ el.textContent+=text[i++]; setTimeout(type,120); }
})();

// SEARCH LIVE
const input=document.getElementById("searchInput");
const clear=document.getElementById("searchClear");
const results=document.getElementById("searchResults");

const products=[
 {name:"Minecraft Bedrock Edition Windows 10/11",img:"Minecraft-bed.png",id:"product-minecraft"},
 {name:"Читы на Grand Mobile",img:"",id:"product-grand"}
];

input.oninput=()=>{
  results.innerHTML="";
  const v=input.value.toLowerCase();
  if(!v){results.style.display="none";return;}
  products.filter(p=>p.name.toLowerCase().includes(v)).forEach(p=>{
    const d=document.createElement("div");
    d.className="search-item";
    d.innerHTML=`${p.img?`<img src="${p.img}">`:""}<span>${p.name}</span>`;
    d.onclick=()=>document.getElementById(p.id).scrollIntoView({behavior:"smooth"});
    results.appendChild(d);
  });
  results.style.display="block";
};

clear.onclick=()=>{input.value="";results.style.display="none";}
