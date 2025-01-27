// Selecionar o container onde os produtos serão exibidos
const productList = document.getElementById("product-list");
const modalImage = document.getElementById("modalImage");

// Função para embaralhar arrays
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Função para carregar os produtos
function loadProducts() {
  shuffleArray(products);

  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

    productElement.innerHTML = `
      <div class="card h-100">
        <img src="${product.image}" class="card-img-top" alt="${product.name}" onclick="viewImage('${product.image}')">
        <div class="card-body text-center">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price}</p>
          <a href="${product.url}" target="_blank" class="btn btn-danger w-100">Comprar na Shopee</a>
        </div>
      </div>
    `;

    productList.appendChild(productElement);
  });
}

// Função para carregar as lojas
function loadStores() {
  shuffleArray(stores);
  const storeList = document.getElementById("store-list");

  stores.forEach((store) => {
    const storeElement = document.createElement("div");
    storeElement.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

    storeElement.innerHTML = `
      <div class="card h-100">
        <img src="${store.image}" class="card-img-top" alt="${store.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${store.name}</h5>
          <a href="${store.url}" target="_blank" class="btn btn-danger w-100">Visitar Loja</a>
        </div>
      </div>
    `;

    storeList.appendChild(storeElement);
  });
}

// Função para visualizar a imagem no modal
function viewImage(imageUrl) {
  modalImage.src = imageUrl;
  const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
  imageModal.show();
}

// Carregar os produtos e lojas ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  loadStores();
});
