const crescer = document.getElementById("crescer")
const reset = document.getElementById("reset")
const diminuir = document.getElementById("diminuir")
const contador  = document.getElementById("contador")
let conta = 0
let nomee = document.getElementById("nome")

const nome = prompt ("qual é o seu nome :")

alert (`bem vindo ${nome}` )

nomee.textContent = "aumente ou diminua ".toUpperCase() 

nomee.style.borderBottom = "2px solid black"




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




var a = this 

console.log(a)


var pessoas = {
    nome : "eduardo",
    idade : 18,
    idadeNome : function (){
        console.log(`${this.nome} esta indo`)

    }

}

pessoas.idadeNome()

