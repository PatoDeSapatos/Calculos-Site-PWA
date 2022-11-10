// variaveis "globais"
let tela = document.getElementById('tela')
let letreiro = document.getElementById('letreiro')

let inputHome = document.getElementsByClassName("homeInput")
let elementsPrimo = []


// funções
function sumir(callback, tela){

    for (let i = 0; i < tela.length; i++){
        inputHome[i].style.display = "none"
    }

    callback()
}

function mostrarHome(){

}

function mostrarPrimo(){

    let inputNumero = document.createElement('input')
    let enviar = document.createElement('input')
    let voltar = document.createElement('img')

    letreiro.appendChild(voltar)
    tela.appendChild(inputNumero)
    tela.appendChild(enviar)


    // botão de voltar
    voltar.src = "img/left_arrow.png"
    voltar.id = "voltar"
    voltar.className = "primo"
    voltar.onclick = sumir(mostrarHome, elementsPrimo)

    // input de numero
    inputNumero.type = "number"
    inputNumero.placeholder = "Colocar Número"
    inputNumero.className = "primo"

    //input para enviar
    enviar.type = "submit"
    enviar.value = "Checar"
    enviar.style.display = "block"
    enviar.className = "primo"
    enviar.onclick = checarPrimo

    elementsPrimo = document.getElementsByClassName("primo")

}

function checarPrimo(){
    window.alert("funcionando")
}
