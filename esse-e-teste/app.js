let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';
function verificarConsoleB() {
    console.log('O botao foi clicado');
}

function exibirAlerta() {
    alert('Eu amo JS');
}

function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${nomeDaCidade} e lembrei de você! <3`);
}

function fazerSoma() {
    let primNumero = parseInt(prompt('Digite um numero entre 1 e 10'));
    let seguNumero = parseInt(prompt('Escolha mais um numero entre 1 e 10'));
    let soma = primNumero + seguNumero;
    alert(`A soma é igual: ${soma}`);
}

function exibirOla() {
    console.log('Olá, Mundo');
}

exibirOla();

function exibirOlaNome(nome) {
    console.log(`Olá ${nome}!`);
}

exibirOlaNome('Mayara');


