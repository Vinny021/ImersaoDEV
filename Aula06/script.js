var jogadores = []

function criaJogador(){
    var nomeDoJogador = prompt("Digite o seu nome: ")

    var jogador = {
        nome: nomeDoJogador,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    }

    jogadores.push(jogador)

    exibirJogadores(jogadores)
}

function calculaPontucao(jogador){
    
    let vitorias = jogador.vitorias
    let empates = jogador.empates

    var pontos = (3 * vitorias) + (1 * empates)
    
    jogador.pontos = pontos;

}

function exibirJogadores(listaDeJogadores){
    var html = ""

    
    for(var i = 0; i < listaDeJogadores.length; i++){
        calculaPontucao(listaDeJogadores[i])
        
        html += `<tr><td>${listaDeJogadores[i].nome} </td>`
        html += `<td>${listaDeJogadores[i].vitorias} </td>`
        html += `<td>${listaDeJogadores[i].empates} </td>`
        html += `<td>${listaDeJogadores[i].derrotas} </td>`
        html += `<td>${listaDeJogadores[i].pontos} </td>`
        html += `<td><button onclick="adicionarVitoria(${i})">Vitória</button></td>`
        html += `<td><button onclick="adicionarEmpate(${i})">Empate</button></td>`
        html += `<td><button onclick="adicionarDerrota(${i})">Derrota</button></td></tr>`
        
    }
    
    

    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

function adicionarVitoria(i){
    jogador = jogadores[i]
    jogador.vitorias += 1

    exibirJogadores(jogadores)
}

function adicionarEmpate(i){
    jogador = jogadores[i]
    jogador.empates += 1

    exibirJogadores(jogadores)
}

function adicionarDerrota(i){
    jogador = jogadores[i]
    jogador.derrotas += 1

    exibirJogadores(jogadores)
}
