// Selecionar o container onde os produtos serão exibidos
const productList = document.getElementById("product-list");
const modalImage = document.getElementById("modalImage");

// Função para carregar os produtos
function loadProducts() {
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

// Função para visualizar a imagem em um modal
function viewImage(imageUrl) {
  modalImage.src = imageUrl;
  const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));
  imageModal.show();
}

// Carregar os produtos ao carregar a página
document.addEventListener("DOMContentLoaded", loadProducts);
