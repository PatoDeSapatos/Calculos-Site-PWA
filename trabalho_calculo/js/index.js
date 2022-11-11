// variaveis "globais"
let tela = document.getElementById('tela')
let letreiro = document.getElementById('letreiro')

let telaPrincipal = document.getElementsByClassName("homeInput")
let telaAtual = telaPrincipal

// funções
function mostrarHome(){

    for(let v = 0; v < telaAtual.length; v++){
        telaAtual[v].style.display = "none"
    }

    for (let i = 0; i < telaPrincipal.length; i++){
        telaPrincipal[i].style.display = ""
    }

    telaAtual = telaPrincipal

}

function trocarTela(className, inputFunction){

    // Esconde elementos da tela anterior
    for (let i = 0; i < telaAtual.length; i++){
        telaPrincipal[i].style.display = "none"
    }

    // Cria elementos que aparecem na placa
    let inputNumero = document.createElement('input')
    let enviar = document.createElement('input')
    let voltar = document.createElement('img')

    // Atribui elementos a div
    letreiro.appendChild(voltar)
    tela.appendChild(inputNumero)
    tela.appendChild(enviar)


    // botão de voltar
    voltar.src = "img/left_arrow.png"
    voltar.id = "voltar"
    voltar.className = className
    voltar.onclick = mostrarHome

    // input de numero
    inputNumero.type = "number"
    inputNumero.placeholder = "Colocar Número"
    inputNumero.className = className

    //input para enviar
    enviar.type = "submit"
    enviar.value = "Checar"
    enviar.style.display = "block"
    enviar.className = className
    enviar.onclick = inputFunction

    // Atualiza a variável telaAtual
    telaAtual = document.getElementsByClassName(className)

}

function checarPrimo(){
    window.alert("funcionando")
}

function checarPar(){
    window.alert('numero par')
}

function calcularFatorial(){

}

function calcularQuadrado(){

}