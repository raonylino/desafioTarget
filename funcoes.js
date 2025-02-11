const faturamentoDiario = [
    { "dia": 1, "faturamento": 200 },
    { "dia": 2, "faturamento": 0 },
    { "dia": 3, "faturamento": 450 },
    { "dia": 4, "faturamento": 700 },
    { "dia": 5, "faturamento": 0 },
    { "dia": 6, "faturamento": 550 },
    { "dia": 7, "faturamento": 0 },
    { "dia": 8, "faturamento": 300 },
    { "dia": 9, "faturamento": 500 },
    { "dia": 10, "faturamento": 0 },
    { "dia": 11, "faturamento": 800 },
    { "dia": 12, "faturamento": 0 },
    { "dia": 13, "faturamento": 600 },
    { "dia": 14, "faturamento": 0 },
    { "dia": 15, "faturamento": 750 }
];

let menorFaturamento = Number.MAX_VALUE;
let maiorFaturamento = 0;
let somaFaturamento = 0;
let diasComFaturamento = 0;
let diasAcimaDaMedia = 0;

faturamentoDiario.forEach(item => {
    const faturamento = item.faturamento;

    if (faturamento > 0 && faturamento < menorFaturamento) {
        menorFaturamento = faturamento;
    }

    if (faturamento > maiorFaturamento) {
        maiorFaturamento = faturamento;
    }

    if (faturamento > 0) {
        somaFaturamento += faturamento;
        diasComFaturamento++;
    }
});

const mediaMensal = somaFaturamento / diasComFaturamento;

faturamentoDiario.forEach(item => {
    if (item.faturamento > mediaMensal) {
        diasAcimaDaMedia++;
    }
});

document.getElementById("menorFaturamento").innerText = `Menor valor de faturamento: R$ ${menorFaturamento}`;
document.getElementById("maiorFaturamento").innerText = `Maior valor de faturamento: R$ ${maiorFaturamento}`;
document.getElementById("diasAcimaDaMedia").innerText = `Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`;

function analisarFaturamento() {
    let faturamentoEstados = {
        "SP": 67836.43,
        "RJ": 36678.66,
        "MG": 29229.88,
        "ES": 27165.48,
        "Outros": 19849.53
    };
    let total = Object.values(faturamentoEstados).reduce((acc, val) => acc + val, 0);
    let resultado = "";
    for (let estado in faturamentoEstados) {
        let percentual = ((faturamentoEstados[estado] / total) * 100).toFixed(2);
        resultado += `${estado}: ${percentual}%<br>`;
    }
    document.getElementById("faturamento").innerHTML = resultado;
}

function verificarFibonacci() {
    let num = parseInt(document.getElementById("numFibonacci").value);
    let a = 0, b = 1;
    while (a < num) {
        [a, b] = [b, a + b];
    }
    document.getElementById("resultadoFibonacci").innerText = a === num ? "O número pertence à sequência de Fibonacci." : "O número NÃO pertence à sequência de Fibonacci.";
}

function inverterString() {
    let str = document.getElementById("stringInput").value;
    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    document.getElementById("resultadoString").innerText = "String invertida: " + invertida;
}

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

document.getElementById("resultado").innerText = "O valor de SOMA é: " + SOMA;