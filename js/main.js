document.addEventListener("DOMContentLoaded", () => {
  initUploadModal();
  initCatalogPage();
  initDetailPage();
});

function initUploadModal() {
  const modal = document.getElementById("upload-modal");
  if (!modal) {
    return;
  }

  const openButtons = document.querySelectorAll("[data-open-upload]");
  const closeButtons = document.querySelectorAll("[data-close-upload]");
  const storeButtons = modal.querySelectorAll("[data-upload-store]");
  const form = document.getElementById("upload-form");
  let selectedStore = modal.querySelector(".modal-cat.is-active")?.dataset.uploadStore || "bisuteria";

  const openModal = () => {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  };

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  };

  openButtons.forEach((button) => button.addEventListener("click", openModal));
  closeButtons.forEach((button) => button.addEventListener("click", closeModal));

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  storeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedStore = button.dataset.uploadStore;
      storeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    });
  });

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const nameInput = document.getElementById("upload-name");
      const name = nameInput?.value.trim();

      if (!name) {
        return;
      }

      alert(`Producto "${name}" listo para publicar en ${STORE_LABELS[selectedStore] || selectedStore}. (Prototipo)`);
      form.reset();
      closeModal();
    });
  }
}

function initCatalogPage() {
  const store = document.body.dataset.store;
  const grid = document.getElementById("product-grid");
  if (!store || !grid) {
    return;
  }

  const searchInput = document.getElementById("catalog-search");
  const countEl = document.getElementById("catalog-count");
  const emptyEl = document.getElementById("catalog-empty");
  const filterButtons = document.querySelectorAll("#category-filters .filter-chip");
  let activeCategory = "todas";
  let query = "";

  const render = () => {
    const products = getProductsByStore(store).filter((product) => {
      const matchesCategory = activeCategory === "todas" || product.category === activeCategory;
      const matchesQuery = !query || product.name.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });

    grid.innerHTML = products.map(productCardHtml).join("");

    if (countEl) {
      countEl.textContent = `${products.length} producto${products.length === 1 ? "" : "s"}`;
    }

    if (emptyEl) {
      emptyEl.classList.toggle("is-hidden", products.length > 0);
    }
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category || "todas";
      filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      query = searchInput.value.trim().toLowerCase();
      render();
    });
  }

  render();
}

function productCardHtml(product) {
  const badge = product.badge
    ? `<span class="product-badge">${product.badge}</span>`
    : "";

  return `
    <a class="product-card" href="producto.html?id=${encodeURIComponent(product.id)}">
      <div class="product-thumb">
        ${badge}
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <h2 class="product-name">${product.name}</h2>
      <p class="product-price">${formatPrice(product.price)}</p>
    </a>
  `;
}

function initDetailPage() {
  const page = document.getElementById("detail-page");
  if (!page) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const product = getProductById(params.get("id")) || PRODUCTS[0];

  if (!product) {
    return;
  }

  document.title = `${product.name} — Inspiración`;

  const backLink = document.getElementById("detail-back");
  const tag = document.getElementById("detail-tag");
  const eyebrow = document.getElementById("detail-eyebrow");
  const title = document.getElementById("detail-title");
  const price = document.getElementById("detail-price");
  const description = document.getElementById("detail-description");
  const material = document.getElementById("detail-material");
  const stock = document.getElementById("detail-stock");
  const mainImage = document.getElementById("detail-image");
  const thumbs = document.getElementById("detail-thumbs");
  const relatedGrid = document.getElementById("related-grid");
  const qtyValue = document.getElementById("qty-value");
  const qtyMinus = document.getElementById("qty-minus");
  const qtyPlus = document.getElementById("qty-plus");
  const addCart = document.getElementById("btn-add-cart");
  const saveBtn = document.getElementById("btn-save");

  const categoryLabel = CATEGORY_LABELS[product.subcategory || product.category] || product.category;
  const storeLabel = STORE_LABELS[product.store] || product.store;

  if (backLink) {
    backLink.href = product.store === "regalos" ? "regalos.html" : "bisuteria.html";
  }

  if (tag) {
    tag.textContent = categoryLabel;
  }

  if (eyebrow) {
    eyebrow.textContent = `${storeLabel} · ${categoryLabel}`;
  }

  if (title) {
    title.textContent = product.name;
  }

  if (price) {
    price.textContent = formatPrice(product.price);
  }

  if (description) {
    description.textContent = product.description;
  }

  if (material) {
    material.textContent = `Material: ${product.material}`;
  }

  if (stock) {
    stock.textContent = product.stock ? "En stock" : "Agotado";
  }

  const gallery = product.images?.length ? product.images : [product.image];

  const setMainImage = (src) => {
    if (mainImage) {
      mainImage.src = src;
      mainImage.alt = product.name;
    }
  };

  setMainImage(gallery[0]);

  if (thumbs) {
    thumbs.innerHTML = gallery
      .map(
        (src, index) => `
          <button type="button" class="gallery-thumb ${index === 0 ? "is-active" : ""}" data-src="${src}">
            <img src="${src}" alt="">
          </button>
        `
      )
      .join("");

    thumbs.querySelectorAll(".gallery-thumb").forEach((button) => {
      button.addEventListener("click", () => {
        setMainImage(button.dataset.src);
        thumbs.querySelectorAll(".gallery-thumb").forEach((item) => {
          item.classList.toggle("is-active", item === button);
        });
      });
    });
  }

  let quantity = 1;

  const updateQty = () => {
    if (qtyValue) {
      qtyValue.textContent = String(quantity);
    }
  };

  qtyMinus?.addEventListener("click", () => {
    quantity = Math.max(1, quantity - 1);
    updateQty();
  });

  qtyPlus?.addEventListener("click", () => {
    quantity += 1;
    updateQty();
  });

  addCart?.addEventListener("click", () => {
    alert(`Añadido al carrito: ${product.name} × ${quantity} (prototipo)`);
  });

  saveBtn?.addEventListener("click", () => {
    alert(`Producto guardado: ${product.name} (prototipo)`);
  });

  if (relatedGrid) {
    const related = getProductsByStore(product.store)
      .filter((item) => item.id !== product.id)
      .slice(0, 5);

    relatedGrid.innerHTML = related
      .map(
        (item) => `
          <a class="product-card related-card" href="producto.html?id=${encodeURIComponent(item.id)}">
            <div class="product-thumb">
              <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <h2 class="product-name">${item.name}</h2>
            <p class="product-price">${formatPrice(item.price)}</p>
          </a>
        `
      )
      .join("");
  }
}
