let numeroSecreto = Math.floor(Math.random() * 100) + 1
const obterElemento = (id) => document.getElementById(id)

const mensagem = obterElemento("mensagemResultado")
const elementoTentativas = obterElemento("numeroTentativa")

const tentativasMaximas = 10
let tentativasRestantes = tentativasMaximas
let jogoAtivo = true

function chutar(){
     if(!jogoAtivo){
        return
     }
    const palpite = parseInt(obterElemento("inputPalpite").value)

    if(palpite < 1 || palpite > 100){
        mensagem.textContent = "Número inválido!"
        return
    }

    if(palpite === numeroSecreto){
        mensagem.textContent = "Você acertou!"
        jogoAtivo = false
        return
    }else if(palpite > numeroSecreto){
        mensagem.textContent = "O número secreto é menor!"
    }else{
        mensagem.textContent = "O número secreto é maior!"
    }
        tentativasRestantes--
        
        elementoTentativas.textContent = `Tentativas: ${tentativasRestantes}`
    
    if(tentativasRestantes === 0){
        mensagem.textContent = `Você perdeu! O número era ${numeroSecreto}`
        jogoAtivo = false
        return
    }
}
function novoJogo() {

    numeroSecreto = Math.floor(Math.random() * 100) + 1

    tentativasRestantes = tentativasMaximas

    jogoAtivo = true

     mensagem.textContent = ""

    elementoTentativas.textContent = `Tentativas: ${tentativasRestantes}`

     obterElemento("inputPalpite").value = ""
}