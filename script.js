// MENU
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
sideMenu.querySelectorAll("a").forEach(a=>{
  a.onclick=()=>sideMenu.style.right="-220px";
});
menuBtn.onclick=()=>{
  sideMenu.style.right =
    sideMenu.style.right==="0px" ? "-220px":"0px";
};

// FAQ
document.querySelectorAll(".faq-question").forEach(q=>{
  q.onclick=()=>{
    const a=q.nextElementSibling;
    const s=q.querySelector("span");
    a.style.display=a.style.display==="block"?"none":"block";
    s.textContent=a.style.display==="block"?"➖":"➕";
  };
});

// TYPE EFFECT
const text="AmytistShop";
const el=document.getElementById("typeText");
let i=0;
(function type(){
  if(i<text.length){
    el.textContent+=text[i++];
    setTimeout(type,120);
  }
})();

// SEARCH (реалтайм)
const input=document.getElementById("searchInput");
const products=document.querySelectorAll(".product");
input.addEventListener("input",()=>{
  const v=input.value.toLowerCase();
  products.forEach(p=>{
    p.style.display=p.dataset.name.toLowerCase().includes(v)?"block":"none";
  });
});
