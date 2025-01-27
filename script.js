document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const storeList = document.getElementById("store-list");
  const modalImage = document.getElementById("modalImage");
  const termsModal = new bootstrap.Modal(document.getElementById("termsModal"));
  const welcomeModal = document.getElementById("welcomeModal");

  // Função para embaralhar arrays
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Função para carregar produtos
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

  // Função para carregar lojas
  function loadStores() {
    shuffleArray(stores);
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
    new bootstrap.Modal(document.getElementById("imageModal")).show();
  }

  // Função para mostrar notificações
  function showNotification() {
    new Notification('Promoções do Dia', {
      body: 'Confira as novidades do dia! Visite o nosso site para ver os melhores descontos.',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1442px-Shopee_logo.svg.png',
      tag: 'promoções-do-dia',
    });
  }

  // Função para solicitar permissão para notificações
  function requestNotificationPermission() {
    if (Notification.permission === 'granted') {
      scheduleDailyNotifications();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          scheduleDailyNotifications();
        }
      });
    }
  }

  // Função para agendar notificações diárias
  function scheduleDailyNotifications() {
    const now = new Date();
    const targetTime = new Date();
    targetTime.setHours(18, 0, 0, 0);
    if (now > targetTime) targetTime.setDate(targetTime.getDate() + 1);
    const delay = targetTime - now;
    setTimeout(() => {
      showNotification();
      setInterval(showNotification, 24 * 60 * 60 * 1000);
    }, delay);
  }

  // Função para definir o cookie
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  }

  // Função para pegar o valor de um cookie
  function getCookie(name) {
    const nameEq = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEq) == 0) return c.substring(nameEq.length, c.length);
    }
    return "";
  }

  // Função para copiar o cupom
  function copyCoupon(couponCode) {
    const textArea = document.createElement("textarea");
    textArea.value = couponCode;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    alert('Cupom copiado: ' + couponCode);
  }

  // Função para verificar se o usuário já aceitou os termos via cookie
  function checkTermsAcceptance() {
    if (!getCookie('termsAccepted')) {
      termsModal.show();
      document.getElementById('acceptTermsBtn').addEventListener('click', () => {
        setCookie('termsAccepted', 'true', 365);
        requestNotificationPermission();
        termsModal.hide();
      });
    } else {
      requestNotificationPermission();
    }
  }
});