// // Faça um programa que, a partir de um array, cria um novo array com os mesmos elementos 
// //mas que todos os elementos comecem com letras maiúsculas 
// //e em cada elemento seja adicionado o número do índice correspondente.

// const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]
// Para o exemplo acima, o resultado deve ser:

// ['0 - Manga', '1 - Uva', '2 - Abacaxi', '3 - Banana', '4 - Maçã']

const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const novaLista = frutas.map(( elemento, index ) => {
    
    return `${index} - ${elemento[0].toUpperCase() + elemento.slice(1, elemento.length).toLowerCase()} `
    
    }
)

console.log(novaLista)


let aulasDoDia = ["semana1", "semana2", "semana3", "semana4"];

// o splice vai dizer onde comecar a remover elementos, quantos elementos ele vai remover e quais elementos ele vai adicionar.
// no nosso caso, ele começa a remover a partir do indice 0, remove 3 elementos e adiciona o elemento "foi tudo essas revisoes das semanas amohhh"
let concluidas = aulasDoDia.splice(0, 3, "foi tudo essas revisoes das semanas amohhh" )

console.log(aulasDoDia)