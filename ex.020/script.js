/* Verficar se pode votar 
menos de 16 anos n vota 
entre 16 e 18 voto opcional
maior de 18 voto obrigatorio 
mais de 70 voto opcional */

let idade = 36;

if (idade < 16) {
    console.log('Não vota')
}else if(idade <18 || idade >= 70){
    console.log('Opcional')
}
else{
    console.log('voto obrigatorio')
}