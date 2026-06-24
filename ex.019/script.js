/* Trabalhando com funcções if e else */
/* objetivo verificar atraves da media do aluno se ele foi aprovado ou não */

let media = 4; 
let situacao = ''
if (media >= 7){
    situacao = 'Aprovado';
}else if (media < 5) {
    situacao = 'Reprovado'
}
else{
    situacao = 'Recuperação'
}
console.log(`Aluno ${situacao}. Sua media é ${media}`);