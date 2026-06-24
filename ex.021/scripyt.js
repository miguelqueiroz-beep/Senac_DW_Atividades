/* Verificar a hora e saudar */
let hora = new Date().getHours()

console.log(`Agora são exatamente ${hora} horas.`)
if (hora <13){
    console.log('Bom dia')
}else if (hora <=18 ) {
    console.log('Boa tarde')
}else {
    console.log('Boa noite')
}