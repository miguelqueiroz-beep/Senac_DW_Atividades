function somar() {
    let num1 = Number(document.getElementById('soma1').value);
    let num2 = Number(document.getElementById('soma2').value);
    let totalsoma = num1 + num2;
    resusoma.innerHTML = `<p>A soma do numero ${num1} + ${num2} é  ${totalsoma}</p>`;
}

function subtrair() {
    let n1 = Number(document.getElementById('subtra1').value);
    let n2 = Number(document.getElementById('subtra2').value);
    let totalsub = n1 - n2;
    resumsubtr.innerHTML = `<p>A subtração dos numeros ${n1} - ${n2} é  ${totalsub}</p>`;

}