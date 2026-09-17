document.addEventListener("DOMContentLoaded", () => {
  const carouselElement = document.getElementById("carouselExampleFade");

  if (carouselElement && window.bootstrap) {
    new bootstrap.Carousel(carouselElement, {
      interval: 4500,
      ride: "carousel",
      pause: "hover",
      wrap: true,
    });
  }

  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  const sections = document.querySelectorAll("main section[id]");

  const setActiveLink = () => {
    const scrollPosition = window.scrollY + 120;
    let currentId = "inicio";

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPosition) {
        currentId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href") || "";
      const isActive = href === `#${currentId}`;
      link.classList.toggle("active", isActive);
    });
  };

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  const searchForm = document.getElementById("catalog-search-form");
  const searchInput = document.getElementById("catalog-search");
  const categoryButtons = document.querySelectorAll("#category-filters .btn-category");
  const subcategoryPanel = document.getElementById("subcategory-filters");
  const subcategoryButtons = document.querySelectorAll("#subcategory-filters .btn-subcategory");
  const productCards = document.querySelectorAll(".product-card");
  const catalogStatus = document.getElementById("catalog-status");
  const catalogEmpty = document.getElementById("catalog-empty");

  let activeCategory = "todas";
  let activeSubcategory = "todas";
  let searchQuery = "";

  const categoryLabels = {
    todas: "todos los productos",
    peluches: "Peluches",
    bolsas: "Bolsas",
    babuchas: "Babuchas",
    telas: "Telas",
    llaveros: "Llaveros",
    dijes: "Dijes",
    cristales: "Cristales",
    perlas: "Perlas",
    pulseras: "Pulseras",
    hilo: "Hilo",
    joyas: "Joyas",
  };

  const subcategoryLabels = {
    todas: "todas las joyas",
    aretes: "Aretes",
    anillos: "Anillos",
    collares: "Collares",
  };

  const updateStatus = (visibleCount) => {
    if (!catalogStatus) {
      return;
    }

    let status = `Mostrando ${categoryLabels[activeCategory] || activeCategory}.`;

    if (activeCategory === "joyas" && activeSubcategory !== "todas") {
      status = `Mostrando Joyas · ${subcategoryLabels[activeSubcategory]}.`;
    }

    if (searchQuery) {
      status = `Resultados para "${searchQuery}" · ${visibleCount} producto(s).`;
    } else {
      status = `${status} ${visibleCount} producto(s).`;
    }

    catalogStatus.textContent = status;
  };

  const filterProducts = () => {
    let visibleCount = 0;

    productCards.forEach((card) => {
      const category = card.dataset.category || "";
      const subcategory = card.dataset.subcategory || "";
      const name = (card.dataset.name || "").toLowerCase();
      const matchesCategory =
        activeCategory === "todas" || category === activeCategory;
      const matchesSubcategory =
        activeCategory !== "joyas" ||
        activeSubcategory === "todas" ||
        subcategory === activeSubcategory;
      const matchesSearch = !searchQuery || name.includes(searchQuery);
      const isVisible = matchesCategory && matchesSubcategory && matchesSearch;

      card.classList.toggle("is-hidden", !isVisible);

      if (isVisible) {
        visibleCount += 1;
      }
    });

    if (catalogEmpty) {
      catalogEmpty.classList.toggle("is-hidden", visibleCount > 0);
    }

    updateStatus(visibleCount);
  };

  const setActiveButton = (buttons, activeValue, attribute) => {
    buttons.forEach((button) => {
      const value = button.getAttribute(attribute);
      button.classList.toggle("is-active", value === activeValue);
    });
  };

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category || "todas";
      activeSubcategory = "todas";
      setActiveButton(categoryButtons, activeCategory, "data-category");
      setActiveButton(subcategoryButtons, "todas", "data-subcategory");

      if (subcategoryPanel) {
        subcategoryPanel.classList.toggle("is-hidden", activeCategory !== "joyas");
      }

      filterProducts();
    });
  });

  subcategoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeSubcategory = button.dataset.subcategory || "todas";
      setActiveButton(subcategoryButtons, activeSubcategory, "data-subcategory");
      filterProducts();
    });
  });

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      searchQuery = searchInput.value.trim().toLowerCase();
      filterProducts();
    });

    searchInput.addEventListener("input", () => {
      searchQuery = searchInput.value.trim().toLowerCase();
      filterProducts();
    });
  }

  filterProducts();
});
