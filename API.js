// Função para buscar produtos na API da Shopee
async function fetchShopeeProducts() {
    try {
      // Substitua com suas credenciais da Shopee quando aprovado
      const API_KEY = 'STU4D34T6D84Y12D8TJPQAA';
      const PARTNER_ID = 'kauanlauer'; // ID do parceiro Shopee
      const SHOP_ID = '15s8r3s';    // ID da sua loja Shopee
  
      // Endpoint da API para obter produtos (exemplo)
      const endpoint = 'https://partner.shopeemobile.com/api/v1/items/get';
  
      // Parâmetros para a requisição
      const params = {
        partner_id: PARTNER_ID,
        shopid: SHOP_ID, // ID da loja
        page: 1,
        page_size: 10 // Quantidade de produtos por página
      };
  
      // Monta a URL com os parâmetros para enviar na requisição
      const url = `${endpoint}?${new URLSearchParams(params).toString()}`;
  
      // Fazendo a requisição à API da Shopee usando o método GET
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${API_KEY}`, // Cabeçalho para autorização com a API Key
        }
      });
  
      // Verificando se a resposta foi bem-sucedida
      if (response.ok) {
        const data = await response.json();
        console.log('Produtos recebidos:', data);
        // Aqui você pode chamar outra função para exibir os dados
      } else {
        console.error('Erro ao buscar produtos:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }
  
  // Chama a função quando necessário (por exemplo, ao clicar em um botão ou carregar a página)
  fetchShopeeProducts();
  