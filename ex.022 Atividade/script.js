function verificacao() {
    let velocidade = Number(document.getElementById('velocidade').value)
    if (velocidade <= 50) {
        vel.innerHTML = `<p>Sua velocidade atual é de ${velocidade}Km/h</p>`
        t.innerHTML = `<p> Velocidade dentro do limite.</p>`
    }else{
        vel.innerHTML = `<p>Sua velocidade atual é de ${velocidade}Km/h
        
        Velocidade fora do limte do limite. Você foi multado</p>`
        t.innerHTML = `<p> Velocidade fora do limte do limite. Você foi <span id = "Multa" MULTADO> </p>`

        Multa.style.color = 'red'
    }
}