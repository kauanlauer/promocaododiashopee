
  // Função para verificar se o usuário optou por não mostrar o modal de boas-vindas
  function checkModalPreference() {
    if (localStorage.getItem('dontShowWelcomeModal') !== 'true') {
      welcomeModal.style.display = 'flex';
    }
  }

  // Função para fechar o modal de boas-vindas
  function closeWelcomeModal() {
    welcomeModal.style.display = 'none';
  }

  // Função para não mostrar o modal de boas-vindas novamente
  function dontShowAgain() {
    localStorage.setItem('dontShowWelcomeModal', 'true');
    closeWelcomeModal();
  }

  // Eventos para os botões do modal de boas-vindas
  document.getElementById('closeModal').addEventListener('click', closeWelcomeModal);
  document.getElementById('closeModalAgain').addEventListener('click', closeWelcomeModal);
  document.getElementById('dontShowAgain').addEventListener('click', dontShowAgain);

  // Carregar os produtos e lojas
  loadProducts();
  loadStores();

  // Verificar e mostrar o modal de termos e boas-vindas
  checkTermsAcceptance();
  checkModalPreference();

