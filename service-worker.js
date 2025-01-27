self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
  
    // Forçar a ativação do Service Worker
    self.skipWaiting();
  });
  
  self.addEventListener('activate', function(event) {
    console.log('Service Worker ativado');
  });
  
  // Configuração para exibir a notificação a cada uma hora
  setInterval(() => {
    self.registration.showNotification('ShopeeShow de Descontos!', {
      body: 'Não perca nossas promoções incríveis, confira agora!',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopee_logo.svg/1442px-Shopee_logo.svg.png',
      tag: 'promoções-diárias',
      requireInteraction: true, // Faz com que o usuário interaja para fechar a notificação
    });
  }, 60 * 60 * 1000); // 1 hora = 60 minutos * 60 segundos * 1000 milissegundos
  
  // Evento de notificação (quando a notificação for clicada)
  self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
      clients.openWindow('https://www.shopee.com.br') // Redireciona o usuário ao clicar na notificação
    );
  });
  