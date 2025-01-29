const cupons = [
    { title: "Cupom Volta às Aulas", details: "R$8 OFF em compras acima de R$50. Válido até 08/02.", code: "L4P1S3" },
    { title: "Cupom Crianças de Férias", details: "R$10 OFF em compras acima de R$80. Válido até 31/01.", code: "S5MM3R" },
    { title: "Cupom Produtos do Mengão", details: "Promoções direto da loja do Mengão.", code: "WH47S499" },
    { title: "R$20 OFF", details: "R$20 OFF em compras a partir de R$99.", code: "SHOPEE20OFF" },
    { title: "R$50 OFF", details: "R$50 OFF em compras a partir de R$199.", code: "SHOPEE50OFF" },
    { title: "R$125 OFF", details: "R$125 OFF em compras a partir de R$499.", code: "SHOPEE125OFF" },
    { title: "R$200 OFF", details: "R$200 OFF em compras a partir de R$999.", code: "SHOPEE200OFF" },
    { title: "30% Cashback", details: "Use o cupom e ganhe 30% de cashback (limite R$10).", code: "C45HB4CK" },
    { title: "R$5 OFF", details: "R$5 OFF em compras acima de R$20.", code: "WH47S499" },
    { title: "R$10 OFF", details: "R$10 OFF em compras acima de R$50.", code: "K4M3C8" }
];

function loadCupons() {
    const couponList = document.getElementById("coupon-list");

    couponList.innerHTML = `
        <h2 class="text-center mb-4">🚚💨 É o caminhão de CUPONS passando na sua rua!</h2>
        <div class="coupon-container"></div>
    `;

    const container = couponList.querySelector(".coupon-container");

    cupons.forEach(cupom => {
        const couponElement = document.createElement("div");
        couponElement.classList.add("coupon");
        couponElement.innerHTML = `
            <div class="coupon-header">
                <span class="coupon-title">${cupom.title}</span>
                <button class="copy-btn" onclick="copyCoupon('${cupom.code}')">Copiar</button>
            </div>
            <div class="coupon-details">${cupom.details}</div>
            <div class="coupon-code">Código: <strong>${cupom.code}</strong></div>
        `;
        container.appendChild(couponElement);
    });
}

document.addEventListener("DOMContentLoaded", loadCupons);

function copyCoupon(code) {
    navigator.clipboard.writeText(code).then(() => {
        alert(`Cupom ${code} copiado!`);
    }).catch(err => {
        console.error("Erro ao copiar o cupom: ", err);
    });
}
