let co = 0 

function gerartabela() {
    let num = Number(document.getElementById('nume').value)
    let tabu = document.getElementById('tabu')
    let mul = document.querySelector('.mul')


    tabu.innerHTML = `<p>Tabuada de ${num}</p>`
    mul.innerHTML = '' 

  
    for (co; co <= 10; co++) {
        let res = num * co

        mul.innerHTML += `<p>${num} X ${co} = ${res}</p>` 
    }

    
}