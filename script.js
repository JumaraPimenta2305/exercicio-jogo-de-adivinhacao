const numeroSecreto = Math.floor(Math.random() * 100) + 1
const obterElemento = (id) => document.getElementById(id)

const mensagem = obterElemento("mensagemResultado")
const elementoTentativas = obterElemento("numeroTentativa")

const tentativasMaximas = 10
let tentativasRestantes = 10

function chutar(){
    
    const palpite = parseInt(obterElemento("inputPalpite").value)

    if(palpite < 1 || palpite > 100){
        mensagem.textContent = "Número inválido!"
        return
    }

    if(palpite === numeroSecreto){
        mensagem.textContent = "Você acertou!"
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
        return
    }
}