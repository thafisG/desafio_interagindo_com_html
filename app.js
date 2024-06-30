let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function Console() {
    console.log("O botão foi clicado");
}


function Alert() {
    alert("Eu amo JS");
}

function Prompt() {
    let cidade = prompt("Digite o nome de uma cidade bem bonita e charmosa: ");
    if (cidade) {
        alert("Estive em " + cidade + " e lembrei de você.");
    } else {
        alert("Nehuma cidade visitada :(");
    }
}

function Soma() {
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let num2 = parseInt(prompt("Digite o segundo número inteiro:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números inteiros válidos.");
    } else {
        let soma = num1 + num2;
        alert("A soma é: " + soma);
    }
}
