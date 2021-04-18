var carta1 = {
    nome: "Seiya de Pégaso",
    atributos:{
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var carta2 = {
    nome: "Bulbasauro",
    atributos:{
        ataque: 70,
        defesa: 65,
        magia: 85
    }
    
}

var carta3 = {
    nome: "Darth Vader",
    atributos:{
        ataque: 88,
        defesa: 62, 
        magia: 90
    }
}

var carta4 = {
    nome: "Shyvanna",
    atributos:{
        ataque: 85,
        defesa: 80,
        magia: 75
    }
}

var carta5 = {
    nome: "Blitz",
    atributos:{
        ataque: 40,
        defesa: 80,
        magia: 60
    }
}

var cartaJogador = 0
var cartaMaquina = 0

var baralho = [carta1, carta2, carta3, carta4, carta5]

function distribuiCarta(){
    var qtdDeCartas = baralho.length
    
    var index = parseInt(Math.random() * qtdDeCartas)

    var cartaSorteada = baralho[index]
    baralho.splice(index, 1)

    return cartaSorteada
}

//Sorteia a carta para a máquina e o jogador e desencadeia a chamada de outras funções
function sortearCarta(){
    cartaMaquina = distribuiCarta()
    cartaJogador = distribuiCarta()

    console.log(cartaMaquina)
    console.log(cartaJogador)

    document.getElementById('button-draft').disabled = true
    document.getElementById('play-button').disabled = false

    exibirOpcoes()
    
}

//Ao chamar essa função será criado opções para o usuário escolher o atributo 
function exibirOpcoes(){
    var opcoes= document.getElementById('options')
    var opcoesTexto = ""
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += `<input type='radio' name='atributo' id='atributo' value='${atributo}'> ${atributo}`
    }
    opcoes.innerHTML = opcoesTexto
}

//Função utilizada para retornar qual atributo o usuário selecionou
function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')

    for(var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            console.log(radioAtributo[i].value)
            return radioAtributo[i].value
        }
    }
}

function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]){
         alert('Parabéns você ganhou! ')   
    }else if(cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]){
        alert('Você perdeu!')
    }else{
        alert()
    }
}
