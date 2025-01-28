const products = [
    {
      name: "Kit 3 Garrafa Água Squeeze Galão",
      url: "https://s.shopee.com.br/6Kp8OXmv8S",
      image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m09lmdlyi35558.webp",
      price: "R$24,90 - R$32,90",
    },
    {
      name: "Arma Metralhadora blaster Lança Bolinhas De Gel Elétrica Pistola de gel blaster",
      url: "https://s.shopee.com.br/9ziQmTYd8r",
      image: "https://down-br.img.susercontent.com/file/sg-11134201-7rep0-m2ifqrlq8g2ea8.webp",
      price: "R$86,25",
    },
    {
      name: "Stitch Large Capacity Children's Light mochila meninas luz mochila impermeável computador EOEC",
      url: "https://s.shopee.com.br/1B72GJvRHR",
      image: "https://down-br.img.susercontent.com/file/sg-11134201-7rd74-lw8kc001adera0.webp",
      price: "R$39,90 - R$130,00",
    },
    {
        name: "Fone de Ouvido Sem Fio Airpods PRO 3 Com Cancelamento De Ruído Bluetooth Pop-Up para iOS e Android ",
        url: "https://s.shopee.com.br/AKLHBNVjAM",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-ly54dm79v8zk28.webp",
        price: "R$58,60",
    },
    {
        name: "smartwatch 9 pro Carregamento sem fio relógio inteligente 2.02 inches Série 9 Bluetooth AI Inteligente Esportivo",
        url: "https://s.shopee.com.br/60CI1YuYBN",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lxi39vzn451255.webp",
        price: "R$53,99 - R$84,99",
    },
    {
        name: "Conjuntos Feminino Shorts com Cinto e Blusas Modelo Cropped Modinha Blogueira Festa na Malha Suplex",
        url: "https://s.shopee.com.br/704pDW6kgx",
        image: "https://down-cvs-br.img.susercontent.com/27072bbec4df464c94cc9337f0b56166.webp",
        price: "R$49,80",
    },
    {
        name: "Creatina Black Skull Creatine Turbo 300G Caveira Preta",
        url: "https://s.shopee.com.br/4L442fReam",
        image: "https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-luf0i0swkbc09a.webp",
        price: "R$38,85",
    },
    {
        name: "Xiaomi Redmi 13C Versão Global Original Com Nota Fiscal",
        url: "https://s.shopee.com.br/4fguRJPZpY",
        image: "https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-m0c6s8s0yizk84.webp",
        price: "R$1.340,00 ",
    },
    {
        name: "Lavadora De Alta Pressão Lav1300 Libras Vonder 1.300lbf",
        url: " https://s.shopee.com.br/3foNFY6bRL",
        image: "https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-lw4hc3kvakja2d.webp",
        price: "R$339,90",
    },
    {
        name: "Jogo de Lençol 03 Peças 400 Fios Cama Casal Queen Micropercal Ponto Palito",
        url: "https://s.shopee.com.br/5VG1XzjqJQ",
        image: "https://down-cvs-br.img.susercontent.com/sg-11134201-7rbl7-lmxhpfuo0pwjb4.webp",
        price: "R$32,90"
    },
    {
        name: "Capa case Capinha Iphone Silicone Aveludada Protetora com Logo",
        url: "https://s.shopee.com.br/5AdB9PkIth",
        image: "https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-m4s0qqn4hrup5e.webp",
        price: "R$3,99"
    },
    {
        name: "Kit facas de cozinha/Churrasco Profissional Antiaderente 6 Peças Preto/colorido",
        url: "https://s.shopee.com.br/8zptiVCtr5",
        image: "https://down-cvs-br.img.susercontent.com/sg-11134201-7rd4k-lu5etfkbmlecf4.webp",
        price: "R$16,99"
    },
    {
        name: "Brilho labial claro e hidratante/lábios hidratantes/hidratante/lábios carnudos volumoso/linhas labiais clareadoras/",
        url: "https://s.shopee.com.br/10ncBtxlfZ",
        image: "https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-lyzoj9bhqn1h8c.webp",
        price: "R$25,22"
    },
       {
        name: "Karseell Collagen Tratamento Capilar 500g",
        url: "https://s.shopee.com.br/6fRywLWzJV",
        image: "https://down-cvs-br.img.susercontent.com/br-11134207-7r98o-lwlretvo5a4y41.webp",
        price: "R$23,00"
      },
      {
        name: "Rodo e Vassoura Silicone Limpador de Vidro Piso Com Gancho Secos e Molhados Uso Duplo Limpeza Mágica",
        url: "https://s.shopee.com.br/VrLb3W12r",
        image: "https://down-cvs-br.img.susercontent.com/sg-11134201-7rbmv-lqeq30bn11nu69.webp",
        price: "R$24,80"
    },
      {
        name: "Kit 2 Pares De Chinelo Masculino Chinelo Branco Chinelo Preto Macio Confortável Unisex",
        url: "https://s.shopee.com.br/AA1r6rTbbM",
        image: "https://down-cvs-br.img.susercontent.com/sg-11134201-7ra3o-m538bpnqaoow0e.webp",
        price: "R$13,90"
    },

    {
        name: "Devocional Café com Deus Pai 2025 | Porções Diárias de Transformação | Junior Rostirola",
        url: "https://s.shopee.com.br/7pdxWkceUo",
        image: "https://down-tx-br.img.susercontent.com/br-11134207-7r98o-m06nkrts8n6v52.webp",
        price: "R$65,77"
    },
    {
        name: "Escova Elétrica de Limpeza 5 em 1 Sem Fio Limpador Multiuso Prático Com Mais Duas Cabeças de Escova",
        url: "https://s.shopee.com.br/8pWUihncHy",
        image: "https://down-tx-br.img.susercontent.com/br-11134207-7r98o-m4rxof5a7v411a.webp",
        price: "R$27,89"
    },
    {
        name: "Calça Pantalona Feminina Cintura Alta Com Bolso Tecido Duna",
        url: "https://s.shopee.com.br/1LQTmy4v5H",
        image: "https://down-tx-br.img.susercontent.com/br-11134207-7r98o-lsoi8287u0qj4d.webp",
        price: "R$29,90"
    },    {
        name: "Tênis Feminino Masculino Diker F1 Esportivo Caminhada Academia",
        url: "https://s.shopee.com.br/5fZSx0mP49",
        image: "https://down-tx-br.img.susercontent.com/br-11134207-7qukw-lgv5e9fc3x6e20.webp",
        price: "R$29,99"
    },    {
        name: "50.000 Bolinhas De Gel para Arminha Orbeez de munição lançador 7-8mm",
        url: "https://s.shopee.com.br/3q7olhaATc",
        image: "https://down-tx-br.img.susercontent.com/br-11134207-7r98o-m3tcat9ob0vsd7.webp",
        price: "R$10,99"
    },    {
        name: "Celular IPhone 12 Pro/ 12 Pro Max 128gb",
        url: "https://s.shopee.com.br/9KSlJvLCZF",
        image: "https://down-tx-br.img.susercontent.com/br-11134207-7qukw-lgfi73bb2yiu40.webp",
        price: "R$3.190,00"
    },    {
        name: "Versão Global Xiaomi Nota 5.7 Polegadas 3GB RAM 64GB R0M Qualcomm Snapdragon 801 Android 4.4 13MP 4G smartphone",
        url: "https://s.shopee.com.br/704qXjxhEO",
        image: "https://down-tx-br.img.susercontent.com/cn-11134207-7r98o-lni2qma2g42j05.webp",
        price: "R$159,00"
    },
    {
        name: "Xiaomi Poco F5 5G Global 256GB 12GB Ram Dual Sim",
        url: "https://s.shopee.com.br/4fgvlVCvg9",
        image: "https://down-tx-br.img.susercontent.com/br-11134207-7r98o-m5jzhstynyit9e.webp",
        price: "R$2.650,00"
    },
    {
        name: "Xiaomi Redmi 13 4G Dual Sim 128GB / 6GB RAM Versão Global Original Lacrado + NF",
        url: "https://s.shopee.com.br/7KhgwRjy0A",
        image: "https://down-tx-br.img.susercontent.com/br-11134207-7r98o-m0hf63stcvh9a1.webp",
        price: "R$999,00"
    },
    {
        name: "Smartphone Xiaomi Redmi 14c 256gb/8gb 128gb/4gb GLOBAL ORIGINAL Carregador 33w Tela 6,88",
        url: "https://s.shopee.com.br/VrMnvDZYs",
        image: "https://down-tx-br.img.susercontent.com/br-11134207-7r98o-m2h64ei6p2hi5a.webp",
        price: "R$899,90"
    },
   










];
