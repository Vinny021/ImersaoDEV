var listaDeFilmes = [
    ["Donnie Darko", "https://m.media-amazon.com/images/M/MV5BZjZlZDlkYTktMmU1My00ZDBiLWFlNjEtYTBhNjVhOTM4ZjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"],
    ["Doctor Strange", "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UX182_CR0,0,182,268_AL_.jpg"], 
    ["O Auto da Compadecida", "https://m.media-amazon.com/images/M/MV5BOTNlZTkxOGUtMmI0MC00MzVjLWE4NzQtNjRjMzNjMzRmMWUyXkEyXkFqcGdeQXVyMTkzODUwNzk@._V1_UX182_CR0,0,182,268_AL_.jpg"]]

qtdDeFilmes = listaDeFilmes.length

for(var index = 0; index < qtdDeFilmes; index++){
    document.write(`<div class="box" id=filme${index}><img src="${listaDeFilmes[index][1]}" onclick=teste(${index})><span><nobr>${listaDeFilmes[index][0]}</nobr></span></div>`
    )
};

function teste(index){
    alert(`Você escolheu o filme ${listaDeFilmes[index][0]}, removendo ele de sua lista...`)
    var node = document.getElementById(`filme${index}`)
    node.parentNode.removeChild(node);
}