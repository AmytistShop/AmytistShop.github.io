// ================= MENU =================
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const menuLinks = sideMenu.querySelectorAll("a");

menuBtn.onclick = () => {
  sideMenu.style.right =
    sideMenu.style.right === "0px" ? "-220px" : "0px";
};

// закрытие меню при клике
menuLinks.forEach(link => {
  link.onclick = () => {
    sideMenu.style.right = "-220px";
  };
});


// ================= FAQ =================
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


// ================= TYPE EFFECT =================
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


// ================= PRODUCT SEARCH =================
const searchInput = document.getElementById("globalSearch");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearSearch");
const productCards = document.querySelectorAll("#products .card");

function runSearch() {
  const value = searchInput.value.trim().toLowerCase();

  productCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
}

// поиск по кнопке 🔍
searchBtn.onclick = runSearch;

// поиск по Enter
searchInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    runSearch();
  }
});

// показать / скрыть крестик
searchInput.addEventListener("input", () => {
  clearBtn.style.display = searchInput.value ? "block" : "none";
});

// очистка ❌
clearBtn.onclick = () => {
  searchInput.value = "";
  clearBtn.style.display = "none";

  productCards.forEach(card => {
    card.style.display = "block";
  });
};
