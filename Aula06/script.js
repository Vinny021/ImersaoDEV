var paulo = {
    nome: "Paulo",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0
}

var rafa = {
    nome: "Rafa",
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos: 0
}

function calculaPontucao(jogador){
    
    let vitorias = jogador.vitorias
    let empates = jogador.empates
    let derrotas = jogador.derrotas

    var pontos = (3 * vitorias) + (1 * empates)
    
    jogador.pontos = pontos;

}

