var operacao = Number(prompt
    ("Digite o numero da opração desejada desejada: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão"))

if (operacao !=1 && operacao !=2 && operacao !=3 && operacao !=4){
    do{
        var operacao = Number(prompt
            ("OPÇÃO INVÁLIDA! \n Digite o numero da opração desejada desejada: \n 1 - Soma \n 2 - Subtração \n 3 - Multiplicação \n 4 - Divisão"))
    } while(operacao !=1 && operacao !=2 && operacao !=3 && operacao !=4)   
}


var primeiroValor = Number(prompt("Digite o primeiro valor: "))
var segundoValor = Number(prompt("Digite o segundo valor: "))

if(operacao == 1){
    var resultado = (primeiroValor + segundoValor).toFixed(2)
    var simboloOperacao = "+"
}else if(operacao == 2){
    var resultado = (primeiroValor - segundoValor).toFixed(2)
    var simboloOperacao = "-"
}else if(operacao == 3){
    var resultado = (primeiroValor * segundoValor).toFixed(2)
    var simboloOperacao = "X"
}else if(operacao == 4){
    var resultado = (primeiroValor / segundoValor).toFixed(2)
    var simboloOperacao = "/"
}

function escreveResultado(){
    document.write
(`<h2>${primeiroValor} ${simboloOperacao} ${segundoValor} = ${resultado}</h2>`)
}  


var index = (Math.random() * (5 - 1) + 1).toFixed(0);

function mudaParaImagemDoPokemon(){
    if(index == 1){
        imagemPokemon = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
        mudarImagem('imagem-primeiro-plano', imagemPokemon)
    }else if(index == 2){
        imagemPokemon = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
        mudarImagem('imagem-primeiro-plano', imagemPokemon)
    }else if(index == 3){
        imagemPokemon = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
        mudarImagem('imagem-primeiro-plano', imagemPokemon)
    }else if(index == 4){
        imagemPokemon = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
        mudarImagem('imagem-primeiro-plano', imagemPokemon)
    }else if(index == 5){
        imagemPokemon = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png'
        mudarImagem('imagem-primeiro-plano', imagemPokemon)
    }
}


function sortear(){
    index = (Math.random() * (5 - 1) + 1).toFixed(0);
    mudaParaImagemDoPokemon()
}

function iniciaQuiz(){

    if(index == 1){
        var nomeCorreto = "bulbasaur"
        var nomeCaptalizado = nomeCorreto.charAt(0).toUpperCase() + nomeCorreto.slice(1);
    }else if(index == 2){
        var nomeCorreto = "charmander"
        var nomeCaptalizado = nomeCorreto.charAt(0).toUpperCase() + nomeCorreto.slice(1);
    }else if(index == 3){
        var nomeCorreto = "squirtle"
        var nomeCaptalizado = nomeCorreto.charAt(0).toUpperCase() + nomeCorreto.slice(1);
    }else if(index == 4){
        var nomeCorreto = "pikachu"
        var nomeCaptalizado = nomeCorreto.charAt(0).toUpperCase() + nomeCorreto.slice(1);
    }else if(index == 5){
        var nomeCorreto = "ditto"
        var nomeCaptalizado = nomeCorreto.charAt(0).toUpperCase() + nomeCorreto.slice(1);
    }

    var nomePokemon = prompt("Digite o nome: ").toLowerCase()

    if (nomePokemon == nomeCorreto){
        alert(`Isso mesmo! é o ${nomeCaptalizado}.`)
    } else{
        alert(`Você errou, era o ${nomeCaptalizado}.`)
    }

    sortear()
}

function mudarTexto(buttonId, texto){
    document.getElementById(buttonId).textContent = texto;
}

function mudarFuncao(buttonId, funcao){
    document.getElementById(buttonId).onclick = funcao
}

function mudarImagem(elementId, endereco){
    document.getElementById(elementId).src = endereco 
}

function mudaVisibilidade(elementId, visibilidade){
    document.getElementById(elementId).style.visibility = visibilidade
}

function mudaPaginaPokemon(){
    mudaParaImagemDoPokemon()

    mudaVisibilidade('calculadora', 'hidden');
    mudaVisibilidade('prompt-button', 'visible');
    mudaVisibilidade('div-resultado', 'hidden');

    mudarTexto('page-title', 'Quem é esse pokemon ?');
    mudarTexto('button-mudanca', 'Calculadora');


    mudarImagem('imagem-primeiro-plano', imagemPokemon);

    mudarFuncao('button-mudanca', mudaPaginaCalculadora);

}

function mudaPaginaCalculadora(){
    mudaVisibilidade('calculadora', 'visible');
    mudaVisibilidade('div-resultado', 'visible');
    mudaVisibilidade('prompt-button', 'hidden');

    mudarTexto('page-title', 'Calculadora');
    mudarTexto('button-mudanca', 'Quiz Pokemon');

    mudarImagem('imagem-primeiro-plano', 'https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-calculadora.svg');

    mudarFuncao('button-mudanca', mudaPaginaPokemon);
}


