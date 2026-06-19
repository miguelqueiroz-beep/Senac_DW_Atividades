/* window.alert('Olá Mundo') */  /* somente para atexto */
window.console.log('Olá Mundo - Console Log'); /* Para terminal */
let nome = window.prompt(`Digite seu nome`) /* Um alerta para inserir alguma informação no site */
let ome = document.getElementById('primeironome')
console.log(ome)
ome.innerHTML = `<p>Ola Mundo! Receba ${nome} como novo jogador</p>`
ome.style.color = `blue`