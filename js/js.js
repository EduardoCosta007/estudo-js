const crescer = document.getElementById("crescer")
const reset = document.getElementById("reset")
const diminuir = document.getElementById("diminuir")
const contador  = document.getElementById("contador")
let conta = 0

crescer.onclick = function(){
    conta++
    contador.textContent = conta
}

diminuir.onclick = function(){
    conta--
    contador.textContent = conta
}

reset.onclick = function(){
    conta = 0
    contador.textContent = conta
}





