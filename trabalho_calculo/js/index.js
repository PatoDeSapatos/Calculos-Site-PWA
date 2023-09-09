// variaveis "globais"
let tela = document.getElementById('tela')
let letreiro = document.getElementById('letreiro')
let texto = document.getElementsByTagName('p')

let telaPrincipal = document.getElementById("homeInput")
let telaAtual = telaPrincipal

let telaCriada = false

// Volta para a tela Principal
function mostrarHome(){
    
    texto[0].innerText = 'Calculos Úteis'
    texto[0].style.fontSize = ''

    telaAtual.style.display = "none"
    telaPrincipal.style.display = ""

    telaAtual = telaPrincipal

    document.getElementById('voltar').style.display = 'none'
    document.getElementById('respostaInput').value = ''

}

// Troca para a tela de Cálculo
function trocarTela(buttonFunction){

    // Atualiza a variável telaAtual
    telaAtual = document.getElementById('calculos')

    // Esconde elementos da tela anterior
    telaPrincipal.style.display = 'none'

    // Cria ou mostra elementos
    if (telaCriada == false){
        criarTela()
        telaCriada = true
    }else{
        document.getElementById('voltar').style.display = ''
        telaAtual.style.display = ''
    }

    if(buttonFunction == calcQuadrado){

        let secondInput = document.getElementById('respostaInput2')
        document.getElementById('respostaInput').placeholder = 'Fim do Período'

        secondInput.style.display = ''
        secondInput.placeholder = 'Inicio do Periodo'

    }else{
        document.getElementById('respostaInput2').style.display = 'none'
    }

    // Define o calculo que será realizado
    document.getElementById('enviar').onclick = buttonFunction

}

// Cria os elementos da tela de Cálculo
function criarTela(){

    // Cria elementos que aparecem na placa
    let inputNumero = document.createElement('input')
    let enviar = document.createElement('input')
    let voltar = document.createElement('img')

    // Atribui elementos a div
    let div = document.getElementById('calculos')
    letreiro.appendChild(voltar)
    div.appendChild(inputNumero)
    div.appendChild(enviar)

    // botão de voltar
    voltar.src = "img/left_arrow.png"
    voltar.id = "voltar"
    voltar.onclick = mostrarHome

    // input de numero
    inputNumero.type = "number"
    inputNumero.placeholder = "Colocar Número"
    inputNumero.id = 'respostaInput'

    //input para enviar
    enviar.type = "submit"
    enviar.value = "Checar"
    enviar.style.display = "block"
    enviar.id = 'enviar'

}

function mudarTexto(){
    texto[0].innerText = 'Calculos Úteis'
}

// Checa se um numero é primo ou não
function calcPrimo(){

    let resposta = Number(document.getElementById('respostaInput').value)
    let divisores = 0

    for (let cont = 1; cont <= resposta; cont++){
        if (resposta % cont == 0)
            divisores++
    }

    if (divisores == 2)
        texto[0].innerText = 'É Primo!'
    else
        texto[0].innerText = 'Não é primo'

}

// Checa se um número é par ou não
function checarPar(){

    let resposta = Number(document.getElementById('respostaInput').value)
    if (resposta % 2 == 0)
        texto[0].innerText = 'É par!'
    else
        texto[0].innerText = 'É Ímpar!'
}

// Calcula o fatorial de um número
function calcFatorial(){
    
    let input = document.getElementById('respostaInput')
    let inputValue = Number(document.getElementById('respostaInput').value)

    for(let i = inputValue - 1; i >= 1; i--){
        inputValue *= i
    }

    texto[0].innerText = `O Fatorial de ${input.value} é ${inputValue}`

}

// Mostra o quadrados dos números de um intervalo
function calcQuadrado(){

    let input1 = Number(document.getElementById('respostaInput2').value)
    let input2 = Number(document.getElementById('respostaInput').value)
    let output = ''

    for(let i = input1; i <= input2; i++){

        let quadrado = i * i

        let quadradoString = quadrado.toString()
        output = output.concat(`${i}² = ${quadradoString} <br>`)

    }

    texto[0].style.fontSize = 'medium'
    texto[0].innerHTML = output

}
