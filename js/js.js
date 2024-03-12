const crescer = document.getElementById("crescer")
const reset = document.getElementById("reset")
const diminuir = document.getElementById("diminuir")
const contador  = document.getElementById("contador")
let conta = 0

const nome = prompt ("qual é o seu nome :")

const idade = Number(prompt("qual a sua idade"))
alert (`bem vindo ${nome}  sua idade é ${idade} anos` )


crescer.onclick = function(){
    conta++
    contador.textContent = conta

    verificar()

}

diminuir.onclick = function(){
    conta--
    contador.textContent = conta
}

reset.onclick = function(){
    conta = 0
    contador.textContent = conta
}


function verificar (){
   if(conta == 50){return alert("este número é o máximo")}


}




