document.addEventListener("DOMContentLoaded", () => {

  // ================= MENU =================
  const menuBtn = document.getElementById("menuBtn");
  const sideMenu = document.getElementById("sideMenu");
  const menuLinks = sideMenu?.querySelectorAll("a") || [];

  if (menuBtn && sideMenu) {
    menuBtn.onclick = () => {
      sideMenu.style.right =
        sideMenu.style.right === "0px" ? "-220px" : "0px";
    };
  }

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

  if (el) {
    let i = 0;
    el.textContent = "";

    function type() {
      if (i < text.length) {
        el.textContent += text[i];
        i++;
        setTimeout(type, 120);
      }
    }

    type();
  }


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

  if (searchBtn) searchBtn.onclick = runSearch;

  if (searchInput) {
    searchInput.addEventListener("keydown", e => {
      if (e.key === "Enter") runSearch();
    });

    searchInput.addEventListener("input", () => {
      if (clearBtn) {
        clearBtn.style.display = searchInput.value ? "block" : "none";
      }
    });
  }

  if (clearBtn) {
    clearBtn.onclick = () => {
      searchInput.value = "";
      clearBtn.style.display = "none";
      productCards.forEach(card => card.style.display = "block");
    };
  }

});


