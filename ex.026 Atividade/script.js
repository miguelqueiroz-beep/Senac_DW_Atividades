// Cadastrar nomes,imprimir lista e limpar
let nomes = [] 
function Cadastrar(){
    no = document.getElementById('name').value
    nomes.push(no)
}

function imprimir(){
    nom.innerHTML = `<p> ${nomes} </p>`
    
}