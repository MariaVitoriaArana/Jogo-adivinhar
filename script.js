let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let pontos = 1000;

function jogar() {
    let input = document.getElementById("chute");
    let mensagem = document.getElementById("mensagem");

    let chute = parseInt(input.value);

    if (!chute || chute < 1 || chute > 100) {
        mensagem.innerHTML = "Digite um número válido entre 1 e 100!";
        return;
    }

    if (chute === numeroSecreto) {
        mensagem.innerHTML = `🎉 Você acertou! Pontos: ${pontos}`;
        mensagem.style.color = "#d4af37";
        return;
    }

    if (chute > numeroSecreto) {
        mensagem.innerHTML = "📉 O número secreto é MENOR!";
    } else {
        mensagem.innerHTML = "📈 O número secreto é MAIOR!";
    }

    let perda = Math.abs(numeroSecreto - chute);
    pontos -= perda;

    mensagem.style.color = "#f5f1e6";
}
