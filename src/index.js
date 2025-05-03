/**
 * Função para validar a bandeira de um cartão de crédito.
 * @param {string} cardNumber - Número do cartão de crédito.
 * @returns {string} - Retorna a bandeira do cartão ou "Desconhecida" se não for identificada.
 */
function validarBandeira(cardNumber) {
    const bandeiras = [
        { nome: "Visa", regex: /^4[0-9]{12}(?:[0-9]{3})?$/ },
        { nome: "MasterCard", regex: /^5[1-5][0-9]{14}$/ },
        { nome: "American Express", regex: /^3[47][0-9]{13}$/ },
        { nome: "Elo", regex: /^((636368)|(438935)|(504175)|(451416)|(636297)|(5067)|(4576)|(4011))\d+$/ },
        { nome: "Hipercard", regex: /^(606282|3841)\d+$/ },
        { nome: "Diners Club", regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/ },
        { nome: "Discover", regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/ },
        { nome: "Aura", regex: /^50[0-9]{14,17}$/ },
        { nome: "JCB", regex: /^(?:2131|1800|35\d{3})\d{11}$/ },
        { nome: "UnionPay", regex: /^(62|88)\d+$/ }
    ];

    for (const bandeira of bandeiras) {
        if (bandeira.regex.test(cardNumber)) {
            return bandeira.nome;
        }
    }

    return "Desconhecida";
}

// Exemplo de uso:
const numeroCartao = "347591571158278"; // Número fictício
const bandeira = validarBandeira(numeroCartao);

const frasesComerciais = {
    "Visa": "Onde você quer estar.",
    "MasterCard": "Existem coisas que o dinheiro não compra. Para todas as outras, existe MasterCard.",
    "American Express": "Não saia de casa sem ele.",
    "Elo": "O cartão que é a cara do Brasil.",
    "Hipercard": "Simples assim.",
    "Diners Club": "Seu passaporte para o mundo.",
    "Discover": "É bom descobrir.",
    "Aura": "Conectando você ao mundo.",
    "JCB": "O cartão para explorar o mundo.",
    "UnionPay": "Sua forma de pagar globalmente."
};

const frase = frasesComerciais[bandeira] || "Bandeira desconhecida. Nenhuma frase disponível.";
console.log(`${bandeira}: ${frase}`);