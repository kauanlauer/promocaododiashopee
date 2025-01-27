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

document.addEventListener("DOMContentLoaded", function () {
  // Verifica se o usuário já aceitou os termos via cookie
  if (!getCookie('termsAccepted')) {
    const termsModal = new bootstrap.Modal(document.getElementById("termsModal"));
    termsModal.show();

    // Se o usuário aceitar os termos
    document.getElementById('acceptTermsBtn').addEventListener('click', function () {
      setCookie('termsAccepted', 'true', 365); // Marca que os termos foram aceitos e armazena o cookie por 365 dias
      requestNotificationPermission(); // Solicita permissão para notificações
      termsModal.hide(); // Fecha o modal
    });
  } else {
    // Caso os termos já tenham sido aceitos, tenta pedir permissão para notificações
    requestNotificationPermission();
  }

  // Função para solicitar permissão para notificações
  function requestNotificationPermission() {
    if (Notification.permission === 'granted') {
      // Se a permissão foi concedida, agende a notificação diária
      scheduleDailyNotifications();
    } else if (Notification.permission !== 'denied') {
      // Solicita permissão para notificações se ainda não foi negada
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          // Agende a notificação diária
          scheduleDailyNotifications();
        }
      });
    }
  }

  // Função para agendar notificações diárias
function scheduleDailyNotifications() {
  const now = new Date();
  const targetTime = new Date();
  targetTime.setHours(18, 15, 0, 0); // Define o horário para 18:15

  if (now > targetTime) {
    targetTime.setDate(targetTime.getDate() + 1); // Se já passou das 18:15, agenda para o próximo dia
  }

  const delay = targetTime - now; // Calcula o tempo até as 18:15 do próximo dia

  setTimeout(() => {
    showNotification();
    // Configura a repetição diária da notificação
    setInterval(showNotification, 24 * 60 * 60 * 1000); // 24 horas
  }, delay);
}

// Função para mostrar a notificação
function showNotification() {
  if (Notification.permission === "granted") {
    new Notification('Promoções do Dia', {
      body: 'Confira as novidades do dia! Visite o nosso site para ver os melhores descontos.',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1442px-Shopee_logo.svg.png',
      tag: 'promoções-do-dia',
    });
  } else {
    console.log("Permissão de notificação não concedida.");
  }
}

// Função para solicitar permissão para notificações
function requestNotificationPermission() {
  if (Notification.permission === 'granted') {
    scheduleDailyNotifications(); // Já pode agendar as notificações
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        scheduleDailyNotifications(); // Agendar as notificações quando a permissão for concedida
      }
    });
  }
}

// Solicitar permissão para notificações quando a página for carregada
document.addEventListener("DOMContentLoaded", function() {
  requestNotificationPermission(); // Solicita a permissão para notificações
});

// Função para definir o cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Define o prazo para o cookie
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
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
  const textToCopy = couponCode;
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert('Cupom copiado: ' + couponCode);
}
// Função para copiar o cupom
});