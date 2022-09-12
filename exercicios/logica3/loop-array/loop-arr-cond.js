/* Faça um programa que busque pelo nome "Mariana" numa lista de nomes e 
imprima na tela o índice em que ele se encontra.
Caso nao encontre, imprima "nao encontrado".
 */

const nomes = ['Anna', 'Karina', 'Shirlene', 'Anna', 'Karina', 'Shirlene','Anna', 'Karina', 'Shirlene','Mariana', 'Luciana']

let encontrada = false

for(let indice = 0; indice < nomes.length; indice++) {

    const nome = nomes[indice];
    
    if (nome === 'Mariana') {
        console.log(`Encontrei a Mariana no índice ${indice}`)
        encontrada = true
        break
    } 
}

if (!encontrada) {
    console.log('Mariana não encontrada')
}

