// Verifica se o usuário já escolheu "não mostrar novamente"
function checkModalPreference() {
    // Verifica no localStorage se o usuário já optou por não mostrar o modal
    const dontShowAgain = localStorage.getItem('dontShowWelcomeModal');
  
    // Se o usuário optou por não mostrar o modal, não mostramos ele
    if (dontShowAgain === 'true') {
      return; // Não faz nada, o modal não será exibido
    } else {
      // Caso contrário, mostramos o modal
      $('#welcomeModal').modal('show');
    }
  }
  
  // Função para salvar a escolha do usuário
  document.getElementById('dontShowAgain').addEventListener('click', function () {
    // Salva no localStorage a escolha do usuário para não mostrar o modal novamente
    localStorage.setItem('dontShowWelcomeModal', 'true');
    // Fecha o modal após salvar a escolha
    $('#welcomeModal').modal('hide');
  });
  
  // Executa a função ao carregar a página para verificar a escolha
  window.onload = function () {
    checkModalPreference();
  };
  