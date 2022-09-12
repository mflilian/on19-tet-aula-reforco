// Par ou ímpar
// Bianca e Lilia estão jogando par ou ímpar. 
// Você deve imprimir "par" caso a vencedora seja a pessoa que escolheu par e "ímpar" caso a vencedora seja a pessoa que escolheu ímpar.

// const jogada1 = 5;
// const jogada2 = 3;

// A resposta deste exemplo é par. Lembre-se de testar seu código para outras variações de entrada.

const bianca = 13; //par
const lilia = 13; //impar

if ((bianca + lilia) % 2 === 0) {
    console.log("par");}
else {
    console.log("impar");
}

// modo com ternario
// ( condicao ) ? execute isso : se nao, execute isso

const valeria = 13; //par
const anna = 13; //impar

// criei uma variavel que usa o ternario para definir o valor dela
// primeira parte do ternario so eh executada se a condicao for verdadeira, e a segunda caso seja falsiane
const quemVenceu = ((valeria + anna) % 2 === 0) ? "par" : "impar"
console.log(quemVenceu)

// modo switch case

const karina = 13; //par
const anne = 13; //impar

switch ((karina + anne) % 2 === 0) {
    case true:
        console.log("par");
        break;
    
    case false:
        console.log("impar")
        break;
    
    default: console.log("outra coisa que ninguem sabe")
}