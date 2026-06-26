/* Array - Lista */

let lista = []; /* Lista vazia */
let idade = [2, 45, 12, 6, 5];
let nomes = ['Miguel', 'Baiano', 'Tiago', 'Joao', 'No barquinho']

for (n in nomes){
    console.log(nomes[n])
}

lista.unshift(51)/* Adiciona um valor no inicio da lista  */
console.log(lista)
lista.push(20)/* Adiciona so que no finall */
lista.pop() //Rempove o ultimo elemento 
lista.shift()//remove o primeiro elemento da lista 
lista.sort() // Ordem crescente 
lista.reverse()//Ordem decrescente 
lista.splice() //
console.log(nomes.indexOf('Baiano'))

var cadastro = [
    ['Gabriel', 70, 50],
    ['Miguel', 16, 18]
]