let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio";

function exibirMensagem() {
    console.log("O botão foi clicado");
}


function mostrarAlerta() {
    alert("Eu amo JS");
}

function mostrarNomeCidade() {
    let cidade = prompt("Digite o nome de uma cidade bem bonita e charmosa: ");
    if (cidade) {
        alert("Estive em " + cidade + " e lembrei de você.");
    } else {
        alert("Nehuma cidade visitada :(");
    }
}

function soma() {
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let num2 = parseInt(prompt("Digite o segundo número inteiro:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números inteiros válidos.");
    } else {
        let soma = num1 + num2;
        alert("A soma é: " + soma);
    }
}
