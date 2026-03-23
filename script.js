console.log("Bem-vindo ao jogo de Adivinhação!");


let numeroSecreto = Math.floor(Math.random() * 99) + 1;
let totalDeTentativas = 0;
let pontos = 1000;

console.log("Qual o nível de dificuldade?");
console.log("(1) Fácil (2) Médio (3) Difícil");

let nivel = parseInt(prompt("Defina o nível: "));

if (nivel === 1) {
    totalDeTentativas = 20;
} else if (nivel === 2) {
    totalDeTentativas = 10;
} else {
    totalDeTentativas = 5;
}

for (let rodada = 1; rodada <= totalDeTentativas; rodada++) {
    console.log(`Tentativa ${rodada} de ${totalDeTentativas}`);
    let chuteStr = prompt("Digite um número entre 1 e 100: ");
    console.log("Você digitou: ", chuteStr);
    let chute = parseInt(chuteStr);

    if (chute < 1 || chute > 100) {
        console.log("Você deve digitar um número entre 1 e 100!");
        continue;
    }

    let acertou = numeroSecreto === chute;
    let maior = chute > numeroSecreto;
    let menor = chute < numeroSecreto;

    if (acertou) {
        console.log(`Você acertou e fez ${pontos} pontos!`);
        break;
    } else {
        if (maior) {
            console.log("Você errou! O seu chute foi maior que o número secreto.");
        } else if (menor) {
            console.log("Você errou! O seu chute foi menor que o número secreto.");
        }
        let pontosPerdidos = Math.abs(numeroSecreto - chute);
        pontos -= pontosPerdidos;
    }
}

console.log("Fim do jogo");