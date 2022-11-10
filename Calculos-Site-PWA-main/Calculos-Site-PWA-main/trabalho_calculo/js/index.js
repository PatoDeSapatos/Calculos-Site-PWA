
function sumir(){
    let input = document.getElementsByTagName("input");
    for (let i = 0; i < input.length; i++){
        input[i].style.display = "none"
    }

    mostrarPrimo()
}

function mostrarPrimo(){
    let css = document.getElementsByTagName("link")
    let tela = document.getElementById('tela')

    let inputNumero = document.createElement('input')
    let enviar = document.createElement('input')

    css[0].href = "css/index2.css"

    tela.appendChild(inputNumero)
    tela.appendChild(enviar)


}
